import React from 'react';
import '../styles/style.css';
import banner from '../assets/cnpsBanner.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <div class="login-container">
            <div class="logo">
                <img src={banner} alt="logo cnps" />
            </div>

            <div class="login-form">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder='Login' required/>
                    <input type="password" placeholder='Password' required/>
                    <Link to="/dashboard">
                        <button type='submit'>Join Sapelli World !</button>   
                    </Link>  
                </form>
            </div>
       </div>
    );
}

export default Login;
