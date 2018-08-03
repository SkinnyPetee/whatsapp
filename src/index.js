import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import reducer from './reducers/index' ;
import { Provider } from 'react-redux';

const store = createStore(reducer);
console.log(store.getState());



ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));