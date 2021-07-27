import React, { Component } from 'react'
import { Layout } from 'hzero-ui';
import 'hzero-ui/dist/hzero-ui.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import ReleaseArticle from './containers/ReleaseArticle/ReleaseArticle.js';
import RevealArticle from './containers/RevealArticle/RevealArticle.js';
import Nav from './containers/Nav/Nav';
import './App.css'

const { Header, Footer } = Layout;

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Layout className="layout">
					  <Header>
							<Nav></Nav>
					  </Header>
							<Route exact path="/" component={RevealArticle}></Route>
							<Route exact path="/releaseArticle" component={ReleaseArticle}></Route>
						<Footer style={{ textAlign: 'center' }}>
						  <p>@liujie-Homework of the first week</p>
						</Footer>
					</Layout>
				</div>
			</Router>
		)
	}
}