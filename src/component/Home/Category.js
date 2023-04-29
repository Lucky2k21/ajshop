import React, { Component } from 'react';

import './Header.css';
import Categorydisplay from './Categorydisplay';
const qurl = "https://ajshop.onrender.com/category";

class Category extends Component {
   constructor() {
      super()

      this.state = {
         category: ''

      }
   }


   render() {
      return (
         <>
            <section id="category" className="py-5" style={{ backgroundColor: 'var(--primary-color)' }} data-aos="fade-up">
               <div className="container">
                  <div className="title text-center py-5">
                     <h1 className="position-relative d-inline-block" style={{ color: 'var(--secondary-color)', textTransform: 'capitalize' }}>Collections</h1>
                  </div>



                  <Categorydisplay categoryData={this.state.category} />



               </div>
            </section>
         </>
      )
   }

   componentDidMount() {
      fetch(`${qurl}`, { method: 'GET' })
         .then((res) => res.json())
         .then((data) => {
            this.setState({ category: data })
         })
   }

}

export default Category