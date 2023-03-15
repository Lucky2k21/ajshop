import React from 'react';
import { useState, useEffect } from 'react';

import AdminHeader from '../Admin/AdminHeader';

import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';

const DescriptionUpdate = () => {

   const [product_name, setName] = useState("");
   const [Image, setImage] = useState("");
   const [Price, setPrice] = useState("");
   const [weight, setCId] = useState("");
   const [para, setCName] = useState("");
   const [ingredients, setI] = useState("");
   const [skintype, setSkinType] = useState("");
   const [usage, setUsage] = useState("");
   const [benefits, setBenefits] = useState("");

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


      let item = { product_name, Image, Price, weight, para, ingredients, skintype, usage, benefits }
      let result = await fetch(`https://ajshop.onrender.com/updateDetails/${product_id}`, {
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
      toast.success('Product updated!', {
         //autoClose: 3000,
         position:toast.POSITION.TOP_CENTER,
         
       });

   }

   const getProduct = async () => {

      let result = await fetch(`https://ajshop.onrender.com/descriptionDetail/${product_id}`);
      result = await result.json();


      setName(result.product_name)
      setImage(result.Image)
      setPrice(result.Price)
      setCId(result.weight)
      setCName(result.para)
      setI(result.ingredients)
      setSkinType(result.skintype)
      setUsage(result.usage)
      setBenefits(result.benefits)

   }





   return (
      <>
         <AdminHeader />
         <ToastContainer />
         <div className="col-sm-6 container p-5 "  >
            <center> <h1>update Details</h1><hr style={{
               content: "",
               background: '#cc0099',
               display: 'block',
               height: '3px',
               width: '100px',
               opacity: 'inherit'
            }} /></center>
            <br />


            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name" value={product_name} /><br />
            <input type="file" className="form-control" onChange={handleImage} placeholder="Image url" /><br />
            <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="Price" value={Price} /><br />
            <input type="text" className="form-control" onChange={(e) => setCId(e.target.value)} placeholder="Weight" value={weight} /><br />
            <textarea type="text" className="form-control" onChange={(e) => setCName(e.target.value)} placeholder="Describe" value={para} /><br />
            <textarea type="text" className="form-control" onChange={(e) => setI(e.target.value)} placeholder="Ingredients" value={ingredients} /><br />
            <input type="text" className="form-control" onChange={(e) => setSkinType(e.target.value)} placeholder="Skin Type" value={skintype} /><br />
            <input type="text" className="form-control" onChange={(e) => setUsage(e.target.value)} placeholder="Usage" value={usage} /><br />
            <textarea type="text" className="form-control" onChange={(e) => setBenefits(e.target.value)} placeholder="Benefits" value={benefits} /><br />
            <center> <button onClick={updateProduct} className="btn btn-primary">Update Product</button></center>
            <br />
         </div>

      </>
   )
}


export default DescriptionUpdate;

