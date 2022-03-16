import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
