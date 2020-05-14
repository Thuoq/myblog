import styled from 'styled-components';

export const  SignInSignUpContainer = styled.div`
	display: flex;
	justify-content:space-around;
	& > div {
		padding: 2rem ;
	}
	& > div h2 {
		font-size: 3.2rem;
		color: white;
		font-weight: 400;
		transition: 0.2s all ease-in-out;
		 padding-left: 1.5rem;
		&:hover{
			color:#FFA902 ;
			cursor: pointer;
		}
	}

	& > div form div {
		display: flex;
		justify-content:space-between;
	}
	& > div form input {
		width: 90%;
	    border: none;
	    background-color: transparent;
	    border-bottom: 3px solid #ccc;
	    padding: 1.5rem 2rem;
	    font-size: 2rem;
	    font-family: inherit;
	    display: block;
	    outline: none;
	    color: #ccc;
	    transition: all .3s;
	    &:focus:invalid {
            border-bottom: 3px solid #FFA902;
        }
        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem rgba(0,0,0, .1);
            border-bottom:  3px solid cornflowerblue;
        }
        &::-webkit-input-placeholder {
            color: #ccc;
            font-size: 1.6rem;
        }
	}
`