// Created by szatpig at 2019/3/1.
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import routes from './../../../router'

export default  class ContentLayout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {
                    routes.map((item,i) =>
                        <Route key={i} path={item.path} component={item.component} exact />
                    )
                }
            </div>
        )
    }
}