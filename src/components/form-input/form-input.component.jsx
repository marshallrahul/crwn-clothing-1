import React from 'react';

import "./form-input.style.scss";

const FormInput = ({label, handleChange, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ? <label className="form-input-label">{label}</label> : null
        }
    </div>
);

export default FormInput;