import React, { useState, useEffect } from 'react';

import { CartState } from '../../context/Context';

import '../products/products.css';

import ProductsCard from '../products/ProductsCard';

const Cart = () => {

    const { cart } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart]);

    return (

        <div className='products'>

            <h4>My Cart (${total})</h4>
            <div className="underline"></div>

            <div className="product-content container">
                <div className="product-cards">
                    {cart.map((product, index) => (
                        <ProductsCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>

        </div>

    )

}

export default Cart;