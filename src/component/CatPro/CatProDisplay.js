import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


class CatProDisplay extends Component {
  constructor(props) {
    super(props);
    this.orderId = [];
    this.state = {
      productData: this.props.productData,
      message: '',
      //orderId:[]
    }


  }

  placeOrder = (product_name) => {
    const orderId = JSON.parse(sessionStorage.getItem('products')) || [];
    const itemExists = orderId.find(item => item === product_name);
    if (!sessionStorage.getItem('ltk')) {
      toast.info('Please Login First!', {
        //autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          this.props.history.push('/login/login');
        }
      });
    } else if (itemExists) {
      toast.warning('Already in cart!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      orderId.push(product_name);
      sessionStorage.setItem('products', JSON.stringify(orderId));
      this.props.finalOrder(orderId);
    }
  }

  removeOrder = (product_name) => {
    const orderId = JSON.parse(sessionStorage.getItem('products')) || [];
    const itemIndex = orderId.indexOf(product_name);

    if (itemIndex > -1) {
      orderId.splice(itemIndex, 1);
      sessionStorage.setItem('products', JSON.stringify(orderId));
      this.props.finalOrder(orderId);
      toast.success('item has been removed', { position: toast.POSITION.TOP_CENTER })
    }
  }


  renderData = ({ CatData }) => {
    if (CatData) {
      if (CatData.length > 0) {
        return CatData.map((item) => {
          return (

            <div key={item._id} className="card border-0 col-md-4 col-lg-2 col-sm-4 col-6 mb-3">
              <div className="picture1">
           <img src={item.Image} alt="1" className="img-responsive"/>
           </div>
           <div className="picture2">
            <img src={item.Image1} alt="image1" className="img-responsive" style={{width:'-webkit-fill-available'}}/>
           </div>
              <div className="card-body text-center ">
                <h4 className="card-title " >{item.product_name}</h4>
                <p className="card-text mt-3" ><del>₹249.00</del> <span>{item.Price}</span></p>
                <button className="btn btn-dark"
                  onClick={() => { this.placeOrder(item.product_name) }} >
                  +
                </button>&nbsp;
                <Link to={`/Details/Details?listid=${item.product_id}`} className="btn btn-dark">View more</Link>
                <button className="btn btn-dark"
                  onClick={() => { this.removeOrder(item.product_name) }}>
                  -
                </button>

              </div>
            </div>

          )
        })
      } else {
        return (
          <div>
            <h2>No Data </h2>
          </div>
        )
      }
    } else {
      return (
        <div>
          <h1>Loading......</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {/* <div  className="alert  "  style={{color:'red',textAlign:'end'}}>
        
        {this.state.message && <strong>{this.state.message}</strong>}
      </div> */}
        <ToastContainer />
        <div className="row " >

          {this.renderData(this.props)}
        </div>
      </>

    )
  }
}
export default withRouter(CatProDisplay);