import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from redux;
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import movies from './reducers';
//  creating store 
const store=createStore(movies);// here create store wants some argument which  jahan movie reducre hai index me
console.log('store',store);
console.log('before state',store.getState())

store.dispatch({

  type:'ADD_MOVIES',
  movies:[{name:'Superman'}]
});
console.log('after state',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
