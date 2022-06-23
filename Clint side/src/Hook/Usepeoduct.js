import React, { useEffect, useState } from 'react';

const Usepeoduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])


    return [product, setProduct];

};

export default Usepeoduct;