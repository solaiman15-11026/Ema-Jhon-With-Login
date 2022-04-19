import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product.quantity;
        shipping = shipping + product.shipping;
        total = total + product.price * product.quantity;
        tax = parseFloat((total * 0.1).toFixed(2));
    }
    const totalsell = (total + tax + shipping).toFixed(2);
    return (
        <div className='rrr'>
            <h4 className='tu'>Order Summary</h4>
            <p>Selet items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${totalsell}</h6>
            {props.children}
        </div>
    );
};

export default Cart;