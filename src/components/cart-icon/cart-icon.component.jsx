import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toogleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemQuantity } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";


import "./cart-icon.style.scss"

const CartIcon = ({ toogleCartHidden, quantity }) => (
    <div className="cart-icon" onClick={() => toogleCartHidden()} >
        <ShoppingIcon className="shopping-bag" />
        <span>{quantity}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    quantity: selectCartItemQuantity
});

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 