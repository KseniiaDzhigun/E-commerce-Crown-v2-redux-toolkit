import { useSelector } from 'react-redux';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './Checkout.styles'

import CartCheckoutItem from '../../components/Checkout-item/Checkout-item';
import PaymentForm from '../../components/Payment-form/Payment-form';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartPrice = useSelector(selectCartTotal);

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
            <PaymentForm/>
        </CheckoutContainer>
    )
}

export default Checkout;
