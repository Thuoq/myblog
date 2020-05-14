import React from 'react' 
import { ReactComponent as TimeIcon} from '../../asset/005-time.svg';
import { ReactComponent as UserIcon} from '../../asset/009-interface-1.svg';
import { ReactComponent as ArrowIcon} from '../../asset/002-arrow-pointing-right-in-a-circle.svg';
import CustomLink from '../custom-link/custom-link.component';
import {CategoryContainer,
		CategoryContentContainer,
		CategoryPostContainer,
		CategoryDescriptionContainer,
		CategoryReadContainer,
		} from './collection-item.styles';
const CollectionItem = ({collection}) => {
	const {imageUrl,title,author,date,description,routeName} = collection;
	return(
		<CategoryContainer className ="mb-md">
			 <img src={imageUrl} alt="#IMAGE_COLLECIONS"/>
				<div>
					<CategoryContentContainer className="mb-sm">
						<h2>
							{title}
						</h2>
					</CategoryContentContainer>
					<CategoryPostContainer className=" mb-sm">
						<div>
							<span>By: </span>
							<UserIcon as ="svg"/>
							<span>{author}</span>
						</div>
						<div>
							<TimeIcon as="svg"/>
							<span>{date}</span>
						</div>
					</CategoryPostContainer>
						<CategoryDescriptionContainer className=" mb-sm">
							 <p>{description}</p>
						</CategoryDescriptionContainer>
						<CategoryReadContainer>
							<ArrowIcon as="svg" />
							<CustomLink to={"/blog" + routeName} >Read More</CustomLink>
						</CategoryReadContainer>
					</div>
	</CategoryContainer>
)}
export default CollectionItem 