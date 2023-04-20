import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button';
import './Cart-dropdown.scss'
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../Cart-item/Cart-item';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const closeCartDropdown = () => setIsCartOpen(false);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) =>
                    <CartItem key={item.id} cartItem={item} />
                )}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;