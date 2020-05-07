import styled, {css} from 'styled-components';

const getColorSVG = css`
	fill: #cccccc;
`
export const SideBarContainer = styled.div`
		grid-column: 4/5; 
		@media screen and(max-width: 56.25em) {
		 	grid-column: 3/4; 
		}
		background-color: #48555e;
		color: #ccc;
		padding: 2rem;
		border-radius: 6px;
		transition: all 0.2s ease-in-out;
		&:hover{
			box-shadow: 0 2rem 4rem rgba(0,0,0,0.2);
			transform: scale(1.03);
			cursor: pointer;
		}
`
export const PopularPostIconContainer = styled.div`
		display: flex;		
		align-items: center;
		padding-bottom: 2rem;
		border-bottom: 1px solid #7e878e;
		svg{
			margin-right: 0.5rem;
			height: 1.75rem;
			width: 1.5rem;
		}
		h3{
			font-weight: 400;
			font-size: 1.4rem;
		}

`
export const PopularPostContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: flex-start;
	p{
		font-family: sans-serif;
		font-size: 1.4rem;
		font-weight: 400;
		transition: all 0.2s ease-in-out;
		&:hover{
			color: #FFA902;
		}
	}
	p:not(:last-child){
		margin-bottom: 2rem;
	}
	p:last-child{
		margin-bottom: 4rem;
	}
	svg{
		${getColorSVG}
	}
`
export const LabelsIconContainer = styled.div`
	display: flex;		
	align-items: center;
	padding-bottom: 2rem;
	border-bottom: 1px solid #7e878e;
	svg{
		margin-right: 0.5rem;
		height: 1.75rem;
		width: 1.5rem;
	}
	h3{
		font-weight: 400;
		font-size: 1.4rem;
	}

`
export const LabelsContainer = styled.div`
	a{
		margin: 0 1.75rem 1.75rem 0;
		@media screen and(max-width: 56.25em) {
			 margin: 0 1rem 1rem 0
		}
	}

`
export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
		h3{
			font-size: 1.7rem;
			font-weight: 600;
			margin-right: 2rem;
			@media screen and(min-width: 112.5em) {
				 font-size: 1.6rem;
			}
			@media screen and(max-width: 75em) {
				font-size: 1.3rem;
			}	
		}
		a{
			display: inline-block;
			&:not(:last-child){
					margin-right: 1rem;
				}
			svg{
				height: 2rem;
				width: 2rem;
				@media screen and(max-width: 30em) {
				 	height: 1.5rem;
					width: 1.5rem;
				}
			}

		}
	}
	svg{
		${getColorSVG}
	}

` 
export const FooterIconContainer = styled.div`
	@media screen and(min-width: 112.5em) {
				 display: flex;
	}
	@media screen and(max-width: 75em) {
		display: flex;
	}
`