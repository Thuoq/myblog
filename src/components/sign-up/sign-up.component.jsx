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

	handleChange = e =>  {
		e.preventDefault(); 
		const {name , value } = e.target;
		this.setState({[name] : value})
	}

	handleSubmit  = e => {
		e.preventDefault();
		const { email , password , displayName , confirmPassword } = this.state;

		if(confirmPassword !== password) {
			return ; 
		}
		console.log(email , password , displayName , confirmPassword , "this here" )
	}
	render() {
		const {email ,  password , displayName , confirmPassword } = this.state;
		return (
			<div className="d-right">
				<h2 className="mb-md">Do You Not Have Account ? </h2>
				<form action="" className="d-right__form" onSubmit = {this.handleSubmit}>
					
					<input type="email"  	
						   placeholder="Your email:"
						   value={email}
						   name ="email" 
						   onChange={this.handleChange}
					/> 

					<input type="text" 
						   placeholder="Display name:"
						   name="displayName"	
						   value = {displayName}
						   onChange={this.handleChange}
					/>
					
					<input type="password" 
						   placeholder="Your password:"
						   name= "password"
						   value = {password}
						   onChange = {this.handleChange}
					/> 
	
					<input type="password" 
						   placeholder="Confirm Password:"
						   name= "confirmPassword" 
						   value = {confirmPassword}
						   onChange= {this.handleChange}
					 /> 
					<CustomLink as="button" type="submit" signIn="true">Sign Up</CustomLink>
				</form>
			</div>
						
		);
	}
}
export default SignUp;