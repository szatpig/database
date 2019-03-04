// Created by szatpig at 2019/3/1.
import React, { Component } from 'react'
import { Menu,Icon } from 'antd';

const { SubMenu } = Menu;

export default class MenuLayout extends Component{
    render(){
        return(
             <div className="menu-container">
                 <div className="logo-wrap">小意机器人</div>
                 <Menu theme="dark" mode="inline">
                     <Menu.Item>
                         <Icon type="home" theme="filled" />
                         <span>首页</span>
                     </Menu.Item>
                     <SubMenu key="sub1" title={<span><Icon type="home" theme="filled" /><span>外呼中心</span></span>}>
                         <Menu.Item>子菜单项</Menu.Item>
                     </SubMenu>
                 </Menu>
             </div>
        )
    }
}