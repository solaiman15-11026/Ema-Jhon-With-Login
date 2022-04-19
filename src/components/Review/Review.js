import React from 'react';
import './Review.css'

const Review = (props) => {
    const { img, name, price, shipping } = props.ca
    const { remove, ca } = props
    return (
        <div className='container'>
            <div className='rrr'>
                <img src={img} alt="" />
            </div>
            <div className='more'>
                <div className='details'>
                    <h4>Name: {name}</h4>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                </div>
                <div>
                    <button onClick={() => remove(ca)}>Delet</button>
                </div>

            </div>
        </div>
    );
};

export default Review;