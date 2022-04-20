import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='From-container'>
            <div>
                <h2 className='font-tittle'> Login</h2>
                <div className="input-group">
                    <form >
                        <label htmlFor="email"><b>Email:</b>  </label> <br />
                        <input type="email" placeholder='' /> <br /> <br />
                        <label htmlFor="password"><b>Password:</b>  </label> <br />
                        <input type="password" placeholder='' />
                        <br /> <br />
                        <input className='rrrr' type="submit" value="Login" />
                    </form>
                    <p>
                        New to Ema-Jhon ? <Link className='tt' to="/signup">create account</Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Login;