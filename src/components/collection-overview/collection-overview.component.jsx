import React from 'react'; 

import CollectionItem from '../collection-item/collection-item.component';

import DATA_BLOG from './collection-overview.data';
import {OverViewContainer} from './collection-overview.styles';

class CollectionOverview extends React.Component {
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
			<OverViewContainer>
					{ 
						newCollections.map(collection => (
							<CollectionItem collection={collection} key={collection.id} />
						))
					}
			</OverViewContainer>
		);
	}
}
export default CollectionOverview