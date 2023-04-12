import React, { Component } from "react";

import Header from "../Header";
import '../Header.css';


const placeOrder = "https://ajshop.onrender.com/placeOrder";
const url = 'https://ajshop.onrender.com/detailofproduct';
class Cart extends Component {
    constructor(props) {
        super(props)
        let userData = JSON.parse(sessionStorage.getItem('userInfo'))
        this.state = {
            id: Math.floor(Math.random() * 10000),
            product_name: this.props.match.params.product_name,
            name: userData ? userData.name : '',
            email: userData ? userData.email : '',
            cost: 0,
            phone: userData ? userData.phone : '',
            address: '',
            products: '',




        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    checkout = () => {
        let obj = this.state
        obj.products = sessionStorage.getItem('products');
        fetch(placeOrder, {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(console.log('order added'))
        /* .then(this.props.history.push('/Cart/viewOrder/:email')) */
    }


    renderItem = (data) => {
        if (data) {

            return (
                <div className="container mt-4">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '5px' }}>Image</th>
                                <th >Product Name</th>
                                <th style={{ width: '4px' }}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.product_id}>
                                    <td><img src={item.Image} alt="1" style={{ height: '89px' }} /></td>
                                    <td>{item.product_name}</td>
                                    <td>{item.Price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }


    render() {
        const { products } = this.state;
        const productLength = products.length;
        if (sessionStorage.getItem('ltk') == null) {
            return (
                <>
                    <Header />
                    <center>
                        <h2>Login First To Place Booking</h2>
                    </center>

                </>
            )
        }
        return (

            <>
                <Header />
                {this.renderItem(this.state.products)}
                <div className="container ">
                    <div className="row">
                        <div className='card'>
                            <div className="card-header">
                                <h3 style={{ textAlign: 'center' }}>Details</h3>
                            </div>
                            <div className='card-body'>
                                <form >
                                {/* <form action="https://paytm.onrender.com/paynow" method="POST"> */}
                                    <input type="hidden" name="cost" value={this.state.cost} />
                                    <input type="hidden" name="id" value={this.state.id} />
                                    <input type="hidden" name="product_name" value={this.state.product_name} />
                                    <div className="row">
                                        <div className='form-group col-md-6'>
                                            <label htmlFor='fname' className='control-label'>Name</label>
                                            <input className="form-control" id='fname' name='name' value={this.state.name} onChange={this.handleChange} />
                                        </div>

                                        <div className='form-group col-md-6'>
                                            <label htmlFor='email' className='control-label'>email</label>
                                            <input className="form-control" id='email' name='email' value={this.state.email} onChange={this.handleChange} />
                                        </div>

                                        <div className='form-group col-md-6'>
                                            <label htmlFor='phone' className='control-label'>Phone</label>
                                            <input className="form-control" id='phone' name='phone' value={this.state.phone} onChange={this.handleChange} />
                                        </div>
                                        <div className='form-group col-md-6'>
                                            <label htmlFor='address' className='control-label'>Address</label>
                                            <input className="form-control" id='address' name='address' value={this.state.address} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h2>Total Price = Rs.{this.state.cost}</h2>
                                            <p>Number of products in cart: {productLength}</p>
                                        </div>
                                        <button className="btn btn-dark" onClick={this.checkout} type="submit">
                                            PlaceOrder
                                        </button>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }

    componentDidMount() {

        let products = JSON.parse(sessionStorage.getItem('products'));


        //console.log(products)

        fetch(url, {
            method: "Post",
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product_name: products })
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                //this.setState({products:data})
                //console.log(data)


                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + parseFloat(item.Price);

                    return 'ok'
                })
                this.setState({ products: data, cost: totalPrice })

            })


    }

}

export default Cart;