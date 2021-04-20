import React from "react";
const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className='form-control my-2'
      type='text'
      name='query'
      placeholder='search...'
      value={value}
      onChange={(e) => {
        onChange(e.currentTarget.value);
      }}
    />
  );
};

export default SearchBox;
