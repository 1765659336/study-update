import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'hzero-ui';
import 'hzero-ui/dist/hzero-ui.css';
import assistStore from '../../redux/assist_store.js';
import {createNavChangeAction} from '../../redux/article_assist_action.js';

export default class Nav extends Component {
	
	componentDidMount(){
		assistStore.subscribe(()=>{
			this.setState({})
		})
	}
	
	navChangeTwo = () => {
		assistStore.dispatch(createNavChangeAction('2'));
	}
	
	navChangeOne = () => {
		assistStore.dispatch(createNavChangeAction('1'));
	}
	
	render() {
		// console.log('1',assistStore.getState())
		return (
			<div>
				<div className="logo" />
				<Menu
				  theme="dark"
				  mode="horizontal"
				  defaultSelectedKeys={['1']}
					selectedKeys={assistStore.getState()}
				  style={{ lineHeight: '64px' }}
				>
				  <Menu.Item key="1">
						<Link to="/" onClick={this.navChangeOne}>文章展示</Link>
					</Menu.Item>
				  <Menu.Item key="2">
						<Link to="/releaseArticle" onClick={this.navChangeTwo}>发布文章</Link>
					</Menu.Item>
				</Menu>
			</div>
		)
	}
	
	
}
