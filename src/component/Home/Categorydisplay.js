import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Categorydisplay = (props) => {

    const listCategory = ({ categoryData }) => {
        if (categoryData) {
            return categoryData.map((item) => {
                return (


                    <div className="card border-0 col-md-6 col-lg-4 my-4" key={item.category_id} data-aos="flip-up">
                        <div className="inner">
                        <img src={item.image} alt={item.category} className="card-img-top" />
                        </div>
                        <div className="card-body text-center ">
                            <h4 className="card-title text-decoration-underline" style={{ color: '#864f23' }}>{item.content}</h4>

                            <Link to={`/CatPro/CatPro/${item.category_id}`} key={item.category_name} className="btn btn-dark">View more</Link>
                        </div></div>

                )
            })
        }
    }



    return (
        <div className="row " >

            {listCategory(props)}
        </div>

    )
}

export default Categorydisplay;