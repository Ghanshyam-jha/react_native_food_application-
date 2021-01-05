import React, { Component } from 'react';
import App from './src/components/route';
import {Provider} from 'react-redux';
import store from './src/store';

export default class NativeBaseRedux extends Component {
    render() {
      return (
        <Provider store= {store}>
        <App />
        </Provider>
      );
    }
  }
  
 
