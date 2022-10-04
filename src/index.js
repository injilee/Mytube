import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Mytube from './service/mytube';

const youtube = new Mytube(process.env.REACT_APP_API_KEY);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
);
