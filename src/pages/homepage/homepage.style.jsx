import styled from 'styled-components';


export const MainContainer = styled.section`
	display: flex;
	justify-content: space-between; 
	@media screen and(min-width: 112.5em) {
		 justify-content: space-around; 
	}

`
export const MainContentContainer = styled.div`
	padding-left: 2rem; 
`
export const QuoteContainer = styled.q`
	color: white;
	font-size: 2.5rem;
	line-height: 2;
	font-style: italic;
	animation: moveInBottom 2s ease-in;  
	transition: 0.2s all ease-in-out;
	cursor: pointer;

	    &:hover{
	    	color: #FFA902;
	    }
`
export const AuthorContainer = styled.span`
	display: block;
	text-align: right;
	font-size: 2.5rem;
	font-weight: 700;
	color: #cccccc;
`
export const IconContainer = {
	fill: "#FFA902",
	height: "4.5rem",
	width: "4rem",
	cursor: "pointer"
}
export const DisplayFlex = styled.div`
	display: flex;
	align-items: center;
`
export const ImageContainer = styled.image`
	height: 30rem;
	width: 55rem;

	@media screen and(min-width: 112.5em) {
		height: 30rem;
		width: 55rem;
	}
	@media screen and(max-width: 75em) {
		 height: 25rem;
		 width: 45rem;
	}
	@media screen and(max-width: 56.25em) {
	      height: 20rem;
		 width: 35rem;
	}
`