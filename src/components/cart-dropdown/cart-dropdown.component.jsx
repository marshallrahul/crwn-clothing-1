import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { toogleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItems } from "../../redux/cart/cart.selector";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.style.scss"

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(({id, ...otherCartItemProps}) => <CartItem key={id} {...otherCartItemProps} />)
            }
        </div>
        <CustomButton type="submit" onClick={() => { history.push("/checkout"); dispatch(toogleCartHidden()) }} inverted >
            Go to checkout
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));