import React from 'react';
import {ListItemContaner,
		LinkItemContainer,
		NavBrandContainer,
		NavUlContainer,
		NavContainer} from './navigation.styles'
const Navigation = () =>  {
		return (
			<NavContainer>
			<NavBrandContainer to="/">COWNUT</NavBrandContainer>
				<NavUlContainer>
					<ListItemContaner>
						<LinkItemContainer to="/blog" >
							Blog
						</LinkItemContainer>
					</ListItemContaner>
					<ListItemContaner>
						<LinkItemContainer  to="/resume">
							My Resume
						</LinkItemContainer>
					</ListItemContaner>
					<ListItemContaner>
						<LinkItemContainer   to="/signin">
							Login
						</LinkItemContainer>
					</ListItemContaner>
				</NavUlContainer>
			</NavContainer>
		);
	}
export default Navigation;