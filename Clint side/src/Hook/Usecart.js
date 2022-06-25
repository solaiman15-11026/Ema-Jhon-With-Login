import React, { useEffect, useState } from 'react';
import { getCart } from '../utilities/fakedb';



const Usecart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const storeCart = getCart();
        const savecart = [];
        const keys = Object.keys(storeCart);
        console.log(keys)
        fetch('http://localhost:5000/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)

        })
            .then(res => res.json())
            .then(products => {
                for (const id in storeCart) {
                    const addProduct = products.find(pro => pro._id === id);
                    if (addProduct) {
                        const quantity = storeCart[id]
                        addProduct.quantity = quantity;
                        savecart.push(addProduct)
                    }
                }

                setCart(savecart)
            })
    }, [])

    return [cart, setCart]
};

export default Usecart;