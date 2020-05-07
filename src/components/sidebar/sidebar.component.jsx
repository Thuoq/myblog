import React from 'react'; 
import { ReactComponent as Heart} from '../../asset/004-lover.svg';
import { ReactComponent as GitHub} from '../../asset/007-social-media.svg';
import { ReactComponent as FaceBook} from '../../asset/008-logo.svg';
import { ReactComponent as Google } from '../../asset/010-null.svg';
import {ReactComponent as Lables} from '../../asset/003-black.svg';
import {ButtonLabel} from "../custom-link/custom-link.styles";
import { Link} from 'react-router-dom';
import {PopularPostContainer,
		LabelsContainer,
		FooterContainer,
		PopularPostIconContainer,
		FooterIconContainer,
		SideBarContainer,
		LabelsIconContainer} from './sidebar.style';
const SideBar = () => (
	<SideBarContainer>
		<PopularPostContainer>
			<PopularPostIconContainer className="mb-md">
				<Heart as="svg" />
				<h3> Popular Post</h3>
			</PopularPostIconContainer>
			<p>Sharing about Programing (JS,HTML,CSS)</p>
			<p>Add about some framework JavaScript( React)</p>
			<p>Share about my life ( Personally about life)</p>
			<LabelsContainer className="mb-md">
				<LabelsIconContainer className= "mb-sm">
					<Lables as="svg"/>
					<h3>Lables</h3>
				</LabelsIconContainer>
				<ButtonLabel  to ="/blog">JavaScript</ButtonLabel>
				<ButtonLabel to ="/blog">CSS</ButtonLabel>
				<ButtonLabel to ="/blog">My Life</ButtonLabel>
				<ButtonLabel to ="/blog">React Js</ButtonLabel>
				<ButtonLabel to ="/blog">Node Js</ButtonLabel>
				<ButtonLabel to ="/blog">Study More Effective</ButtonLabel>
			</LabelsContainer>
		</PopularPostContainer>
		<FooterContainer >
			<h3>Contact Me: </h3>
			<FooterIconContainer className="footer--icon">
				<Link to ="/blog">
					<GitHub as="svg" />
				</Link>
				<Link to ="/blog">
					<FaceBook as="svg" />
				</Link>
				<Link to ="/blog">
					<Google as="svg" />
				</Link>
			</FooterIconContainer>
		</FooterContainer>
	</SideBarContainer>
)
export default SideBar;