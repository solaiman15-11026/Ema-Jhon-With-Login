import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb'
import Shopdetails from '../Shopdetails/Shopdetails';
import './Shop.css'
import { Link } from 'react-router-dom';
import Usecart from '../../Hook/Usecart';

const Shop = () => {

    const [shop, setShop] = Usecart();
    const [pagecount, setPagecount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10)

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(response => response.json())
            .then(data => setShop(data))
    }, [page, size])


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setPagecount(pages);
            })
    }, [])




    //add to cart buttom--------------------------------------
    const [cart, setCart] = useState([])
    const addCart = (product) => {
        let newCart = [];
        const selet = cart.find(pro => pro._id === product._id);
        if (!selet) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(pro => pro._id !== product._id)
            selet.quantity = selet.quantity + 1;
            newCart = [...rest, selet]
        }
        setCart(newCart);
        addToDb(product._id)
    }



    return (
        <div className='container'>

            <div className="product-container">

                {
                    shop.map(product => <Shopdetails
                        product={product}
                        key={product._id}
                        addCart={addCart}
                    ></Shopdetails>)
                }




                <div className='pagination'>
                    {
                        [...Array(pagecount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}

                            >{number}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>




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