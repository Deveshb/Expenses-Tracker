import React from 'react';
import {Link} from 'react-router'
import axios from 'axios'

class SignupForm extends React.Component {
	constructor(){
		super()
		this.state = {
			name:'',
			email:'',
			password:'',
		}
	}
	static get contextTypes() {
		return {
	  		router: React.PropTypes.object.isRequired,
		}
	}
	signup(e){
		e.preventDefault()
		let postData = {email:this.state.email,password:this.state.password,name:this.state.name,isAdmin:false}
		console.log(postData)
		axios.post('/auth/signup/local',postData).then((data)=>{
			this.context.router.push('/')
		},(err)=>{
			alert('ERROR PLEASE TRY AGAIN')
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
					<strong> Sign up to continue</strong>
				</div>
   					<div className="panel-body">
					<form onSubmit={this.signup.bind(this)}>
						<fieldset>						
							<div className="row">
								<div className="col-sm-12 col-md-10  col-md-offset-1 ">
									<div className="form-group">
										<div className="input-group">
											
											<input className="form-control" placeholder="Username" name="signupName" type="text" value={this.state.name} onChange={this.changeHandler.bind(this,'name')} required/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											
											<input className="form-control" placeholder="Email" name="signupEmail" type="text" value={this.state.email} onChange={this.changeHandler.bind(this,'email')} required/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											
											<input className="form-control" placeholder="Password" name="signuppassword" type="password" value={this.state.password} onChange={this.changeHandler.bind(this,'password')} required/>
										</div>
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-lg btn-danger">Sign up</button>
									</div>
								</div>
							</div>
						</fieldset>
					</form>
				</div>    
					<div className="panel-footer ">
						 <Link to="/"> Login </Link>
					</div>
      		</div>
		</div>
		);	
	}

}	
export default SignupForm;	