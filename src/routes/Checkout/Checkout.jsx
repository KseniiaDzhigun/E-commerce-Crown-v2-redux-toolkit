import { useContext } from 'react';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './Checkout.styles'
import { CartContext } from '../../contexts/cart.context';
import CartCheckoutItem from '../../components/Checkout-item/Checkout-item';

const Checkout = () => {
    const { cartItems, cartPrice } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) =>
                <CartCheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <Total>Total: ${cartPrice}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;
