import React from 'react';
import './dropdown.scss';

const Dropdown = ({
    className,
    disabled,
    errorMessage,
    errorType,
    label,
    name,
    onChange,
    options,
    placeholder,
    register,
    required,
    type
    // value
}) => (
    <div className="dropdown-container">
        {label != null && <label className="dropdown-label" htmlFor={name}>{required ? `${label} *` : label}</label>}
        <select 
            className={errorMessage !== null ? errorMessage && (`${className} error-display`) : className}
            disabled={disabled}
            key={name}
            name={name}
            options={options}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        >
            <option>Select {label}</option>
            {options && options.map((option, index) => (
                <option key={index}>{option.value}</option>
            ))}
        </select>
        {errorMessage !== null && (<p className="select-error-message">{errorMessage}</p>)}
    </div>
)

export default Dropdown;