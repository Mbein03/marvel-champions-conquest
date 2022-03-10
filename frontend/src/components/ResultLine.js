import React from 'react';

const ResultLine = ({ title, result }) => {
  return (
    <h4 className='mb-3'>
      <span className='font-bold'>{title}:</span> {result}
    </h4>
  );
};

export default ResultLine;
