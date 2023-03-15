import React from "react";
import Header from "../Header";


const Contact =()=>{
    
    return(
        <>
        <Header/>
        <div className="container border" style={{marginTop:'50px', width:'50%',backgroundImage:`url('https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <h1 style={{marginTop:'25px',textAlign:'center'}}>Get In Touch</h1>
            <form className="row" style={{margin:'25px 85px 75px 100px'}} action="https://formspree.io/f/xknazpnn" method="POST">
                <label>name</label>
                <input type='text' name='name' className="form-control"/>

                <label>email</label>
                <input type='email' name='email' className="form-control"/>

                <label>Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type='submit' value='send' className="form-control btn btn-primary" style={{marginTop:'30px'}} />

            </form>
        </div>
        </>
    )
}
export default Contact;
