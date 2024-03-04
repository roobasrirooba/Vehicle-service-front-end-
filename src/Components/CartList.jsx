import { useEffect, useState } from 'react';
import "./AppList.css";
function CartList({ cart }) {
    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className="cart-container">
            {CART?.map((cartItem, cartIndex) => (
                <div key={cartIndex} className="cart-item">
                    <img
                        src={cartItem.url}
                        alt={cartItem.name}
                        style={{ maxWidth: '180px', maxHeight: '200px' }} 
                    />
                    <div className="cart-item-details">
                        <span> {cartItem.name} </span>
                        <button
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartIndex === index
                                        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                                        : item;
                                });
                                setCART(_CART);
                            }}
                        >
                            -
                        </button>
                        <span> {cartItem.quantity} </span>
                        <button
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartIndex === index
                                        ? { ...item, quantity: item.quantity + 1 }
                                        : item;
                                });
                                setCART(_CART);
                            }}
                        >
                            +
                        </button>
                        <span> Rs. {cartItem.price * cartItem.quantity} </span>
                    </div>
                </div>
            ))}
            <p className='cost'>
    <span className="total-cost-text">TOTAL COST =</span> <span className="total-amount">
        {CART.reduce((total, item) => total + item.price * item.quantity, 0)}
    </span>
</p>

           
        </div>
    );
}

export default CartList;
