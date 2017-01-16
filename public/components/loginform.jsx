import React from 'react';
import {Link} from 'react-router'
import axios from 'axios'

class LoginForm extends React.Component {
	constructor(){
		super()
		this.state = {
			email:'',
			password:''
		}
	}
	static get contextTypes() {
		return {
	  		router: React.PropTypes.object.isRequired,
		}
	}
	login(e){
		e.preventDefault()
		let postData = {email:this.state.email,password:this.state.password}
		axios.post('/auth/login/local',postData).then((data)=>{
			this.context.router.push('/admin')
		},(err)=>{
			alert('INVALID CREDENTIALS, TRY AGAIN')
		})
	}
	changeHandler(which,e){
		this.state[which] = e.target.value
		this.setState(this.state)
	}
  	render() 
	 	{
		return (
		 	<div className="col-sm-6 col-md-6 col-md-offset-3">
				<div className="panel panel-default">
					<div className="panel-heading">
						<strong> Sign in to continue</strong>
					</div>
		   			<div className="panel-body">
						<form onSubmit={this.login.bind(this)}>
							<fieldset>
								<div className="row">
									<div className="col-sm-12 col-md-10  col-md-offset-1 ">
										<div className="form-group">
											<div className="input-group">
												<input className="form-control" placeholder="Email" name="loginname" type="text" value={this.state.email} onChange={this.changeHandler.bind(this,'email')} required/>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group">
												
												<input className="form-control" placeholder="Password" name="loginpassword" type="password" value={this.state.password} onChange={this.changeHandler.bind(this,'password')} required/>
											</div>
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-lg btn-danger" value="Sign in">LOGIN</button>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
					<div className="panel-footer ">
						 <Link to="/signup"> Sign Up  </Link>
					</div>
      	 		</div>
			</div> 
			
  
		);	
	}

}	
export default LoginForm;	
