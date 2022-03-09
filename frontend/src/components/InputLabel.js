import React from 'react';

const InputLabel = (props) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className='form-label inline-block mb-2 text-gray-700'
    >
      {props.children}
    </label>
  );
};

export default InputLabel;
