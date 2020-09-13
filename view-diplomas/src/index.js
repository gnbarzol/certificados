import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import './assets/styles/bootstrap.min.css';
import * as serviceWorker from './config/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
