import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import reducer from './reducers/index' ;
import { Provider } from 'react-redux';
import { sendMessage } from './actions/messages';

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(sendMessage({
  id: 9,
  text: "this is a dispatched message",
  self: true
}))

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));