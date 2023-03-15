import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.css';
const url = "https://loginapi-3o7x.onrender.com/api/auth/userinfo"
const purl = 'https://ajshop.onrender.com/detailproduct';

class Header extends Component {

  constructor() {
    super()

    this.state = {

      userData: '',
      size: '',
      changemode: '',
      products: '',
      productLength: 0,
      keyword: 'User input',

    }


  }




  changemode = () => {
    let icon = document.getElementById("icon");
    if (icon) {
      document.body.classList.toggle("dark-theme");
    }
  }

  handleChange = (event) => {
    this.props.history.push('/Product/Product');
    console.log(event.target.value);
    this.setState({ keyword: event.target.value });

    if (typeof this.props.userInput === "function") {
      this.props.userInput(event.target.value);
    }
  };


  handleLogout = () => {
    sessionStorage.removeItem('ltk');
    this.setState({ userData: '' })
    sessionStorage.removeItem('products');
    this.setState({ products: '' })
    this.props.history.push('/')
  }

  conditionHeader = () => {
    if (this.state.userData && this.state.userData.name) {
      let data = this.state.userData;
      sessionStorage.setItem('userInfo', JSON.stringify(data))
      return (
        <>
          <Link to="/" id="login" className="btn btn-dark" style={{ color: 'white' }}>
            <span className='glyphicon glyphicon-user'></span> {data.name}
          </Link> &nbsp;
          <button onClick={this.handleLogout} className="btn btn-danger" style={{ color: 'white' }}>
            <span className='glyphicon glyphicon-log-out'></span> Logout
          </button></>
      )

    } else {
      return (
        <>
          <Link to="/login/login" id="login" className="btn btn-dark" style={{ color: 'white' }}>
            <span className='glyphicon glyphicon-log-in'></span> Login
          </Link> &nbsp;
        </>
      )
    }
  }



  render() {
    const { products } = this.state;
    const productLength = products.length;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar" >
          <div className="container">
            <Link className="navbar-brand" to={'/'}><img src="https://i.ibb.co/XSKtDHH/Logo1.png" alt="l" id="image" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto my-2 my-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active " to={`/`} >Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`/Product/Product`}>Products</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`/Contact/Contact`}>Contact</Link>
                </li>
              </ul>
              <form className="d-flex me-2"  >
                <input type="text" placeholder="Search..." id="search-field" onChange={this.handleChange} />

              </form>




              {this.conditionHeader()}
              <Link className="btn" to={`/Cart/Cart/:product_id`} title="cart!" ><i className="fa-solid fa-bag-shopping" ></i>{productLength}</Link>
              <button><i className="fa-solid fa-sun" id="icon" onClick={this.changemode} style={{ color: 'var(--third-color)' }}></i></button>


            </div>
          </div>
        </nav>




      </>
    )
  }
  componentDidUpdate() {
    const products = JSON.parse(sessionStorage.getItem('products'));
    if (products) {
      const productLength = products.length;
      if (productLength !== this.state.products.length) {
        this.setState({ products, productLength });
      }
    }
  }
  componentDidMount() {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-access-token': sessionStorage.getItem('ltk')
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data
        })

      })
    let products = JSON.parse(sessionStorage.getItem('products'));
    //console.log(products)


    fetch(purl, {
      method: "Post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product_id: products })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        //this.setState({products:data})
        //console.log(data)



        this.setState({ products: data })

      })
  }
}

export default withRouter(Header)