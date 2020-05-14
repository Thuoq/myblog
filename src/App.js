import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import BlogPage from './pages/blogpage/blogpage.component';
import {GlobalStyle} from './global.styles';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser : null
		}
	}
	render() {
		return (
			<div>
				<GlobalStyle/>
					<Navigation/>
					<Switch>
						<Route exact path ="/" component = {HomePage} />
						<Route  path="/blog" component= {BlogPage}/>
						<Route exact path="/resume" component={SignInSignUpPage} />
						<Route exact path ="/signin" component = {SignInSignUpPage} />
					</Switch>
			</div>
		)
	}
}
  
export default App;
