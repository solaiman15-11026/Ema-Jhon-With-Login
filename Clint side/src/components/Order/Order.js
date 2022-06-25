import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usecart from '../../Hook/Usecart';
import Usepeoduct from '../../Hook/Usepeoduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review'

const Order = () => {
    const [product, setProduct] = Usepeoduct();
    const [cart, setCart] = Usecart();
    const navigate = useNavigate();

    const remove = (product) => {
        const rest = cart.filter(po => po._id !== product._id)
        setCart(rest);
        removeFromDb(product._id)

    }


    return (
        <div className='container'>

            <div className="review-container">
                {
                    cart.map(ca => <Review
                        ca={ca}
                        key={ca._id}
                        remove={remove}
                    ></Review>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}>
                    <Link to="/shipment">
                        <button onClick={() => navigate('/shipment')} >Shipment</button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Order;