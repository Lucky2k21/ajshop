import React, { Component } from 'react';
import "./Product.css";
import Header from '../Header';
import ProductDisplay from './ProductDisplay';
import Footer from '../Footer';

//import axios from 'axios';
const qurl="https://ajshop.onrender.com/product";
//const url="https://ajshop.onrender.com/descriptionDetail";



class Product extends Component{
   constructor(){
      super()

      this.state={
         product:[],
         product_id:sessionStorage.getItem('product_id'),
         product_name:sessionStorage.getItem('product_name'),
         userItem:[],
         list:'',
         message:'',
         searchQuery: '',
         keyword: 'User input',
         originalProductData:[]
         
      }
   }


   
  handleChange = (event) => {
   console.log(event.target.value);
   const keyword = event.target.value;
   this.setState({ keyword });
   //this.userInput(event.target.value)
   if (keyword.trim() === '') {
     this.filterData('');
   } else {
     this.filterData(keyword);
   }
 };
 

 filterData = (keyword) => {
   const filteredProducts = keyword === ''
     ? [...this.state.originalProductData] // display all products when keyword is empty
     : this.state.originalProductData.filter((product) => {
         return product.product_name.toLowerCase().includes(keyword.toLowerCase());
       });
   this.setState({ product: filteredProducts });
 }
   addToCart=(data)=>{
      this.setState({userItem:data})
   }

   /* handleSearch = (event) => {
      this.setState({ searchQuery: event.target.value });
      }; */

   /* proceed=()=>{
      localStorage.setItem('products',JSON.stringify(this.state.userItem))
      this.props.history.push(`/Cart/Cart/${this.state.userItem}`)
   } */

    render(){
      
        return(
            <>
            <Header onChange={this.handleChange} userInput={(data)=>{this.filterData(data)}}/>
            <div>
            {/* <button  className="btn btn-success" onClick={this.proceed}></button> */}
            </div>
            <section  id="product"  style={{backgroundColor:'var(--primary-color)'}} data-aos="fade">

            <div id="demo" className="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <video src="/prodbanner.mp4"   loop muted alt="Chicago" autoPlay={true} className="d-block" style={{width:'100%',height:'500px',objectFit:'fill'}}></video>
    </div>
    <div className="carousel-item">
    <video src="/serbanner.mp4"   loop muted alt="Chicago" autoPlay={true} className="d-block" style={{width:'100%',height:'500px',objectFit:'fill'}}></video>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{background:"none",color:'black'}}>
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{background:"none"}}>
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
            
  <div className='container-fluid' data-aos="fade">
     <div className="title text-center py-5">
        <h1 className="position-relative d-inline-block" style={{color:'var(--secondary-color)',textTransform:'capitalize'}}>Products</h1>
        
     </div>

     {/* <div className="search-container">
                    <input type="text" placeholder="Search..." value={this.state.searchQuery} onChange={this.handleSearch} />
                </div> */}



                <ProductDisplay productData={this.state.product/* .filter(item => item.product_name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) */}
                
                    finalOrder={(data)=>{this.addToCart(data)}}/>
                    </div>
            </section>

<Footer/>
            </>
        )
    }
    componentDidMount(){
      
      fetch(`${qurl}`,{method:'GET'})
      .then((res)=>res.json())
      .then((data)=>{
         this.setState({product:data, originalProductData:data})
         console.log({originalProductData:data})
      })
     }

    



} 

export default Product