import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';


// Top level of the app
// Context describes the time and the event that took place.
// In this case is used in accordance to Firebase documentation
ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}> 
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
