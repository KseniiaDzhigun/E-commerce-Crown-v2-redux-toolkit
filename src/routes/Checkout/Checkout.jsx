import { useContext } from 'react';
import './Checkout.scss'
import { CartContext } from '../../contexts/cart.context';
import CartCheckoutItem from '../../components/Checkout-item/Checkout-item';

const Checkout = () => {
    const { cartItems, cartPrice } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header '>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) =>
                <CartCheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <span className='total'>Total: ${cartPrice}</span>
        </div>
    )
}

export default Checkout;