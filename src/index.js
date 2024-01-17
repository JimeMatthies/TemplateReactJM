import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as data from './data/info';
import 'bootstrap';
import './styles/App.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App {...data} />);