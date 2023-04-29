import React, { Component } from "react";
//import axios from 'axios';
import CatProDisplay from "./CatProDisplay";
import './product.css';
import Header from "../Header";
import Footer from "../Footer";
const url = "https://ajshop.onrender.com/product?categoryId=";


class CatPro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catList: '',
            product_id: sessionStorage.getItem('product_id'),
            userItem: [],
            list: '',
            message: '',
            category_id: ''

        }


    }
    addToCart = (data) => {
        //this.setState({userItem:data})
        this.setState((prevState) => ({
            userItem: [...prevState.userItem, data],
        }), () => {
            console.log(this.state.userItem)
        })
    }
    /* addToCart=(data)=>{
       this.setState({userItem:data})
    } */

    render() {
        return (
            <>
                <Header />
                <section id="product" style={{ backgroundColor: 'var(--primary-color)' }} data-aos="fade-up">
                    <div className="container-fluid">
                        <div className="title text-center py-5">
                            <h1 className="position-relative d-inline-block" style={{ color: 'var(--secondary-color)', textTransform: 'capitalize' }}>Products</h1>
                        </div>

                        <CatProDisplay CatData={this.state.catList}
                            finalOrder={(data) => { this.addToCart(data) }} />
                    </div>
                </section>
                <Footer />
            </>
        )
    }

    componentDidMount() {
        let category_id = this.props.match.params.category_id;
        sessionStorage.setItem('category_id', category_id);
        fetch(`${url}${category_id}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ catList: data })
            })
    }
}

export default CatPro;