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
	handleOnChange = (e) => {
		e.preventDefault();
		const {name , value} = e.target
		this.setState({[name] : value})
	}
	handelSubmit = e => {
		e.preventDefault();
		const { email , password} = this.state;
		console.log(email , password)
	}
	
	
	render() {
		const {email, password } = this.state;
		return (
			<div className="d-left">
				<h2 className="mb-md">Do You Have Account ?</h2>
				<form action="#"  onSubmit={this.handelSubmit}>
					<input 
						placeholder="Your Email:" 
						type="email"
						name = "email"
						value = {email}
						onChange = {this.handleOnChange}
						  />
					<input
					 	type="password"  
						placeholder="Your Password:" 
						name ="password"
						value = {password}
						onChange = {this.handleOnChange}/> 
					<div>
						<CustomLink 
							as="button" 
							type="submit" 
							signIn="true">Sign In</CustomLink>
						<CustomLink  
							as="button" 
							type="submit" 
							signInWithGoogle="true" >Sign In With Google</CustomLink>
					</div>
				</form>
			</div>
						
		);
	}
}
export default SignIn;