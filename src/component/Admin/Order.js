import React, { Component } from 'react';

import Display from '../Cart/DisplayOrder';
import AdminHeader from "./AdminHeader";


const url = `https://ajshop.onrender.com/vOrder`;


class Order extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      email: ''
    }
  }

  componentDidMount() {


    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const userOrders = data
        this.setState({ orders: userOrders })
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <>
        <AdminHeader />
        {this.state.orders.length === 0 ? (
          <div style={{ marginTop: '5px' }}>No orders found for {this.state.email}</div>
        ) : (
          <Display orderData={this.state.orders} />
        )}
      </>
    )
  }

}

export default Order;