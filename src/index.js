import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Styles
import './assets/styles/output.css';

// components
import Fish from './components/Fish/Fish';

ReactDOM.render(
  <App>
    <Fish />
    <Fish />
    <Fish />
  </App>,
  document.getElementById('App')
);
