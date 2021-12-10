import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'hzero-ui';
import 'hzero-ui/dist/hzero-ui.css';
import { createNavChangeAction } from '../../redux/actions/article_assist.js';
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

class Nav extends Component {

    navChangeTwo = () => {
        this.props.navChange('2');
    }

    navChangeOne = () => {
        this.props.navChange('1');
    }

    render() {
        return ( <
            div >
            <
            div className = "logo" / >
            <
            Menu theme = "dark"
            mode = "horizontal"
            defaultSelectedKeys = {
                ['1'] }
            selectedKeys = { this.props.navSelect }
            style = {
                { lineHeight: '64px' } } >
            <
            Menu.Item key = "1" >
            <
            Link to = "/"
            onClick = { this.navChangeOne } > 文章展示 < /Link> <
            /Menu.Item> <
            Menu.Item key = "2" >
            <
            Link to = "/releaseArticle"
            onClick = { this.navChangeTwo } > 发布文章 < /Link> <
            /Menu.Item> <
            /Menu> <
            /div>
        )
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({
        navSelect: state.assist
    }), {
        navChange: createNavChangeAction
    }
)(Nav)