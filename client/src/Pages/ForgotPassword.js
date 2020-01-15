import React, { Component } from 'react'
import app from '../Api/index'
import {Redirect, Link} from 'react-router-dom';

export default class ForgotPassword extends Component {
    constructor(props){
        super(props)
        this.state={email:'',status: false,correctForm:true}
    
        this.handleform=this.handleform.bind(this);
      }
      handleform() {
        this.setState({correctForm:true,status: true,message: "Requesting"})
        if( this.state.email === ''){
            this.setState({correctForm:false,status: false,message: "Provide Email"})
      } else{
        app.forgotpassword(this.state.email,(message) => {
            console.log(message);
            if(message.state === true){
                this.setState({status: true,correctForm:true,message: message.message})  
            } else{
                this.setState({correctForm:false,status: false,message: message})
            } 
          })
      }
    }
    render() {
        return (
            <section id="form">
        <div className="container">
          <div className="login-form">
            <h1 className="text-center">Forgot Password!</h1>
            <div className="form-header">
              <i className="fa fa-user" />
            </div>
            <div className="form-register" id="register-form">
              <div>
                {/* {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : ''}
                {this.state.redirect === true ? <Redirect to="/accountinfo" /> : "" } */}
               {localStorage.token !== undefined ? <Redirect to="/myaccount" /> : ""}
              </div>
              <div>
                <input id="email" type="email" className="form-control" placeholder="Email Address" required onChange={(e) => this.setState({ email: e.target.value })} />
                <span className="help-block" />
              </div>
              
              <button className="btn btn-block bt-login" type="submit" onClick={this.handleform}>Reset Password</button>
            </div>
            {this.state.status === true ? <div className="alert alert-success" role="alert">{this.state.message}</div> : ''}
            {this.state.correctForm === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : ''}
                    
            <div className="form-footer">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <i className="fa fa-lock" />
                  <Link to="/signin"> Sign In </Link>
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
