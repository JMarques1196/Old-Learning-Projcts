import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; // css resets
import App from './app';
import {GlobalStyles} from './global-styles';
import {auth} from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
      <FirebaseContext.Provider value={{auth}}> 
      {
      }
        <GlobalStyles/>
        <App />
      </FirebaseContext.Provider>
    </> 
 
);
