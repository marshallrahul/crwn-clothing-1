import React from 'react';

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.style.scss";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <div className="sub-title">Sign in with your email and password</div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        placeholder="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="Email"
                        placeholder="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="Password"
                        placeholder="Password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
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
}

export default SignUp;