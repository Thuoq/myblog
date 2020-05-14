import React from 'react' ;
import MAIN_DATA from './collection-preview.data';
import CollectionItem from '../collection-item/collection-item.component';
import {OverViewContainer} from '../collection-overview/collection-overview.styles'
class CollectionPreview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category : MAIN_DATA
		}
	}
	render() {
		const urlParams = this.props.match.params.collectionId;
		const { category } = this.state;
		const newCategories = category[urlParams].items;
		return (
			<OverViewContainer>
				<h1 className="heading-primary letter-spacing mb-md">{urlParams.toUpperCase()}</h1>
				{
					newCategories.map(category => (
						<CollectionItem key={category.id} collection = {category}/>
					))
				}
			</OverViewContainer>
		);
	}
}

export default CollectionPreview;