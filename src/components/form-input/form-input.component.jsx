import React from 'react';
import './form-input.styles.css';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="reltive form w-full flex items-center justify-start mb-4">
        <input 
            className="form-input w-full flex bg-white focus:outline-none text-gray-700 text-lg border-b border-gray-700 my-4 px-1 py-2" 
            onChange={handleChange} {...otherProps}
        />
        {
            label ? 
            <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''} absolute text-gray-700 text-lg`}>
                {label}
            </label>
            : null
        }
    </div>
)

export default FormInput;
