import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, cr) => total + cr.price, 0 )
    return (
        <div>
           <h5>Course purchase: {cart.length} </h5>
            <h5>Total Price: {total} </h5> 
        </div>
    );
};

export default Cart;