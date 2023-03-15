import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import AdminHeader from '../Admin/AdminHeader';
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const [product_id, setId] = useState("");
    const [product_name, setName] = useState("");
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


    const addProduct = () => {

        axios.post(`https://ajshop.onrender.com/addProduct`, {
            product_id,
            product_name,
            Image,
            Price,
            category_id,
            category


        })

       // alert('added')
       toast.success('Product added!', {
        //autoClose: 3000,
        position:toast.POSITION.TOP_CENTER,
        
      });
    }


    return (
        <>
            <AdminHeader />
            <ToastContainer />
            <div className="col-sm-6 container p-5 "  >
                <center> <h1>Add Product</h1><hr style={{
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
            //onChange={(e)=>setImage(e.target.files[0])}
           // onChange={(e)=>
             /*setImage(URL.createObjectURL(e.target.files[0])) }*/ placeholder="Image url" /><br />
                <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="Price" /><br />

                <select placeholder='categoryId' className="form-control" type="number" onChange={(e) => setCId(parseInt(e.target.value))} >
                    <option>Select id</option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                </select>

                <br />

                <select name="categoryName" className="form-control" placeholder='categoryName' type="text" onChange={(e) => setCName(e.target.value)}>
                    <option>Select category</option>
                    <option >Cleansers</option>
                    <option >Serums</option>
                    <option >Creams</option>
                    <option >Oils</option>
                    <option >Hair Care</option>
                </select><br />
                <center> <button onClick={addProduct} className="btn btn-primary">AddProduct</button></center>
                <br />
            </div>

            <Footer />
        </>
    )
}
<br />

export default AddProduct;

//<input type="text" className="form-control" onChange={(e)=>setCName(e.target.value)} placeholder="category name"/><br/>