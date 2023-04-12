import React, { Component } from 'react';
import './Header.css';

class Slider extends Component{
    render(){
        return(
            <>
            <div id="demo" className="carousel slide" data-bs-interval="false">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" style={{backgroundColor:'black'}}></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" style={{backgroundColor:'black'}}></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" style={{backgroundColor:'black'}}></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3" style={{backgroundColor:'black'}}></button>

      </div>

      <div className="carousel-inner" >
        <div className="carousel-item active" style={{objectFit:'cover'}}>
         <video src="./file.mp4" className="vi-bg"  loop muted alt="Chicago" autoPlay={true}  style={{width:'100%',height: '650px',objectFit: 'cover'}}></video>
         <div className="carousel-caption">
           <h3 style={{color:'black'}}><img src="logo.png" alt="logo" style={{width: '25%',position: 'sticky',alignItems: 'center'}}/></h3>
           {/* <h2 style={{fontSize: '30px',fontFamily:'Lobster cursive',marginTop:'-47px',padding: '29px', color: 'black'}}></h2> */}
    <p style={{color:'black' ,fontSize: '22px',fontFamily:'Lobster cursive' }}>We at<span> aj wellness</span> pamper you with most happening beauty treatments & customised personal care products, with a byte of holisticity !!!</p>
      <p style={{color:'black' ,fontSize: '22px',fontFamily: 'Playfair Display serif'}}>  Get in touch with us, for your personalised beauty regimen;</p>

         </div>
        </div>

        <div className="carousel-item " style={{objectFit:'cover'}}>
         <img src="./slider1.jpg" alt="Los Angeles" className="d-block" style={{width:'100%',height:'650px',objectFit: 'cover'}}/>
         <div className="carousel-caption">
           <h3 style={{color:'black' ,fontFamily:'Lobster cursive'}}>Handcrafted, lab produce; formulated to meet everyday's beauty wants. Affordability & minimalism at its core, "essentials only" is our brand philosophy.</h3>
           <p style={{color:'black' ,fontFamily:'Lobster cursive'}}>We all have individual cosmetic needs & one product or formulation doesn't fit all skin types, so why we are very</p>
           <p style={{color:'black' ,fontFamily:'Lobster cursive'}}>enthusiastic to offer our customized services - literally at minimal to no extra costs. Get in touch with us to know more.</p>
           <p style={{color:'black'}}>Thank you</p>
         </div>
       </div>

        {/* <div className="carousel-item">
          <img src="slider2.1.webp" alt="Chicago" className="d-block" style={{width:'100%',height: '650px',objectFit: 'cover'}}/>
          <div className="carousel-caption">
            <h3 style={{color:'black'}}><img src="logo.png" alt="logo" style={{width:'11%',marginLeft: '28px',marginBottom: '-3px',position: 'sticky'}}/></h3>
            <p style={{color:'black'}}></p>
          </div>
         </div> */}

        <div className="carousel-item">
          <img src="sam3.jfif" alt="New York" className="d-block" style={{width:'100%',height: '650px',objectFit: 'cover'}}/>
          <div className="carousel-caption">
            <h3 style={{color:'black' ,fontFamily:'Lobster cursive'}}>Meanwhile, you can also try our standard products </h3>
            <h3 style={{color:'black' ,fontFamily:'Lobster cursive'}}> & share your experiences !!!</h3>
            <p style={{color:'black' ,fontFamily:'Lobster cursive'}}>Thank you</p>
          </div>
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{background:"none"}}>
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{background:"none"}}>
    <span className="carousel-control-next-icon"></span>
  </button>

      
   </div>
   

   <section className=" home_usps_wrap p-3" >
      <span className="us_image">
      <img src="https://cdn.shopify.com/s/files/1/2611/0314/files/pattern-leaf.png" alt="1"/> 
    </span>
        <div className="container ">
        
        <div className="row">
         <div className="card border-0  col-lg-4 " style={{backgroundColor: '#fff0'}}>
            <img src="1.webp" alt="1"/>
         </div>
         <div className="card border-0  col-lg-4 " style={{backgroundColor: '#fff0'}}>
            <img src="2.webp" alt="2"/>
         </div>
         <div className="card border-0  col-lg-4 " style={{backgroundColor: '#fff0'}}>
            <img src="3.webp" alt="3"/>
         </div>
        </div>
        <span className="right_image">
         <img src="5.webp" alt="1"/> 
       </span>
      </div>
    </section>
            </>
        )
    }
}
export default Slider