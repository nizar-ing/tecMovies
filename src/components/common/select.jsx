import React from "react";
const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className='input-group mb-3'>
      <select className='custom-select' id={name} name={name} {...rest}>
        <option key='0' value='0'>
          You have to choose ...
        </option>
        {options.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <div className='input-group-append'>
        <label className='input-group-text' htmlFor={name}>
          {label}
        </label>
      </div>
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Select;
