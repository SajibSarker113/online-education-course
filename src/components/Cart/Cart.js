import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, cr) => total + cr.price, 0 )
    return (
        <div>
            <div>
                {
                    cart.map(c => <div style={{border: '1px solid lightgray', margin: '2px'}}>
                        <p>cousre name: {c.name}</p>
                        <p>course price: {c.price}</p>
                    </div> )
                }
            </div>

            <div>
           <h5> Total course purchase: {cart.length} </h5>
            <h5>Total Price: {total} </h5> 
        </div>
        </div>
    );
};

export default Cart;