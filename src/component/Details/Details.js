import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './details.css';
import Header from "../Header";
import Footer from "../Footer";


const url = "https://ajshop.onrender.com/details";


class Details extends Component {
  constructor(props) {
    super(props)


    this.state = {
      details: '',
      categoryId: sessionStorage.getItem('category_id'),

      message: '',


    }


  }

  render() {
    let { details } = this.state;

    return (
      <>
        <Header />

        <section id="details" className="py-5" >
          <Link to={`/CatPro/CatPro/${this.state.categoryId}`} className="btn btn-dark m-2 p-2"> <i className="fa-solid fa-arrow-left m-1" ></i>Back</Link>
          <div role="alert" className='m-2 text-center' style={{ color: 'red' }}>
            {this.state.message && <h1>{this.state.message}</h1>}
          </div>
          <div className="container d-flex " >
            <div className="container mt-5">

              <div className="card" >

                <img className="card-img-top" src={details.Image} alt="l" />
              </div>
              <div className="card-body">
                <p className="card-text" style={{ fontSize: '18px', fontFamily: 'cursive' }}>{details.para}</p>
              </div>

            </div>

            <div className="accordion mt-5 w-100" id="accordionPanelsStayOpenExample" >
              <h2>{details.product_name}</h2>
              <strong className="my-2 mt-4">RS {details.Price}</strong>
              <h4 className="my-3">Weight = {details.weight}</h4>
              <div>

              </div>
              <div className="accordion-item mt-5">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Key Ingredients
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>{details.ingredients}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Skin Types
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body ">
                    <pre style={{ fontSize: '18px', fontFamily: 'cursive' }}>{details.skintype}</pre>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Usage
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div className="accordion-body">
                    <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>{details.usage}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Benefits
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>{details.benefits}</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>
        <div>

        </div>
        <Footer />
      </>

    )

  }

  //api using async await
  async componentDidMount() {
    let category_id = this.props.location.search.split('=')[1]
    let response = await axios.get(`${url}/${category_id}`)
    this.setState({ details: response.data[0], catList: category_id.data })

  }


}

export default Details;