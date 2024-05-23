import React from 'react';
import '../styles/globals.css';
import {Layout} from '../components';
import { StateContext } from '../context/StateContext';
import {Toaster} from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
  <StateContext > 
  <Layout>
  <Toaster />
  <Component {...pageProps} />
  </Layout>
  </StateContext >
  )
}

export default MyApp

// Here we wrap our app with State Context. The components will pass as children, so they will receive proper context