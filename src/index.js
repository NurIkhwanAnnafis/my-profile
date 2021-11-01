import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import '../src/styles/index.css';
import '../src/styles/main.scss';
import reportWebVitals from '../src/test/reportWebVitals';
import Provider from './Provider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
