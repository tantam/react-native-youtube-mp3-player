/**
 * Created by kei on 13/2/17.
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import reducer from './reducers';
import App from './containers/App';

const RouterWithRedux = connect()(Router);
const store = createStore(reducer);

const Mp3Player = () => <App />

AppRegistry.registerComponent('Mp3Player', () => Mp3Player);
