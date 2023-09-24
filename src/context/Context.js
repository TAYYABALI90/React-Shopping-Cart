import { createContext, useState, useContext } from "react";

import { faker } from '@faker-js/faker';

import product1 from './product-1.jpg';
import product2 from './product-2.jpg';
import product3 from './product-3.jpg';
import product4 from './product-4.jpg';
import product5 from './product-5.jpg';
import product6 from './product-6.jpg';
import product7 from './product-7.jpg';
import product8 from './product-8.jpg';
import product9 from './product-9.jpg';
import product10 from './product-10.jpg';
import product11 from './product-11.jpg';
import product12 from './product-12.jpg';

faker.seed(100);

export const Cart = createContext();

const Context = ({ children }) => {

    const [cart, setCart] = useState([]);

    const arrayOfProducts = [...Array(12)].map(() => ({

        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),

    }));

    const [products] = useState(arrayOfProducts);

    function getProductImage(index) {
        const imageIndex = index % 12;
        const images = [product1,
            product2,
            product3,
            product4,
            product5,
            product6,
            product7,
            product8,
            product9,
            product10,
            product11,
            product12];
        return images[imageIndex];
    };

    return (<Cart.Provider value={{ cart, setCart, products, getProductImage }}>{children}</Cart.Provider>)

};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;