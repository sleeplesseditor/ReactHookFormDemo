import React, { Fragment } from 'react';
import './input.scss';

const Input = ({
    className,
    disabled,
    errorMessage,
    errorType,
    label,
    name,
    onChange,
    placeholder,
    required,
    value
}) => (
    <Fragment>
        {label != null && <label className="input-label" htmlFor={name}>{required ? `${label} *` : label}</label>}
        <input 
            className={`${(errorMessage != null && errorType)} ${className}`}
            disabled={disabled}
            key={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
        {errorMessage !== null && <p className="input-error-message">{errorMessage}</p> }
    </Fragment>
)

export default Input