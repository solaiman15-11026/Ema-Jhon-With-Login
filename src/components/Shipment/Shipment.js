import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


const Shipment = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [error, setError] = useState('')


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



    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmpassword) {
            setError('Password not match')
            return;
        }
    }


    return (
        <div>
            <div className='From-container'>
                <div>
                    <h2 className='font-tittle'> Shiping information</h2>
                    <div className="input-group">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="text"><b>Name:</b>  </label> <br />
                            <input onBlur={handleEmail} type="text" placeholder='' required /> <br /> <br />
                            <label htmlFor="text"><b>Address:</b>  </label> <br />
                            <input onBlur={handlePassword} type="text" placeholder='' required /> <br /> <br />
                            <label htmlFor="number"><b>Number:</b>  </label> <br />
                            <input onBlur={handleConfirmpassword} type="number" placeholder='' required />
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

export default Shipment;