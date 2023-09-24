import { CartState } from '../../context/Context';

const ProductsCard = ({ product, index }) => {

    const { cart, setCart, getProductImage } = CartState();

    const addToCart = () => setCart([...cart, product]);

    const removeFromCart = () => setCart(cart.filter(c => c.id !== product.id));

    return (

        <div className="card">

            <span className="badge bg-danger">New</span>

            <div className="icons">

                {cart.includes(product) ? (
                    <button type='button' onClick={removeFromCart}>
                        <i className="bi bi-cart-dash" />
                    </button>
                ) :
                    (<button type='button' onClick={addToCart}>
                        <i className="bi bi-cart-plus" />
                    </button>
                    )}

            </div>

            <img src={getProductImage(index)} className="card-img-top" alt={`Product${index + 1}`} />

            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
            </div>

        </div>

    )

}

export default ProductsCard;