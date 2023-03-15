import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Header.css';
const url = "https://loginapi-3o7x.onrender.com/api/auth/userinfo";


class AdminHeader extends Component {

  constructor() {
    super()

    this.state = {
      keyword: 'User input',
      userData: ''

    }

  }

  handleLogout = () => {
    sessionStorage.removeItem('ltk');
    this.setState({ userData: '' })
    this.props.history.push('/Admin/Login')

  }

  conditionalHeader = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      sessionStorage.setItem('userInfo', JSON.stringify(data))
      return (
        <>
          <Link to="/Admin/AdminHeader" id="login" className="btn btn-dark" style={{ color: 'white' }}>
            <span className='fa-solid fa-user'></span> {data.name}
          </Link> &nbsp;
          <button onClick={this.handleLogout} className="btn btn-danger" style={{ color: 'white' }}>
            <span className='fa-solid fa-arrow-right-to-bracket' style={{ fontSize: '13px' }}></span>Logout
          </button>
        </>
      )
    } else {
      return (
        <>
          <Link to="/Admin/login" id="login" className="btn btn-dark" style={{ color: 'white' }}>
            <span className='fa-solid fa-user'></span> Login
          </Link>
        </>
      )
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar" >
          <div className="container">
            <Link className="navbar-brand" to={'/Admin/AdminHeader'}><img src="https://i.ibb.co/XSKtDHH/Logo1.png" alt="l" id="image" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto my-2 my-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active " to={`/AddProduct/AddProduct`} >Add Product</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`/Admin/ProductList`}>Product List</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`/Admin/Description`}>Add Details</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`/Admin/DescriptionList`}>Product Details</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`/Admin/Order`}>Orders</Link>
                </li>


              </ul>
              {this.conditionalHeader()}



            </div>
          </div>
        </nav>




      </>
    )
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
        this.setState({ userData: data })
      })

  }
}

export default AdminHeader