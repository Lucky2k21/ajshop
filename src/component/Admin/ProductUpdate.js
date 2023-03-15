import React from 'react';
import { useState, useEffect } from 'react';

import AdminHeader from '../Admin/AdminHeader';

import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';
const ProductUpdate = () => {

   const [product_name, setName] = useState([]);
   const [Image, setImage] = useState("");

   const [Price, setPrice] = useState("");
   const [category_id, setCId] = useState("");
   const [category, setCName] = useState("");

   const handleImage = (e) => {
      const file = e.target.files[0];
      setFileToBase(file);
   }

   const setFileToBase = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
         setImage(reader.result);
      }
   }


   const { product_id } = useParams();




   useEffect(() => {
      getProduct();
      // 👇️ disable the rule for a single line

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const updateProduct = async () => {


      let item = { product_name, Image, Price, category_id, category }
      let result = await fetch(`https://ajshop.onrender.com/upProduct/${product_id}`, {
         method: 'PUT',

         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(item),

      });

      result = await result.json();
      console.log(result)
      //alert('updated');
      toast.success('Product Updated!', {
         //autoClose: 3000,
         position:toast.POSITION.TOP_CENTER,
         
       });

   }

   const getProduct = async () => {

      let result = await fetch(`https://ajshop.onrender.com/productDetail/${product_id}`);
      result = await result.json();


      setName(result.product_name)
      setImage(result.Image)
      setPrice(result.Price)
      setCId(result.category_id)
      setCName(result.category)


   }

   return (
      <>
         <AdminHeader />
         <ToastContainer />
         <div className="col-sm-6 container p-5 "  >
            <center> <h1>update Product</h1><hr style={{
               content: "",
               background: '#cc0099',
               display: 'block',
               height: '3px',
               width: '100px',
               opacity: 'inherit'
            }} /></center>
            <br />

            <input contentEditable="true" type="text" className="form-control" value={product_name} onChange={(e) => { setName(e.target.value) }} /><br />
            <input type="file" className="form-control" onChange={handleImage}
               placeholder="Image url" defaultValue={Image} /><br />
            <input type="text" className="form-control" onChange={(e) => { setPrice(e.target.value) }} value={Price} /><br />

            <select className="form-control" type="number" onChange={(e) => { setCId(parseInt(e.target.value)) }} value={category_id} >
               <option>Select id</option>
               <option >1</option>
               <option >2</option>
               <option >3</option>
               <option >4</option>
               <option >5</option>
            </select>

            <br />

            <select name="categoryName" className="form-control" type="text" onChange={(e) => { setCName(e.target.value) }} value={category}>
               <option>Select category</option>
               <option >Cleansers</option>
               <option >Serums</option>
               <option >Creams</option>
               <option >Oils</option>
               <option >Hair Care</option>
            </select><br />
            <center> <button onClick={updateProduct} className="btn btn-primary">Update Product</button></center>
            <br />
         </div>

      </>
   )
}


export default ProductUpdate;

