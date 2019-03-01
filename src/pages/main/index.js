// Created by szatpig at 2019/2/28.
import React, { Component } from 'react'

import { Layout } from 'antd';

import ContentLayout from './layout/contentLayout'

const { Header, Sider, Content } = Layout;

export default class MainContainer extends Component{
    render(){
        return(
            <Layout className="main-container">
                <Sider>菜单栏</Sider>
                <Layout>
                    <Header className='header-container'>状态栏</Header>
                    <Content className='content-container'>
                        <ContentLayout />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}