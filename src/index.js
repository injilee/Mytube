import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Mytube from './service/mytube';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';

const youtube = new Mytube(process.env.REACT_APP_API_KEY);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App youtube={youtube} />);
