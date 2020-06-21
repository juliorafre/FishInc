import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './components/App';
//i18n
import './i18n';
//BBDD
import esFishes from './bbdd/fishes_esES.json';
// Styles
import './assets/styles/output.css';

/* const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_ &&
    window.__REDUX_DEVTOOLS_EXTENSION_()) ||
  compose; */

const initialState = {
  lang: 'es',
  month: 'Jun',
  hemisphere: 'South',
  Fishes_bbdd_1: esFishes.Fishes,
  Fishes_bbdd_2: esFishes.Fishes,
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);
