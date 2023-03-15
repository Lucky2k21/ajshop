import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import '../Header.css';
import { Link } from 'react-router-dom';

import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';


const DescriptionList = () => {
    const [products, setProducts] = useState([]);




    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('https://ajshop.onrender.com/description')
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = (product_id) => {
        let result = fetch(`https://ajshop.onrender.com/deleteDetails/${product_id}`, {
            method: 'Delete'
        }).then((result) => {
            result.json()

            getProducts();
        })
        console.warn(result)
        toast.warn('Product deleted!', {
            //autoClose: 3000,
            position:toast.POSITION.TOP_CENTER,
            
          });

    }





    return (
        <>
            <AdminHeader />
            <ToastContainer />
            <div className="container mt-3">
                <center> <h2>Products Description</h2></center>
                <center> <p>Total {products.length} products Description</p></center>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Paragraph</th>
                            <th>Ingredients</th>
                            <th>Skin Type</th>
                            <th>Usage</th>
                            <th>Benefits</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            products.map((item, item_id) =>
                                <tr key={item_id}>

                                    <td >{item.product_id}</td>
                                    <td>{item.product_name}</td>
                                    <td>< img src={item.Image} alt="1" style={{ height: '89px' }} /></td>
                                    <td>{item.Price}</td>
                                    <td>{item.weight}</td>
                                    <td>{item.para}</td>
                                    <td>{item.ingredients}</td>
                                    <td>{item.skintype}</td>
                                    <td>{item.usage}</td>
                                    <td>{item.benefits}</td>
                                    <td>
                                        <button onClick={() => deleteProduct(item.product_id)} className="btn btn-danger m-1">Delete</button>
                                        <Link to={`/Admin/DescriptionUpdate/${item.product_id}`} className="btn btn-primary m-1">Update</Link>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>



        </>
    )
}

export default DescriptionList;