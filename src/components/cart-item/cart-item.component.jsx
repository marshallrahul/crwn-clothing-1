import React from 'react';

import "./cart-item.style.scss"

const CartItem = ({ imageUrl, name, quantity, price }) => (
    <div className="cart-item">
        <div className="photo" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content">
            <div className="title">{name}</div>
            <div className="details">{quantity}&#215;{price}</div>
        </div>
    </div>
);

export default CartItem;