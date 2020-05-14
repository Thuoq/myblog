import React from 'react';
import CustomLink from '../custom-link/custom-link.component';
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email : "",
			password: ""
		}
	}
	render() {
		return (
			<div className="d-left">
				<h2 className="mb-md">Do You Have Account ?</h2>
				<form action="#" >
					<input className ="d-left__input" placeholder="Your Email:" id="emailsignin1" type="email"  />
					<input id="passwordsignin1" type="password"  placeholder="Your Password:" /> 
					<div>
						<CustomLink as="button" type="submit" signIn="true">Sign In</CustomLink>
						<CustomLink  as="button" type="submit" signInWithGoogle="true" >Sign In With Google</CustomLink>
					</div>
				</form>
			</div>
						
		);
	}
}
export default SignIn;