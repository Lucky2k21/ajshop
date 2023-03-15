import React,{Component} from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom'

import './login.css'
const url = "https://loginapi-3o7x.onrender.com/api/auth/register"

class Register extends Component {
    constructor(props) {
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout=(event)=>{
        event.preventDefault();
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        //.then(res => res.json())

         .then(this.props.history.push('/login/login')) 
    }

    render(){
        return(
            <>
                <Header/>
                
                
                {/* <div className="alert alert-primary" role="alert">
               <h1> {this.state.message}</h1>
</div> */}
                <form onSubmit={this.checkout}>
                <div className="container mb-5" style={{marginTop: '13px',backgroundColor: '#6e00ff0a'}}>
                <div className="parent" style={{height:'650px'}}>
                    <span className="bg-helper"></span>
                    <div className='child'>
                        <div className='logo' style={{width: '126px',height:'89px'}}>
                        <h2 >Register</h2>
                        </div>
                        <div className='form'>
                            
                            <div className="input">
                            <label htmlFor="fname" className='control-label' required>FirstName</label>
                                    <input type="text"  id="fname" name="name" required value={this.state.name} onChange={this.handleChange} autoComplete="off"/>
                            </div>
                            <div className='input' >
                                    <label htmlFor="email"  required>Email</label>
                                    <input type="email"  name="email" required value={this.state.email} onChange={this.handleChange} autoComplete="off"/>
                                </div>
                            <div className="input">
                            <label htmlFor="pwd" className='control-label' required>Password</label>
                                    <input type="password"  id="pwd" name="password" required value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div className="input">
                            <label htmlFor="phone" className='control-label' required>Phone</label>
                                    <input type="tel"  id="phone" name="phone" title="Enter 10 digits only" pattern="[1-9]{1}[0-9]{9}" minLength="10" required value={this.state.phone} onChange={this.handleChange} autoComplete="off" />
                            </div>
                            <button type='submit'>Register</button>
                            <p>have an account? <Link to="/login/login" >Login</Link></p>
                        </div>
                    </div>
                </div>
                </div>

                </form>
            </>
        )
    }
}

export default Register