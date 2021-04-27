import styled, { css } from "styled-components";

const invertedButtonStyles = css `
    color: white;
    background-color: black;
    outline: none;

    &:hover {
        color: black;
        background-color: white;
        outline: 1px solid black;
    }
`;

const googleSignInStyles = css`
    color: white;
    background-color: rgb(65, 105, 225);
    outline: none;

    &:hover {
        background-color: rgb(45, 84, 201);
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    if (props.inverted) {
        return invertedButtonStyles;
    }
}

export const CustomButtonContainer = styled.button`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Open Sans Condensed', sans-serif;
    text-transform: uppercase;
    outline: 1px solid black;
    height: 5rem;
    width: 22rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.5px;
    line-height: 50px;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
        outline: none;
    }

    ${getButtonStyles};
`;