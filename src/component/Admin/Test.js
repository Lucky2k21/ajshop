/* import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import AdminHeader from '../Admin/AdminHeader';
import { useHistory,useParams } from 'react-router-dom';


const ProductUpdate=()=>{

let history=useHistory();
const{product_id}=useParams();

const[user,setUser]=useState({
product_name:"",
Price:""
});

useEffect(()=>{
   loadUser();
});


const{product_name,Price}=user;
const onInputChange=e=>{
   setUser( e.target.value);
};

const onSubmit= async e=>{
   e.preventDefault();
   await axios.put(`https://ajshop.onrender.com/updateProduct/${product_id}`, user);
   history.push("/Admin/ProductList");
};

const loadUser = async ()=>{
   const result = await axios.get(`https://ajshop.onrender.com/productDetail/${product_id}`);
   setUser(result.data);
};

   return(
      <>
      <AdminHeader/>
      <div className='container'>
         <h2>Edit</h2>
         <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
               <input type="text" className="form-control" placeholder="name" name="name"  value={product_name} onChange={e=>onInputChange(e)}/>
            </div>
            <div className="form-group">
               <input type="text" className="form-control" placeholder="price" name="name"  value={Price} onChange={e=>onInputChange(e)}/>
            </div>
            <button className="btn btn-warning">Update</button>
         </form>

      </div>

</>
   );
}


export default ProductUpdate;

//<input type="text" className="form-control" onChange={(e)=>setCName(e.target.value)} placeholder="category name"/><br/>

constructor(props){
   super(props)

   this.state={
       userItem:'',
       items:[],
       details:[]
   }
}

addToCart=(data)=>{
   this.setState({userItem:data})
   const item={
       
       Image:Image,
       quantity:1,
       
   }
   const {details}=this.state;
this.props.addToCart(details);
console.log(details)
   
   const items = this.state.items.slice(); // create a copy of the items array
let itemExists = false;

// check if the item already exists in the cart
for (let i = 0; i < items.length; i++) {
 if (items[i].id === item.id) {
   items[i].quantity++;
   itemExists = true;
   break;
 }
}

// if the item doesn't exist, add it to the cart
if (!itemExists) {
 items.push(item);
}

this.setState({
 items: items,
});

}



render(){
   const {items} =this.state;
   return(
       <>
       <Header/>
       <div>
   <h2>Cart</h2>
   {items.length > 0 ? (
     <div>
       <h3>Items in Cart:</h3>
       <Details addToCart={this.props.addToCart()} />
     </div>
   ) : (
     <p>No items in cart.</p>
   )}
 </div>
           </>
   )
}
 */

/* placeOrder = (product_id) => {
    const orderId = JSON.parse(localStorage.getItem('products')) || [];
    const itemExists = orderId.find(item => item === product_id);
    if(!localStorage.getItem('ltk')){
    
        this.setState({message:'Please Login First!'},()=>{
            setTimeout(()=>{
                this.setState({message:''},()=>{
                    this.props.history.push('/login/login')
                });
            },3000);
        })
        
        
      }else if (itemExists) {
      
      this.setState({message:'Already in cart!'},()=>{
        setTimeout(()=>{
            this.setState({message:''});
        },3000);
      });
    }else{

    orderId.push(product_id);
    localStorage.setItem('products', JSON.stringify(orderId));
    this.props.finalOrder(orderId);
    
  }
} */