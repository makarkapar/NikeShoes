import React from 'react'
import Header from '../components/header/Header';
import CartItems from '../components/cartShop/CartItems';
import EmptyCart from '../components/cartShop/EmptyCart'
import { CartContext } from './../App';

const CartShop = () => {
    const { cartItems } = React.useContext(CartContext);
    return(
        <>
            <Header />
            {cartItems.length === 0 ? <EmptyCart /> : <CartItems />}
        </>
    )
}

export default CartShop;