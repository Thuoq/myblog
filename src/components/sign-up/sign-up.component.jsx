import React from 'react';
import CustomLink from '../custom-link/custom-link.component';
class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email : "",
			password: "",
			displayName: "",
			confirmPassword: ""
		}
	}
	render() {
		return (
			<div className="d-right">
				<h2 className="mb-md">Do You Not Have Account ? </h2>
				<form action="" className="d-right__form">
					
					<input type="email" id="emailsignup1" placeholder="Your email:" /> 
					
					<input type="text" id="displaynamesignup1" placeholder="Display name:"/>
					
					<input type="password" id="passwordsignup1" placeholder="Your password:"/> 
	
					<input type="password" id="passwordsignup2" placeholder="Confirm Password:"/> 
					<CustomLink as="button" type="submit" signIn="true">Sign Up</CustomLink>
				</form>
			</div>
						
		);
	}
}
export default SignUp;