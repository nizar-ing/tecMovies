import React from "react";
const Input = ({ name, label, type, value, onChange }) => {
  return (
    <div className='form-group mt-4'>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        type={type}
        id={name}
        name={name}
        className='form-control'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
