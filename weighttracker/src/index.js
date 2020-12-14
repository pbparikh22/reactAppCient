import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
ReactDOM.render(
  <React.StrictMode>
    <div className="title">
      <h1>Weight Tracker</h1>     
    </div>
    <Provider store={store}>
      <App />
      
    </Provider>
  </React.StrictMode>,
document.getElementById('root')
);