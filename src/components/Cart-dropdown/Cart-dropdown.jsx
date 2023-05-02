import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button';

import {CartDropdownContainer, CartItems, EmptyMessage} from './Cart-dropdown.styles'

import { CartContext } from '../../contexts/cart.context';
import CartItem from '../Cart-item/Cart-item';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map((item) =>
                    <CartItem key={item.id} cartItem={item} />
                )) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;