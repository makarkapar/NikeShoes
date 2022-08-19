import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/reset.scss';
import './scss/vars.scss';
import './scss/App.scss';
import './scss/media.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

