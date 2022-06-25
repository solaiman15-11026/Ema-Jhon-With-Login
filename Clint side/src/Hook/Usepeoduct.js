import React, { useEffect, useState } from 'react';

const Usepeoduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])


    return [product, setProduct];

};

export default Usepeoduct;