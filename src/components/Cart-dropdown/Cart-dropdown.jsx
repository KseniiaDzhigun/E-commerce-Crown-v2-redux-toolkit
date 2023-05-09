import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from '../Button/Button';

import {CartDropdownContainer, CartItems, EmptyMessage} from './Cart-dropdown.styles'

import { selectCartItems } from "../../store/cart/cart.selector";
import CartItem from '../Cart-item/Cart-item';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

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