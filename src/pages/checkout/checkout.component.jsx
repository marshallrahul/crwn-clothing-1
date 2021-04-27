import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartItemTotal } from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.style.scss"

const CheckoutPage = ({ checkoutItems, totalAmount }) => (
    <div className="checkout-page">
        <div className="heading">
            <div>product</div>
            <div>Description</div>
            <div>quantity</div>
            <div>price</div>
            <div>remove</div>
        </div>
        <div className="checkout-items">
            {
                checkoutItems.map((item) => <CheckoutItem key={item.id} item={item} />)
            }
        </div>
        <div className="total">TOTAL: ${totalAmount}</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    checkoutItems: selectCartItems,
    totalAmount: selectCartItemTotal,
});


export default connect(mapStateToProps)(CheckoutPage);