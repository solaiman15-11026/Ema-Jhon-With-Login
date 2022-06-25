import React, { useEffect, useState } from 'react';
import { getCart } from '../utilities/fakedb';

const Usecart = () => {
    const [cart, setCart] = useState([])
    const [shop, setShop] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(response => response.json())
            .then(data => setShop(data))
    }, [])

    useEffect(() => {
        const storeCart = getCart();
        const savecart = [];
        for (const id in storeCart) {
            const addProduct = shop.find(pro => pro._id === id);
            if (addProduct) {
                const quantity = storeCart[id]
                addProduct.quantity = quantity;
                savecart.push(addProduct)
            }
        }

        setCart(savecart)
    }, [shop])

    return [cart, setCart]
};

export default Usecart;