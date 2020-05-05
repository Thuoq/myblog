import React from 'react';
import {ReactComponent as WebDevelopment}  from '../../asset/001-web.svg'
import { ReactComponent as ArrowIcon } from '../../asset/002-arrow-pointing-right-in-a-circle.svg';
import CustomLink from '../../components/custom-link/custom-link.component';
import {MainContainer,
		MainContentContainer,
		QuoteContainer,
		AuthorContainer,
		DisplayFlex,
		IconContainer,
		ImageContainer} from './homepage.style';
const HomePage = () => (
	<div>
		<div className="text-center mb-lg">
			<h1 className="heading-primary mb-md">My name is <span>Thuong Le.</span></h1>
			<p className="paragraph">I am a <span>Web Developer
				<WebDevelopment style={{height: "4rem",
				width: "5rem"}}/> 
			</span></p>
		</div>
		<MainContainer>
			  	<MainContentContainer>
					<QuoteContainer className="mb-md">
						Never study to be successful<br/>
						Study for self efficiency.<br/>
						Don’t run behind success. <br/>
						Follow behind excellence.<br/>
						Success will come all way behind you
					</QuoteContainer>
					<AuthorContainer className="mb-md">  
		                 	- Aamir Khan from 3 Idiots
		            </AuthorContainer>
		            <DisplayFlex>
		            	<ArrowIcon   style={IconContainer}/>
		            	<CustomLink heading="true" to="/blog">Read My Blog</CustomLink>
		            </DisplayFlex>
			  	</MainContentContainer>
			  	<div className="main__video">
					<ImageContainer as="img" src="./img/laptop-1.jpg" alt="#"/>
				</div>
		</MainContainer>
	</div>
)
export default HomePage