import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import app from '../Api/index';

export default class Signin extends Component {
  constructor(props){
    super(props)
    this.state={email:'', password:'',status: true,redirect: false }

    this.handleform=this.handleform.bind(this);
  }
  handleform() {
    if(this.state.email !== '' && this.state.password !== ''){
    app.login(this.state.email, this.state.password,(message) => {
    console.log(message);
    if(message.state === false) {
        this.setState({status: false,message: message.message})  
    } else {
      localStorage.user=(this.state.email)
        localStorage.token=(message.token)
        this.setState({status: true,redirect: true})    
    }
    })
  }else{
    this.setState({ status: false, message: "Fields can not be empty" })
  }
  }
  componentDidMount(){
    // if(localStorage.token != 'undefined'){

    // }
    
  }
    render() {
        return (
            <section id="form">{/*form*/}
    <div className="container">
  <div className="login-form">
    <h1 className="text-center">Login to your account</h1>
    <div className="form-header">
      <i className="fa fa-user" />
    </div>
    <div id="login-form" className="form-signin" >
    {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : '' }
    {localStorage.token !== undefined  ? <Redirect to="/myaccount" /> : "" }
      <input name="email" id="email" type="email" className="form-control" required="required" placeholder="Email address" onChange={(e)=> this.setState({email: e.target.value})}/> 
      <input name="password" id="password" type="password" className="form-control" required="required" placeholder="Password" onChange={(e)=> this.setState({password: e.target.value})}/> 
     <button className="btn btn-block bt-login" type="submit" onClick={this.handleform}>Sign in</button>
    </div>
    <div className="form-footer">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6">
          <i className="fa fa-lock" />
          <Link to="/forgotpassword"> Forgot password? </Link>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6">
          <i className="fa fa-check" />
          <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  </div>
</div>

</section>

        )
    }
}
