import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getCart } from '../../utilities/fakedb'
import Shopdetails from '../Shopdetails/Shopdetails';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [shop, setShop] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setShop(data))
    }, [])

    //local stroge useeffect--------------------------------
    useEffect(() => {
        const storeCart = getCart();
        const saveCart = []
        for (const id in storeCart) {
            const added = shop.find(shoping => shoping.id === id);
            if (added) {
                const quantity = storeCart[id];
                added.quantity = quantity;
                saveCart.push(added)
            }
        }
        setCart(saveCart)
    }, [shop])

    //add to cart buttom--------------------------------------
    const [cart, setCart] = useState([])
    const addCart = (product) => {
        let newCart = [];
        const selet = cart.find(pro => pro.id === product.id);
        if (!selet) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(pro => pro.id !== product.id)
            selet.quantity = selet.quantity + 1;
            newCart = [...rest, selet]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='container'>

            <div className="product-container">

                {
                    shop.map(product => <Shopdetails
                        product={product}
                        key={product.id}
                        addCart={addCart}
                    ></Shopdetails>)
                }
            </div>

            <div className="cart-container">

                <Cart
                    cart={cart} >
                    <Link to="/order">
                        <button>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;