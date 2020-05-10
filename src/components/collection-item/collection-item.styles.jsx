import styled from 'styled-components';  

export const CategoryContainer = styled.div`
	display: flex;
	padding: 0 5rem 7rem 5rem;
	@media screen and (max-width: 75em){
		display: block;
	}  
	& > div{
		align-self: center;
	}
	img{
		height: 25rem;
	    width: 25rem;
	    border-radius: 15rem;
	    margin-right: 3rem;
	    @media screen and (max-width: 75em) {
			display: block;
		 	border-radius: 1rem;
		 	margin-bottom: 1.25rem;
		 	height: 55rem;
	    	width: 55rem;
		}
	    @media screen and (max-width: 56.25em) {
		 	
		 	border-radius: 1rem;
		 	margin-bottom: 1.25rem;
		 	height: 55rem;
	    	width: 55rem;
		}
		@media screen and (max-width: 30em) {
			height: 30rem;
	    	width: 45rem;
		}
	}
`
export const CategoryContentContainer = styled.div`
	h2{
		color: #cccccc;
		font-size: 3rem;
	}
`
export const CategoryPostContainer = styled.div`
	display: flex;
	align-items: center;
	svg{
		height: 1.5rem;
	    width: 2.25rem;
	    fill: #ccc;
	}
	span{
		color: #cccccc;
	    font-size: 1.6rem;
	    font-weight: 700;
	}
	div:not(:last-child){
		margin-right: 1.25rem;
	}
`
export const CategoryDescriptionContainer = styled.div`
	p{
		font-size: 1.6rem;
		color:#b1b8be;
		line-height: 2.25rem;
		font-family: sans-serif;
	}
`
export const CategoryReadContainer = styled.div`
	display: flex;
	align-items: center;
	svg{
		height: 2.25rem;
		width: 2.25rem;
		fill: #FFA902
	}
`