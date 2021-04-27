import React from 'react';
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.action.js";

import "./collection-item.style.scss"

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <div className="collection-item">
        <div className="bg-photo" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="button" onClick={() => addItem(item)}>
            <CustomButton>
                Add To Cart
            </CustomButton>
        </div>
        <div className="content">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);