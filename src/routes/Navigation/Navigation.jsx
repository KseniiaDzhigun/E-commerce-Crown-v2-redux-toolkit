import { Fragment, useContext } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.styles';

import CartIcon from '../../components/Cart-icon/Cart-icon';
import CartDropdown from '../../components/Cart-dropdown/Cart-dropdown';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase';



const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);

    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;