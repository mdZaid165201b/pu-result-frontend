import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'flowbite'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //"./src/**/*.{js,jsx,ts,tsx}",
  // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  // require('flowbite/plugin')
);

