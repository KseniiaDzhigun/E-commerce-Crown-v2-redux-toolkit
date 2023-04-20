import { useContext } from 'react';
import Button from '../Button/Button';
import './Cart-dropdown.scss'
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../Cart-item/Cart-item';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) =>
                    <CartItem key={item.id} cartItem={item} />
                )}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;