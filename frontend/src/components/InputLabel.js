import React from 'react';

const InputLabel = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className='form-label inline-block mb-2 text-gray-700'
    >
      {children}
    </label>
  );
};

export default InputLabel;
