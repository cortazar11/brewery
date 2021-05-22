import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,document.querySelector('#root'))

  // 442443483995-6pujd5ejpgdf7a8cs367ovgsoasb4fj2.apps.googleusercontent.com