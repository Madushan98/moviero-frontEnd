import React from 'react';

import './sign-input.component.css'




const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="formInput">
        <label className="sign-label" >{label}</label>
        <input type="text" id="username" name="username" onChange={handleChange}  {...otherProps} required />

    </div>

)

export default FormInput;