import React from 'react';
import SideBar from '../../components/sidebar/sidebar.component';
import {BlogContainer} from './blogpage.styles';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route , Switch} from 'react-router-dom'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';




const BlogPage = ({match}) => (
	<BlogContainer>
		<Switch>
			<Route exact path = {`${match.url}`} component = {CollectionOverview}/>
			<Route exact path = {`${match.url}/:collectionId`} component = {CollectionPreview} />
		</Switch>
		<SideBar/>
	</BlogContainer>
	
)

export default BlogPage;