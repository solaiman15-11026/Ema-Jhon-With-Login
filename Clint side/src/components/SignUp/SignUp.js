import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [error, setError] = useState('')

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleConfirmpassword = e => {
        setConfirmpassword(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmpassword) {
            setError('Password not match')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='From-container'>
                <div>
                    <h2 className='font-tittle'> Sign Up</h2>
                    <div className="input-group">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email"><b>Email:</b>  </label> <br />
                            <input onBlur={handleEmail} type="email" placeholder='' required /> <br /> <br />
                            <label htmlFor="password"><b>Password:</b>  </label> <br />
                            <input onBlur={handlePassword} type="password" placeholder='' required /> <br /> <br />
                            <label htmlFor="Confirm password"><b>Confirm Password:</b>  </label> <br />
                            <input onBlur={handleConfirmpassword} type="password" placeholder='' required />
                            <br /> <br />
                            <p>{error}</p>
                            <input className='rrrr' type="submit" value="Sign Up" />
                        </form>
                        <p>
                            Already have an account? <Link className='tt' to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignUp;