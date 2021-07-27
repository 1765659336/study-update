import React, { Component } from 'react'
import { Layout, Collapse } from 'hzero-ui';
import 'hzero-ui/dist/hzero-ui.css';
import store from '../../redux/store.js';

const { Content } = Layout;
const Panel = Collapse.Panel;


export default class RevealArticle extends Component {
	render() {
		return (
			<div>
				<Content style={{ padding: '0 50px' }}>
					<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
						<Collapse>
							{	
								store.getState().map(item => {
									// console.log(item);
									return (
										<Panel header={'作者：' + item.authorName}>
										  <Collapse defaultActiveKey={item}>
												{
													item.article.map(item => {
														return (
															<Panel header={item.articleName + '---' + item.time}>
																 <p>{item.content}</p>
															</Panel>
														)
													})
												}
										  </Collapse>
										</Panel>
									)
								})
							}
						 </Collapse>
					</div>
				</Content>
			</div>
		)
	}
}
