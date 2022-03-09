import React, { useState } from 'react';

function SelectInput(props) {
  // Update state in useLootRoll.js so additional logic can be performed
  function updateSelected(event) {
    props.onSelectChange(event.target.value);
  }

  // Format options
  const options = props.data
    ? props.data.map((data) => (
        <option key={data.id} value={data.id}>
          {data.name}
        </option>
      ))
    : [];

  return (
    <>
      <div className='form-group mb-6'>
        <select
          id={props.id}
          name={props.name}
          value={props.value}
          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          onChange={updateSelected}
          disabled={props.disabled}
        >
          {options}
        </select>
      </div>
    </>
  );
}

export default SelectInput;
