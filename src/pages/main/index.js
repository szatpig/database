// Created by szatpig at 2019/2/28.
import React, { Component } from 'react'

import { Layout } from 'antd';

import ContentLayout from './layout/contentLayout'
import HeadLayout from './layout/headLayout'
import MenuLayout from './layout/menuLayout'
import {inject, observer} from "mobx-react";

const { Header, Sider, Content } = Layout;

@inject('title')
@observer
class MainContainer extends Component{
    render(){
        const { collapsed } = this.props.title;
        console.log('MainContainer',collapsed)
        return(
            <Layout className="main-container">
                <Sider width={180}
                       collapsed={ collapsed } >
                    <MenuLayout collapsed = { collapsed } />
                </Sider>
                <Layout>
                    <Header className='header-container'>
                        <HeadLayout />
                    </Header>
                    <Content className='content-container'>
                        <ContentLayout />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default MainContainer