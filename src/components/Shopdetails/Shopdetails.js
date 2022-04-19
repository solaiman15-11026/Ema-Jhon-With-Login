import React from 'react';
import './shopdetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Shopdetails = (props) => {
    const { price, img, name, ratings, seller } = props.product;

    return (
        <div className='pro'>
            <img className='tt' src={img} alt="" srcset="" />
            <div className='pruduct-details'>
                <p> {name}</p>
                <p>Price: ${price}</p>
                <p><small>seller: {seller}</small></p>
                <p><small>ratings: {ratings}</small> star</p>
            </div>
            <button onClick={() => props.addCart(props.product)} className="ttt">
                <p>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Shopdetails;