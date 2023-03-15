import React,{Component} from 'react';
import Header from '../Header';
import {Link } from 'react-router-dom'
import './login.css';
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';
const url = "https://loginapi-3o7x.onrender.com/api/auth/login"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state={
            email:'',
            password:'',
            alert:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=()=>{
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                /* this.setState({alert:data.token}) */
                toast.warn(data.token, {
                    //autoClose: 3000,
                    position:toast.POSITION.TOP_CENTER,
                    
                  });
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
                <Header/>

                
                <ToastContainer />
                <div className="container mb-5" style={{marginTop: '106px',backgroundColor: '#6e00ff0a'}}>
                <div className="parent">
                    <span className="bg-helper"></span>
                    <div className='child'>
                        <div className='logo'>
                            <img src="https://github.com/ATechAjay/img_repo/blob/main/apple.png?raw=true" alt="img" />
                        </div>
                        <div className='form'>
                            <h2>Login</h2>
                            <div className="input">
                                <label htmlFor="email">email</label>
                                <input name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="input">
                                <label htmlFor="password">password</label>
                                <input name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <button onClick={this.handleSubmit}>login</button>
                            <p>Don't have an account? <Link to="/login/register" >Register</Link></p>
                        </div>
                    </div>
                </div>
                </div>

            </>
        )
    }
}

export default Login