import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

import * as data from './data/info';

import { Main } from './Main';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main {...data} />);