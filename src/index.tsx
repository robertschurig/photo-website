import React from 'react';
import { render } from 'react-dom';

import { App } from 'components/app';

import './index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
