import React from 'react';

const Cart = (props) => {
    // console.log(props.price);
    const Cart = props.cart;
    console.log(Cart);
    return (
        <div>
            <h2>Order Summery</h2>
            <p>Items ordered: {Cart.length}</p>
        </div>
    );
};

export default Cart;