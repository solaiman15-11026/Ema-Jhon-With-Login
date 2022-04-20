import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='papa'>
            <img src={logo} alt="" />
            <div className='pp'>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>

    );
};

export default Header;