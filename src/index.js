import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app';

require('dotenv').config({ path: '../.env' });

ReactDOM.render(
  <App />,
  document.querySelector('.app'),
);
