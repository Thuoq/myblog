import styled from 'styled-components'

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