import React, { Component } from 'react'
import { Layout, Input, Row, Col } from 'hzero-ui';
import {Button, notification , Space} from 'antd';
import 'hzero-ui/dist/hzero-ui.css';
import { UserOutlined, CarryOutOutlined, ContainerOutlined } from '@ant-design/icons'
import store from '../../redux/store.js';
import assistStore from '../../redux/assist_store.js';
import { createNavChangeAction, createNewArticleAction } from '../../redux/article_assist_action.js';

const { Content } = Layout;
const { TextArea } = Input;
const openNotificationWithIcon = type => {
  notification[type]({
    message: '错误',
    description:
      '内容不能为空,请重新填写',
  });
};

export default class ReleaseArticle extends Component {
	
	state = {
		ArticleObj: {
			authorName:false,
			article:[
				{
						articleName:false,
						time:false,
						content:false,
				}
			]
		}
	}
	
	handleSubmit = () => {
		const data = this.state.ArticleObj;
		const lock = data.authorName && data.article[0].articleName && data.article[0].time && data.article[0].content;
		if(lock){
			store.dispatch(createNewArticleAction(data));
			assistStore.dispatch(createNavChangeAction('1'));
			this.props.history.go(-1);
		}else {
			openNotificationWithIcon('error');
		}
	}
	
	render() {
		return (
			<div>
				<Row>
					<Col span={12} push={6}>
						<Content style={{ padding: '50px 50px' }}>
							<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
								<Input 
									placeholder="文章标题" 
									prefix={(<ContainerOutlined />)} 
									style={{margin:'10px 0'}}
									onChange={e => {this.state.ArticleObj.article[0].articleName = e.target.value}}
									/>
								<Input placeholder="作者"
									prefix={<UserOutlined />}
									style={{margin:'10px 0'}}
									onChange={e => {this.state.ArticleObj.authorName = e.target.value}}
									/>
								<Input 
									prefix={(<CarryOutOutlined />)} 
									placeholder="时间" 
									style={{margin:'10px 0'}} 
									onChange={e => {this.state.ArticleObj.article[0].time = e.target.value}}
								/>
								<TextArea 
									onChange={ e =>{this.state.ArticleObj.article[0].content = e.target.value}}
									placeholder="文章内容"
									style={{margin:'10px 0'}} 
								/>
								<Row>
									<Col span={3} push={21}>
										<Space>
											<Button type="primary" onClick={this.handleSubmit}>发布</Button>
										</Space>
									</Col>
								</Row>
							</div>
						</Content>
					</Col>
				</Row>
			</div>
		)
	}
}
