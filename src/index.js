import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import './assets/css/index.css';

//configuring new store
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
