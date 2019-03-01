import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

import Container from './pages'

class App extends Component {
    render() {
        return (
            <Router>
                <Container />
            </Router>
        );
    }
}

export default App;
