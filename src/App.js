import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ContactPage from "./pages/contact/contact.component";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    // Add collections in firestore
    // addCollectionAndDocuments("collections", shopCollections.map(({items, title}) => ({items, title})));
    checkUserSession()
  }, [checkUserSession]);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/user" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);