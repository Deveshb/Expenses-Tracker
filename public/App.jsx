import React from 'react';
import { Router, Route,hashHistory, IndexRoute  } from 'react-router'
import Panel from "./components/panel.jsx"
import LoginForm from "./components/loginform.jsx"
import SignupForm from "./components/signupform.jsx"
import Admin from "./components/admin.jsx"

class App extends React.Component {
   render() 
   {
	return (
		<Router history = {hashHistory}>
			<Route path = "/" component = {Panel}  >
				<IndexRoute component = {LoginForm} />
				<Route path="signup" component={SignupForm} />
			</Route>
			<Route path = "/admin" component = {Admin}  >
				
			</Route>
		</Router>
     );
  }
}

export default App;

