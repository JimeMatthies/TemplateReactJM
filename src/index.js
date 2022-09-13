import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main {...data} />);