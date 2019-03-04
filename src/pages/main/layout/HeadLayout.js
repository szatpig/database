// Created by szatpig at 2019/3/1.
import React, { Component } from 'react'
import { Icon,Breadcrumb,Popover   } from 'antd';

import defaultHeadImg from './../../../images/default.png'

export default class HeadLayout extends Component{
    state = {
        collapsed:false
    }
    toggle =()=>{
        this.setState({
            collapsed:!this.state.collapsed
        })
    }

    render(){
        const text = <span>Title</span>;
        const content = (
                <div>
                    <p>Content</p>
                    <p>Content</p>
                </div>
        );
        return(
            <div className="head-content">
                <div className="left-wrap">
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="1">Application Center</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="1">Application List</a></Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="right-wrap">
                    <div className="item-wrap">
                        扫码录音
                    </div>
                    <div className="item-wrap">坐席</div>
                    <div className="item-wrap">帮助中心</div>
                    <div className="item-wrap">消息</div>
                    <div className="item-wrap">
                        <Popover placement="bottom" title={text} content={content} trigger="hover">
                            <img src={ defaultHeadImg } alt="用户头像"/>
                            <span className="item-name">ljtest001@ynt.ai</span>
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}