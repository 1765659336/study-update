import React, { Component } from 'react'
import { Layout, Input, Row, Col } from 'hzero-ui';
import {Button, notification , Space} from 'antd';
import 'hzero-ui/dist/hzero-ui.css';
import { UserOutlined, CarryOutOutlined, ContainerOutlined } from '@ant-design/icons'
import { createNavChangeAction, createNewArticleAction } from '../../redux/actions/article_assist';
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

const { Content } = Layout;
const { TextArea } = Input;
const openNotificationWithIcon = type => {
  notification[type]({
    message: '错误',
    description:
      '内容不能为空,请重新填写',
  });
};

class ReleaseArticle extends Component {
	
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
			this.props.jiaArticle(data);
			this.props.navChange('1');
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

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({}),
	{
		jiaArticle:createNewArticleAction,
		navChange:createNavChangeAction
	}
)(ReleaseArticle)