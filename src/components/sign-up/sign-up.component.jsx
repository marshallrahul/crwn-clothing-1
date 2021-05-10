import React, { useState } from 'react';
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.action";

import "./sign-up.style.scss";

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            signUpStart(displayName, email, password);

            setCredentials({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };


    return (
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <div className="sub-title">Sign in with your email and password</div>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    placeholder="Display Name"
                    required
                />
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
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    required
                />
                <div className="button">
                    <CustomButton inverted>sign up</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);