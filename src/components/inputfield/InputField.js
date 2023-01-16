import React from 'react';

function InputField({ name, className, type, label, value, onChange}) {
  return (
    <>
      <label htmlFor={`${name}-field`}>{label}</label>
        <input
            name={name}
            className={className}
            id={`${name}-field`}
            type={type}
            value={value}
            onChange={onChange}
        />
    </>
  );
}

export default InputField;
