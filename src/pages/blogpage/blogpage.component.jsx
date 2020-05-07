import React from 'react';
import { Route } from 'react-router-dom';
import SideBar from '../../components/sidebar/sidebar.component';
import {BlogContainer} from './blogpage.styles'
class BlogPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			magazine : null,
		}
	}
	render() {
		return (
			<BlogContainer>
				<div>Hello </div>
				<SideBar/>
			</BlogContainer>
		);
	}
}
export default BlogPage;