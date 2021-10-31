import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import './styles/global.css';
import './styles/grid.css';
import Layout from './Layout';
import './assets/boxicons-2.0.7/css/boxicons.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

