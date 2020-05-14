
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
const buttonSignIn = css`
	padding: 2rem 4rem;
	border-radius: 3px;
	color: #FFA902;
	margin-top: 4rem;
	background-color:#3D3D3D; 
	border:none;
	font-size: 1.6rem;
	transition: all 0.3s ease-in-out;
	&:hover{
		background-color: transparent;
		color: white;
		letter-spacing: 3px;
		font-weight: 600;
	}

`
const buttonSignInWithGoogle = css`
	background-color: #8E8E8F;
	padding: 2rem 2.5rem;
	border:none;
	color: #FFA902;
	border-radius: 3px;
	margin-top: 4rem;
	font-size: 1.6rem;
	transition: all 0.3s ease-in-out;
	&:hover{
		background-color: transparent;
		color: white;
		letter-spacing: 3px;
		font-weight: 600;
	}

`

const getButtonStyles = (props) => {
	if(props.heading){
		return buttonHeading
	}
	else if(props.signIn) {
		return buttonSignIn
	}
	else if (props.signInWithGoogle) {
		return buttonSignInWithGoogle
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

