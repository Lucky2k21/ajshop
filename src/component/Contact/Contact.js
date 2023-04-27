import React from "react";
import Header from "../Header";


const Contact =()=>{
    
    return(
        <>
        <Header/>
        <div className="container border" style={{marginTop:'50px', width:'40%',background:'linear-gradient(45deg, black, transparent)',backgroundColor:'aqua',borderRadius:'23px',backgroundPosition:'center',backgroundSize:'cover'}}>
            <h1 style={{marginTop:'25px',textAlign:'center'}}>Get In Touch</h1>
            <form className="row" style={{margin:'25px 85px 75px 100px'}} action="https://formspree.io/f/xknazpnn" method="POST">
                <label style={{color:'white',fontSize:'large'}}>name</label>
                <input type='text' name='name' className="form-control"/>

                <label style={{color:'white',fontSize:'large'}}>email</label>
                <input type='email' name='email' className="form-control"/>

                <label style={{color:'white',fontSize:'large'}}>Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type='submit' value='send' className="form-control btn btn-dark" style={{marginTop:'30px'}} />

            </form>
        </div>
        </>
    )
}
export default Contact;
