import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Game from './components/Game'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();