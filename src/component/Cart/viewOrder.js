import React, { Component } from 'react';

import Display from './DisplayOrder';

const url = `https://ajshop.onrender.com/vOrder`;
const update = `https://ajshop.onrender.com/updateOrder`

class viewOrder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      email: ''
    }
  }

  componentDidMount() {
    if (this.props.history && this.props.location && this.props.location.search) {
      let query = this.props.location.search.split('&');
      if (query) {
        let data = {
          "status": query[0].split('=')[1],
          "date": query[2].split('=')[1],
          "bank_name": query[3].split('=')[1]
        }
        let id = query[1].split('=')[1].split('_')[1];
        fetch(`${update}/${id}`, {
          method: 'put',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      }
    }

    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    const email = userInfo.email

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const userOrders = data.filter((order) => order.email === email)
        this.setState({ orders: userOrders, email: email })
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <>
        {this.state.orders.length === 0 ? (
          <div>No orders found for {this.state.email}</div>
        ) : (
          <Display orderData={this.state.orders} />
        )}
      </>
    )
  }

}

export default viewOrder;