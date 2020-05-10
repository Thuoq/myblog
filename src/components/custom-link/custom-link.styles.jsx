
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
const buttonHeading = css`
		font-size: 3.5rem; 
		color: #FFA902;
		font-weight: 500;
`
const buttonReading = css`
		font-size: 1.9rem;
		color: #FFA902;
		font-family: sans-serif;
`

const getButtonStyles = (props) => {
	if(props.heading){
		return buttonHeading
	}
	return buttonReading;
}



export const ButtonLabel = styled(Link)`
	transition: all 0.2s ease-in-out;
	&,&:link,&:active{
		text-decoration: none;
		display: inline-block;
		border: 1px solid #7e878e;
		padding: 1.5rem;
		font-size: 1.6rem;
		font-family: sans-serif;
		text-transform: capitalize;
		font-weight: 400;
		color:#ccc;
	}
	&:hover{
		color: #FFA902;
	}
`
export const CustomLinkStylesContainer = styled(Link)`
	text-decoration: none;
	display: inline-block;
	padding: 0 2rem;
	transition: all 0.2s ease-in-out;
	outline: none;
	&:link,&:active{
		text-decoration: none;
	}
	&:hover{
		text-decoration-color: white;
		transform: scale(1.05);
	}
	${getButtonStyles}
`