import styled from 'styled-components'

export const BlogContainer = styled.div`
	display: grid; 
	grid-template-rows: repeat(4,min-content);
	grid-template-columns: repeat(4,1fr);
	@media screen and(max-width: 56.25em) {
		grid-template-columns: repeat(3,minmax(min-content,max-content));
		
	}
	height: 80vw;
	grid-gap: 5rem;
	margin-top: 8.5rem;

`
export const OverViewContainer = styled.div`
	grid-row: 1/-1;
	grid-column: 1/4;
	@media screen and(max-width: 56.25em) {
	 	grid-column: 1/3; 
	}
	& > div:not(:last-child){
		border-bottom: 1px solid #7e878e; 
	}
`