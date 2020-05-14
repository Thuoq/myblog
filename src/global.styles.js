import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =createGlobalStyle`
*,   
*::after,
*::before {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
}
html{
	font-size: 62.5%;
	@media screen and (min-width: 112.5em) {
		 font-size: 75%;
	}
	@media screen and (max-width: 75em) {
		font-size: 56.25%;
	}
	@media screen and (max-width: 56.25em) {
		 font-size: 50%;
	}
	@media screen and (max-width: 30em) {
		 font-size: 23%;
	}
	font-family: 'Montserrat', sans-serif;  
}                   
body{
	background-image: url("./img/bg-layout.png");
	background-size: cover;
	padding: 0 5rem;  

}
.text-center{text-align: center !important;}
.mb-sm{margin-bottom: 2rem !important;}
.mb-md{margin-bottom: 4rem !important;}
.mb-lg{margin-bottom: 6rem !important;}
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

.heading-primary{
	color: white;
	letter-spacing: 0.5rem;
	font-size: 3.5rem;
	animation: moveInLeft 2s ease-in-out;
	span{
		color: #FFA902;
	}
}
.letter-spacing{
    letter-spacing: 1.2rem
}

.paragraph{
	color: white;  
	font-size: 1.6rem;
    letter-spacing: 0.5rem; 
    animation: moveInBottom 2s ease-in-out;     
	span{
		color: #FFA902;
		font-size: 2.5rem;
		font-weight: 700;
	}   
}

`