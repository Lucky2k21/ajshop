import React from "react";
import AdminHeader from "./AdminHeader";
import { useState } from 'react';

import axios from 'axios';
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';

const Description = () => {
    const [product_id, setId] = useState("");
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


    const addProduct = () => {
        axios.post(`https://ajshop.onrender.com/addDetails`, {
            product_id,
            product_name,
            Image,
            Price,
            weight,
            para,
            ingredients,
            skintype,
            usage,
            benefits

        })
        //alert('data saved');
        toast.success('Data saved!', {
            //autoClose: 3000,
            position:toast.POSITION.TOP_CENTER,
            
          });
    }


    return (

        <>

            <AdminHeader />
            <ToastContainer />
            <div className="col-sm-6 container p-4 "  >
                <center> <h1>Add Product Details</h1><hr style={{
                    content: "",
                    background: '#cc0099',
                    display: 'block',
                    height: '3px',
                    width: '100px',
                    opacity: 'inherit'
                }} /></center>
                <br />
                <input type="number" className="form-control" onChange={(e) => setId(e.target.valueAsNumber)} placeholder="Product_id" /><br />
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name" /><br />
                <input type="file" className="form-control" onChange={handleImage}
              //onChange={(e)=>setImage(e.target.value)}
            /* onChange={(e)=> setImage(URL.createObjectURL(e.target.files[0]))}*/ placeholder="Image url" /><br />
                <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="Price" /><br />
                <input type="text" className="form-control" onChange={(e) => setCId(e.target.value)} placeholder="Weight" /><br />
                <textarea type="text" className="form-control" onChange={(e) => setCName(e.target.value)} placeholder="Describe" /><br />
                <textarea type="text" className="form-control" onChange={(e) => setI(e.target.value)} placeholder="Ingredients" /><br />
                <input type="text" className="form-control" onChange={(e) => setSkinType(e.target.value)} placeholder="Skin Type" /><br />
                <input type="text" className="form-control" onChange={(e) => setUsage(e.target.value)} placeholder="Usage" /><br />
                <textarea type="text" className="form-control" onChange={(e) => setBenefits(e.target.value)} placeholder="Benefits" /><br />

                <center> <button onClick={addProduct} className="btn btn-primary">Add Details</button></center>
                <br />
            </div>


        </>
    )
}
<br />

export default Description