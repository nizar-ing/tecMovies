import React from "react";
const Input = ({ name, label, type, value, autoFocus, error, onChange }) => {
  return (
    <div className='form-group mt-4'>
      <label htmlFor={name} style={{ fontWeight: "bold" }}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='form-control'
        value={value}
        autoFocus={autoFocus ? true : false}
        onChange={onChange}
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;
