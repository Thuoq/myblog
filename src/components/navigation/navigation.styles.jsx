

import styled from 'styled-components'

import { Link } from 'react-router-dom';


export const ListItemContaner = styled.li`
	list-style: none; 
	padding:  0 2rem 1rem 0;
	&:not(:last-child) { 
		margin-right: 2rem;  
	}
}	 
`
export const LinkItemContainer = styled(Link)`
	font-size: 2.5rem;     
	text-decoration: none;
	color: white;  
	transition: all .2s ease-in-out;    
	&:hover{
		border-bottom: 5px solid #FFA902;    
	}
`
export const NavBrandContainer = styled(Link)`
	&,&:active,&:link{
		display: inline-block;
		padding: 2rem;   
		text-decoration: none; 
		color: white;  
		font-size: 4.5rem;  
		letter-spacing: 2rem; 
		transition: all .2s ease-in-out;
		&:hover{
			color : #FFA902;
		}
	}
`
export const NavContainer =  styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10rem;
`
export const NavUlContainer = styled.ul`
	display: flex;
	justify-content: space-between; 
	backface-visibility: hidden; 
	align-items: center;

`