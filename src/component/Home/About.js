import React, { Component } from 'react';
import './Header.css';

class About extends Component{
    render(){
        return(
            <>
            <div className="container-fluid" id="about" data-aos="fade-up">
            <div className="title text-center py-5">
               <h1 className="position-relative d-inline-block" style={{color:'var(--secondary-color)'}}>About</h1>
            </div>
            
         <div className="section" style={{backgroundColor: '#faebd77d'}} data-aos="fade-up">
            <div className="text" data-aos="flip-right">
               
               <p>
                  <span style={{fontWeight: 'bold',fontFamily: 'poppins'}}>aj wellness</span> is a cosmetics brand that offers a unique blend of natural ingredients with a modern approach. Our products are free from harsh chemicals and instead feature non-chemical, natural ingredients to provide you with clean beauty that enhances your natural radiance and well-being. We believe that true beauty comes from feeling confident and comfortable in your skin, which is why we're dedicated to creating safe, natural, and effective products. Our meticulously crafted formulations are designed to deliver optimal results without compromising your health or the environment. At <span style={{fontWeight: 'bold',fontFamily: 'poppins'}}>aj wellness</span>, we're passionate about bringing you a fresh and contemporary approach to natural beauty.
         
               </p>
            </div>
            <img src="a3.jpg" alt="1"/>
         
         
         </div>
         
         
         
         
         <div className="section" data-aos="fade-up">
            <div className="text" data-aos="flip-right">
               <img src="a1.avif" alt="1"/>
            </div>
               <p>
                  Introducing our Skin Brightening Face Wash, a solution for dull and dehydrated skin. Our formula is made with natural ingredients like carrots, saffron, licorice, aloe vera, sweet orange, and turmeric to help brighten and even out your skin complexion.
                  Our creamy lather gently removes impurities and leaves your skin feeling refreshed and renewed. Say goodbye to a dull and tired-looking complexion and hello to a brighter and more radiant one.
                  Use our Skin Brightening Face Wash daily as part of your skincare routine for best results. Your skin will thank you for it, we promise.
         
                  It's always a good idea to test any new skincare product on a small area of your face to make sure it doesn't cause any irritation or other problems.
               </p>
              
         </div>
         
         
         
         <div className="section" style={{backgroundColor: '#ffc10729'}} data-aos="fade-up">
            <div className="text" data-aos="flip-right">
               
               <p>
                  “Say hello to glowing, hydrated skin with the power of face serums! These tiny bottles are packed with nourishing ingredients that will give your complexion the boost it deserves.“
                  Get smooth and radiant skin with vitamin C serum. This antioxidant-packed skin care product helps even out skin tone and protects against environmental stressors. Want a glowing complexion? You should try the vitamin C serum today. 
               </p>
            </div>
            <img src="eye.jpg" alt="1"/>
         
         
         </div>
         </div>

      
         <div className="about-section wf-section mt-4" style={{backgroundColor:'#dacec6b0'}} data-aos="flip-up">
   <div className="container w-container">
      <div className="about-wrap">
         <h2>Natural and <br/>organic</h2>
         <h3 className="sub-title m-1">skincare</h3>
         <p className="about-description">Natural, non-toxic cosmetics are designed to enhance your natural beauty, while nourishing and protecting your skin</p>
         <a href="Product/Product" className="button-outline w-button">Shop all</a>
      </div>
   </div>
   <div  className="about-image-item one" data-aos="fade-right">
      <img src="https://assets.website-files.com/624fd4a40f05b81d5dc5644c/624fe816c8230f2eb809e720_about-01.jpg" loading="lazy" alt="1" className="about-image"/>
   </div>
   <div  className="about-image-item two" data-aos="fade-right">
      <img src="https://assets.website-files.com/624fd4a40f05b81d5dc5644c/624fe8a01fb642b8deeb8a8e_about-02.jpg" loading="lazy" alt="2" className="about-image"/>
   </div>
   <div  className="about-image-item three" data-aos="fade-left">
      <img src="https://i.ibb.co/VpLcvsm/vc.webp" loading="lazy" alt="3" className="about-image" style={{height:'187px',width:'214px'}}/>
   </div>
   <div  className="about-image-item four" data-aos="fade-left">
      <img src="https://assets.website-files.com/624fd4a40f05b81d5dc5644c/624fea68c6bcd46c3eb8f0f6_about-04.jpg" loading="lazy" alt="4" className="about-image"/>
   </div>
   <div  className="about-image-item six" data-aos="fade-right">
      <img src="https://assets.website-files.com/624fd4a40f05b81d5dc5644c/624fea68c6bcd46c3eb8f0f6_about-04.jpg" loading="lazy" alt="5" className="about-image"/>
   </div>
   <div  className="about-image-item five" data-aos="fade-left">
      <img src="https://assets.website-files.com/624fd4a40f05b81d5dc5644c/624feaa51db074e09e802cd2_about-05.jpg" loading="lazy" alt="6" className="about-image"/>
   </div>
</div>


<section className="pt-5 pb-5 m-2" id="upcoming" data-aos="fade-up">
   <div className="container">
   <h1 style={{color:'var(--secondary-color)',textAlign:'center',textTransform:'capitalize',fontWeight: 'normal'}}>Coming-soon</h1>
     <div className="row">
       <div className="col-6">
         
       </div>
       <div className="col-6 text-right">
         <a className="btn btn-dark mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
           <i className="fa fa-arrow-left"></i>
         </a>
         <a className="btn btn-dark mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
           <i className="fa fa-arrow-right"></i>
         </a>
       </div>
       <div className="col-12">
         <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
 
           <div className="carousel-inner">
             <div className="carousel-item active">
               <div className="row">
 
                 <div className="col-md-3 mb-3">
                   <div className="card">
                     <img className="img-fluid" alt="100%x280" src="https://i.ibb.co/cyp4p9S/face-mask.jpg" style={{height:'220px',objectFit:'cover'}}/>
                     <div className="card-body" style={{height:'190px'}}>
                       <h4 className="card-title">Clay Mask</h4>
                       <p className="card-text" style={{textAlign:'start',fontFamily:'Open Sans'}}>Helps your skin heal and regenerate, improves collagen production, and gives it a brighter, more youthful appearance.</p>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-3 mb-3">
                   <div className="card">
                     <img className="img-fluid" alt="100%x280" src="https://i.ibb.co/S03NXRN/hairc.webp" style={{height:'220px',objectFit:'cover'}}/>
                     <div className="card-body" style={{height:'190px'}}>
                       <h4 className="card-title">Hair Conditioner</h4>
                       <p className="card-text" style={{textAlign:'start',fontFamily:'Open Sans'}}>Hair conditioner with goodness of cocoa butter & hibiscus for dry & frizzy hair.</p>
 
                     </div>
                   </div>
                 </div>
                 <div className="col-md-3 mb-3">
                   <div className="card">
                     <img className="img-fluid" alt="100%x280" src="https://i.ibb.co/cb2QKd3/haircolo.webp" style={{height:'220px',objectFit:'cover'}}/>
                     <div className="card-body" style={{height:'190px'}}>
                       <h4 className="card-title">Hair Color</h4>
                       <p className="card-text" style={{textAlign:'start',fontFamily:'Open Sans'}}>Herbal hair colours  gently colours the greys and whites and gives the hair an exotic natural black sheen.</p>
 
                     </div>
                   </div>
                 </div>
                 <div className="col-md-3 mb-3">
                   <div className="card">
                     <img className="img-fluid" alt="100%x280" src="https://i.ibb.co/mDL4P96/lipbalm.jpg" style={{height:'220px',objectFit:'cover'}}/>
                     <div className="card-body" style={{height:'190px'}}>
                       <h4 className="card-title">Lip Balm</h4>
                       <p className="card-text" style={{textAlign:'start',fontFamily:'Open Sans'}}>It has nourishing and moisturizing properties that keep the  lips soft.</p>
 
                     </div>
                   </div>
                 </div>
                 
               </div>
             </div>
             
             
             <div className="carousel-item">
               <div className="row">
 
                                 <div className="col-md-3 mb-3">
                   <div className="card">
                     <img className="img-fluid" alt="100%x280" src="https://i.ibb.co/TBj5bLf/soap.jpg" style={{height:'220px',objectFit:'cover'}}/>
                     <div className="card-body" style={{height:'190px'}}>
                       <h4 className="card-title">Soaps</h4>
                       <p className="card-text" style={{textAlign:'start',fontFamily:'Open Sans'}}>Handmade soaps with pure plant oils, butters & exotic natural essential oils, herbs & soothing clays.</p>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-3 mb-3">
                   <div className="card">
                     <img className="img-fluid" alt="100%x280" src="https://i.ibb.co/YNNfCVY/alfwebp.webp" style={{height:'220px',objectFit:'cover'}}/>
                     <div className="card-body" style={{height:'190px'}}>
                       <h4 className="card-title">Aloe Face Wash</h4>
                       <p className="card-text" style={{textAlign:'start',fontFamily:'Open Sans'}}>Remove dirt, oil, and impurities without stripping the skin of its natural moisture.</p>
 
                     </div>
                   </div>
                 </div>
                 
                 <div className="col-md-3 mb-3">
                   <div className="card">
                     <img className="img-fluid" alt="100%x280" src="https://i.ibb.co/qYqSpHD/alwebp.webp" style={{height:'220px',width:'220px',objectFit:'cover'}}/>
                     <div className="card-body" style={{height:'190px'}}>
                       <h4 className="card-title">Aloe Face Cream</h4>
                       <p className="card-text" style={{textAlign:'start',fontFamily:'Open Sans'}}>This cream is designed to provide nourishment and hydration to your skin while reducing inflammation.</p>
 
                     </div>
                   </div>
                 </div>
 
               </div>
             </div>
             
             
             
             
             
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>

 <section className="container-fluid" data-aos="fade-left">
   <div >
      <video src="banner.mp4" className="vi-bg" type="video/mp4" controls loop muted alt="Chicago" autoPlay={true}   style={{width:'100%',height:'700px',objectFit: 'cover'}}></video>
   </div>

 </section>

<section className="testimonials" id="review" style={{backgroundColor:'var(--primary-color)'}} >
   <div className="container" >
      <h1 style={{color:'var(--secondary-color)',textAlign:'center',textTransform:'capitalize',fontWeight: 'normal'}}>Reviews</h1>
      
      <div className="row">
         <div className="col-md-4 text-center" data-aos="fade-right">
            <div className="profile">
               <img src="a2.jpg" className="user" alt="img"/>
               <p className="p">I am  personally very impressed & would recommend  all the  skincare products  of aj 😊.</p>
               <h3>AA</h3>
            </div>
         </div>

         <div className="col-md-4 text-center" data-aos="fade">
            <div className="profile">
               <img src="a2.jpg" className="user" alt="img"/>
               <p className="p">Love their shampoo and conditioner....cleanse scalp so well with rosemary essence,very refreshing..... N the conditioner makes my hair so frizz free, smooth 😊.</p>
               <h3>AA</h3>
            </div>
         </div>

         <div className="col-md-4 text-center" data-aos="fade-left">
            <div className="profile">
               <img src="a2.jpg" className="user" alt="img"/>
               <p className="p">Have tried Foaming Face Wash and conditioner , it is really good.
                  First time I have tried Body wash and it is better than any soaps we get in market 😊.</p>
               <h3>AA</h3>
            </div>
         </div>

      </div>
   </div>
</section>



   </>
            
        )
    }
}
export default About