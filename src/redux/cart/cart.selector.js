import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
);

export const selectCartItemQuantity = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((previousValue, currentValue) => 
        previousValue + currentValue.quantity, 0
    )
);

export const selectCartItemTotal = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((previousValue, currentValue) => 
        previousValue + currentValue.quantity * currentValue.price, 0
    )
);

export const selectToggleCartHidden = createSelector(
    [selectCart], 
    (cart) => cart.hidden
);
