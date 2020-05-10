import React from 'react';
import SideBar from '../../components/sidebar/sidebar.component';
import {BlogContainer,OverViewContainer} from './blogpage.styles';
import DATA_BLOG from './blog.data';
import CollectionItem from '../../components/collection-item/collection-item.component';
class BlogPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections : DATA_BLOG,
		}
	}
	render() {
		const  {collections} = this.state;
		const newCollections = Object.keys(collections).map(el => collections[el])
		return (
			<BlogContainer>
				<OverViewContainer>
					{ 
						newCollections.map(collection => (
							<CollectionItem collection={collection} key={collection.id} />
						))
					}
				</OverViewContainer>
				<SideBar/>
			</BlogContainer>
		);
	}
}
export default BlogPage;