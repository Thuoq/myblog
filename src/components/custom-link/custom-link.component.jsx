import React from 'react';
import  {CustomLinkStylesContainer} from './custom-link.styles'
const CustomLink = ({children,...props}) => {
	return(
	<CustomLinkStylesContainer {...props}>{children}</CustomLinkStylesContainer>
)}
export default CustomLink;

