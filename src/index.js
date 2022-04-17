import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from redux;
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
//  creating store 
const store=createStore(rootReducer);// here create store wants some argument which  jahan root reducre hai index me
console.log('store',store);

// console.log('before state',store.getState())

// // dispacth action 
// store.dispatch({

//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });
// console.log('after state',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
