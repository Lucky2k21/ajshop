import React from 'react';
import {Link } from 'react-router-dom';
//import './Header.css';

const Footer = ()=>{
    return(
        <>
        <footer className="bg-dark text-light " id="#footer" style={{marginTop:'40px',height:'fit-content'}} data-aos="fade-up">
   <div className="container text-center text-md-left">
      <div className="row text-center text-md-left">
         <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-2" data-aos="fade-right">
            <h5 className="text-uppercase mb-3 font-weight-bold text-warning">About Us</h5>
            <p style={{textAlign:'initial'}}><span style={{fontWeight: 'bold',fontFamily: 'poppins'}}>aj wellness</span> cosmetics believes that beauty and self-care are connected. Natural, non-toxic cosmetics are designed to enhance your natural beauty, while nourishing and protecting your skin</p>
         </div>
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2" data-aos="fade-up">
            <h5 className="text-uppercase mb-3 font-weight-bold text-warning">Quick Links</h5>
           <p style={{textAlign:'initial'}}> <Link to={`/`} className="text-white">Home</Link></p>
           
           <p style={{textAlign:'initial'}}> <Link to={`/Product/Product`} className="text-white">Products</Link></p>
           
           <p style={{textAlign:'initial'}}> <Link to={`/Contact/Contact`} className="text-white">Contact</Link></p>
         </div>
         <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2" data-aos="fade-left">
            <h5 className="text-uppercase mb-3 font-weight-bold text-warning">Contact </h5>
            <p style={{textAlign:'initial'}}>
               <i className="fas fa-home " style={{marginRight:'10px',color:'lawngreen' }}></i>Bengaluru
            </p>
            <p style={{textAlign:'initial'}}><i className="fas fa-envelope " style={{marginRight:'10px',color:'lawngreen' }}></i>hello@amy-joy.com </p>
            <ul className="list-unstyled list-inline">
               <li className="list-inline-item"><Link to={`/`} className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><i className="fab fa-facebook" style={{color:'lawngreen'}}></i></Link></li>
               <li className="list-inline-item"><Link to={`/`} className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><i className="fab fa-whatsapp" style={{color:'lawngreen'}}></i></Link></li>
               <li className="list-inline-item"><Link to={`/`} className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><i className="fab fa-instagram" style={{color:'lawngreen'}}></i></Link></li>
               <li className="list-inline-item"><Link to={`/`} className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}><i className="fab fa-twitter" style={{color:'lawngreen'}}></i></Link></li>
            </ul>
            
         </div>
         <div className="row  align-item-center justify-content-center" data-aos="fade-up">
         
               <p className="text-warning">Copyright © aj wellness </p>
               
            
         </div>
      </div>
         
         
   </div>
</footer>

        </>
    )
}

export default Footer