// Created by szatpig at 2019/3/1.
import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Login from "./auth/login";
import Main from './main'

export default class Container extends Component{
    render(){
        return (
            <Switch>
                <Route path='/login' component={ Login }  />
                <Route path='/' component= { Main } />
            </Switch>
        )
    }
}

