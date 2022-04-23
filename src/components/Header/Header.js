import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }

    return (
        <nav className='papa'>
            <img src={logo} alt="" />
            <div className='pp'>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/cart">Cart</Link>
                {
                    user ? <button onClick={handleSignout}>Sign out</button> :
                        <Link to="/login">Login</Link>

                }
                <Link to="/about">About</Link>
            </div>
        </nav>

    );
};

export default Header;