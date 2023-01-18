import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: ''
}
const reducer = (state = initialState, action) => {
  console.log('reducer called');
  if (action.type === 'SETDETAILS') {
    return {
      firstname: action.payload.firstname,
      lastname: action.payload.lastname
    }
  }
  // else if (action.type === 'SETVAR') {
  //   return {
  //     data : action.payload.data,
  //     index: action.payload.id
  //   }
  // }

  return state;
};

const store = configureStore({ reducer });

store.subscribe(() => {
  console.log('current state', store.getState());
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { store };

