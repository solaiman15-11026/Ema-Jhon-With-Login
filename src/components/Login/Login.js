import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);


    //login na kore thake------------------------
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";



    const handleEmaill = e => {
        setEmail(e.target.value);
    }

    const handlePasswordd = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='From-container'>
            <div>
                <h2 className='font-tittle'> Login</h2>
                <div className="input-group">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email"><b>Email:</b>  </label> <br />
                        <input onBlur={handleEmaill} type="email" placeholder='' required /> <br /> <br />
                        <label htmlFor="password"><b>Password:</b>  </label> <br />
                        <input onBlur={handlePasswordd} type="password" placeholder='' required />
                        <br /> <br />

                        <p>{error.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }

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