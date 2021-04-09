/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Router from './src/components/Router';

const store = configureStore();

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Router />
        </Provider>
      </View>
    )
  }
}