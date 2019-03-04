// Created by szatpig at 2019/2/28.
import React, { Component } from 'react'

import { Layout } from 'antd';

import ContentLayout from './layout/contentLayout'
import HeadLayout from './layout/headLayout'
import MenuLayout from './layout/menuLayout'

const { Header, Sider, Content } = Layout;

export default class MainContainer extends Component{
    render(){
        return(
            <Layout className="main-container">
                <Sider>
                    <MenuLayout />
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