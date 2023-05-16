import { useDispatch } from 'react-redux';
import { ProductCardContainer, Footer, Price, Name } from './Product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { addItemToCart } from '../../store/cart/cart.reducer.js';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to cart</Button>
        </ProductCardContainer>
    )
};

export default ProductCard;