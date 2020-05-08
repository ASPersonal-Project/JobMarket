import React from 'react';
import Appbar from './Appbar';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';

export default function App() {
  return (
    <Provider store={configureStore}>
      <Appbar/>
    </Provider>
       
   
   
  );
}


