import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from "mobx-react"
import store from './store'
import './sass/index.scss';

import Container from './pages'

class App extends Component {
    render() {
        return (
            <Provider {...store}>
                <Router>
                    <Container />
                </Router>
            </Provider>
        );
    }
}

export default App;
