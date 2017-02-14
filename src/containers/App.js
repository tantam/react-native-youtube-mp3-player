/**
 * Created by kei on 13/2/17.
 */
import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

import Settings from './Settings';
import Songs from './Songs';
import Player from './Player';

const store = createStore(reducer, applyMiddleware(thunk));


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="songs" component={Songs} initial title="Songs" hideNavBar />
                        <Scene key="player" component={Player} title="Player" hideNavBar />
                        <Scene key="settings" component={Settings} title="Settings" />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
