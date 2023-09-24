import ProductsCard from './ProductsCard';

import { CartState } from '../../context/Context';

import './products.css';

const Products = () => {

    const { products } = CartState();

    return (

        <div className='products'>

            <h4>Products</h4>
            <div className="underline"></div>

            <div className="product-content container">
                <div className="product-cards">
                    {products.map((product, index) => (
                        <ProductsCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>

        </div>

    )

};

export default Products;