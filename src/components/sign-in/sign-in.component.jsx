import React, { useState } from 'react';
import { connect } from "react-redux";

import { emailSignInStart, googleSignInStart } from "../../redux/user/user.action.js";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.style.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: "", password: "" });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h1 className="title">I already have an account</h1>
            <div className="sub-title">Sign in with your email and password</div>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    placeholder="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    placeholder="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton inverted type="submit">sign in</CustomButton>
                    <CustomButton onClick={() => googleSignInStart()} isGoogleSignIn>
                        sign in with google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);