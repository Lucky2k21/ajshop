import React,{Component} from "react";
import {Link,withRouter } from 'react-router-dom';
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';
import './Product.css';


//const ProductDisplay=(props)=>{
    class ProductDisplay extends Component{
        constructor(props){
           super(props);
           this.orderId=[];
       this.state={
        productData:this.props.productData,
        message:'',
       //orderId:[]
       }


        }




placeOrder = (product_name) => {
    const orderId = JSON.parse(sessionStorage.getItem('products')) || [];
    const itemExists = orderId.find(item => item === product_name);
    if(!sessionStorage.getItem('ltk')){
      toast.info('Please Login First!', {
        //autoClose: 3000,
        position:toast.POSITION.TOP_CENTER,
        onClose: () => {
          this.props.history.push('/login/login');
        }
      });
    } else if (itemExists) {
      toast.warning('Already in cart!', {
        position:toast.POSITION.TOP_CENTER,
      });
    } else {
      orderId.push(product_name);
      sessionStorage.setItem('products', JSON.stringify(orderId));
      this.props.finalOrder(orderId,product_name);
    }
  }

  removeOrder = (product_name) => {
    const orderId = JSON.parse(sessionStorage.getItem('products')) || [];
    const itemIndex = orderId.indexOf(product_name);

    if (itemIndex > -1) {
      orderId.splice(itemIndex, 1);
      sessionStorage.setItem('products', JSON.stringify(orderId));
      this.props.finalOrder(orderId);
      toast.success('item has been removed',{position:toast.POSITION.TOP_CENTER})
    }
  }

renderCart=(orders)=>{
    if(orders){
        return orders.map((item,index)=>{
            return(
                <b key={index}>{item}&nbsp;</b>
            )
        })
    }
}

     listProduct=({productData})=>{
        if(productData){
            return productData.map((item,item_id)=>{
                return(
                    

<div key={item_id} className="card border-1 col-md-4 col-lg-2 col-sm-4 col-6 mb-3" style={{backgroundColor: 'aliceblue'}}>
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
                            onClick={() => {this.placeOrder(item.product_name)}} >
                                +
                            </button>&nbsp;
              <Link to={`/Details/Details?listid=${item.product_id}`}  className="btn btn-dark">View more</Link>&nbsp;
              
                            <button className="btn btn-dark"
                             onClick={() => {this.removeOrder(item.product_name)}}>
                                -
                            </button>

           </div>
        </div>


                )
            })
        }
    }


render(){
    return(
        <>
        {/* <div  className="alert  " title={this.state.message} style={{color:'red',textAlign:'end'}}>
        
        {this.state.message && <strong>{this.state.message}</strong>}
      </div> */}
      <ToastContainer />
        <div className="row " >
            
            
      
               {this.listProduct(this.props)}
               
            </div></>

    )}
}

export default withRouter(ProductDisplay)