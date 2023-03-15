import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import '../Header.css';
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('https://ajshop.onrender.com/product')
        result = await result.json();
        setProducts(result);
    }


    const deleteProduct = (product_id) => {
        let result = fetch(`https://ajshop.onrender.com/deleteProduct/${product_id}`, {
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
                <center> <h2>Products</h2></center>
                <center> <p>Total {products.length} products</p></center>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>CId</th>
                            <th>CName</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            products.map((item, item_id) =>
                                <tr key={item_id}>

                                    <td >{item.product_id}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.category}</td>
                                    <td>{item.Price}</td>
                                    <td>< img src={item.Image} alt="1" style={{ height: '89px' }} /></td>
                                    <td>
                                        <button onClick={() => deleteProduct(item.product_id)} className="btn btn-danger m-1">Delete</button>
                                        <Link to={`/Admin/ProductUpdate/${item.product_id}`} className="btn btn-primary">Update</Link>
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

export default ProductList;