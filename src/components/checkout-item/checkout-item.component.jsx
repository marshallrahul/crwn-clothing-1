import React from 'react';
import { connect } from "react-redux";

import { addItem, removeItem, clearItem } from "../../redux/cart/cart.action";

import "./checkout-item.style.scss"

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
    const { imageUrl, name, price, quantity } = item;
    return (
    <div className="checkout-item">
        <div className="bg-photo" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="name">{name}</div>
        <div className="quantity">
            <div className="arrow" onClick={() => removeItem(item)}>&#12296;</div>
            <div className="value">{quantity}</div>
            <div className="arrow" onClick={() => addItem(item)}>&#12297;</div>
        </div>
        <div className="price">{price}</div>
        <div className="remove" onClick={() => clearItem(item)}>&#215;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearItem: (item) => dispatch(clearItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);