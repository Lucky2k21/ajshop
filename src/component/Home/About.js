import React, { Component } from 'react';
import './Header.css';

class About extends Component{
    render(){
        return(
            <>
            <div className="container-fluid" id="about">
            <div className="title text-center py-5">
               <h1 className="position-relative d-inline-block" style={{color:'var(--secondary-color)'}}>About</h1>
            </div>
            
         <div className="section" style={{backgroundColor: '#faebd77d'}}>
            <div className="text">
               
               <p>
                  aj wellness is a cosmetics brand that offers a unique blend of natural ingredients with a modern approach. Our products are free from harsh chemicals and instead feature non-chemical, natural ingredients to provide you with clean beauty that enhances your natural radiance and well-being. We believe that true beauty comes from feeling confident and comfortable in your skin, which is why we're dedicated to creating safe, natural, and effective products. Our meticulously crafted formulations are designed to deliver optimal results without compromising your health or the environment. At AJ Wellness, we're passionate about bringing you a fresh and contemporary approach to natural beauty.
         
               </p>
            </div>
            <img src="a3.jpg" alt="1"/>
         
         
         </div>
         
         
         
         
         <div className="section">
            <div className="text">
               <img src="a1.avif" alt="1"/>
            </div>
               <p>
                  Introducing our Skin Brightening Face Wash, a solution for dull and dehydrated skin. Our formula is made with natural ingredients like carrots, saffron, licorice, aloe vera, sweet orange, and turmeric to help brighten and even out your skin complexion.
                  Our creamy lather gently removes impurities and leaves your skin feeling refreshed and renewed. Say goodbye to a dull and tired-looking complexion and hello to a brighter and more radiant one.
                  Use our Skin Brightening Face Wash daily as part of your skincare routine for best results. Your skin will thank you for it, we promise.
         
                  It's always a good idea to test any new skincare product on a small area of your face to make sure it doesn't cause any irritation or other problems.
               </p>
              
         </div>
         
         
         
         <div className="section" style={{backgroundColor: '#ffc10729'}}>
            <div className="text">
               
               <p>
                  “Say hello to glowing, hydrated skin with the power of face serums! These tiny bottles are packed with nourishing ingredients that will give your complexion the boost it deserves.“
                  Get smooth and radiant skin with vitamin C serum. This antioxidant-packed skin care product helps even out skin tone and protects against environmental stressors. Want a glowing complexion? You should try the vitamin C serum today. 
               </p>
            </div>
            <img src="eye.jpg" alt="1"/>
         
         
         </div>
         </div>

<section className="testimonials" id="review" style={{backgroundColor:'var(--primary-color)'}} >
   <div className="container" >
      <h1 style={{color:'var(--secondary-color)',textAlign:'center',textTransform:'capitalize',fontWeight: 'normal'}}>Reviews</h1>
      
      <div className="row">
         <div className="col-md-4 text-center">
            <div className="profile">
               <img src="a2.jpg" className="user" alt="img"/>
               <p className="p">I am  personally very impressed & would recommend  all the  skincare products  of AJ 😊.</p>
               <h3>AA</h3>
            </div>
         </div>

         <div className="col-md-4 text-center">
            <div className="profile">
               <img src="a2.jpg" className="user" alt="img"/>
               <p className="p">Love their shampoo and conditioner....cleanse scalp so well with rosemary essence,very refreshing..... N the conditioner makes my hair so frizz free, smooth 😊.</p>
               <h3>AA</h3>
            </div>
         </div>

         <div className="col-md-4 text-center">
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