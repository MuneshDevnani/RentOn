import React, { Component } from 'react'
import app from '../Api/index'
import {Redirect,Link} from 'react-router-dom'

export default class ResetPassword extends Component {
    constructor(props) {
        super(props)

        this.state={password:'',confirmpassword:'',redirect:true,status: true, message: '',correctForm:true}

        this.token = this.props.location.search.split("=")[1]
        this.state = {accountInfo:[]}
        this.handleform=this.handleform.bind(this);
    }
    componentDidMount() {
        app.resetPage(this.token,(message) => {
         this.setState({accountInfo:message.accountInfo[0]})
        })
    }
    handleform() {
      if(this.state.password === this.state.confirmpassword){
        app.resetPassword(this.token,this.state.password,(message) => {
          if(message === 'Password Updated'){
            this.setState({ redirect: false})
          }
        })
      } else{
        this.setState({ status: false, message: "Password Dosen't Matched" })
      }

    }
    render() {
        return (
            <section id="form">
            <div className="container">
              <div className="login-form">
                <h1 className="text-center">Reset Your Password!</h1>
                <div className="form-header">
                  <h3>Hello Dear <b>{this.state.accountInfo.firstName}</b> Please Type Your New Password</h3>
                </div>
                <div className="form-register" id="register-form">
                  <div>
                  {this.state.redirect === false ? <Redirect to="/signin" /> : ""} 
                   {localStorage.token !== undefined ? <Redirect to="/myaccount" /> : ""}
                  </div>
                  <div>
                    <input id="password" type="password" className="form-control" placeholder="New Password" required onChange={(e) => this.setState({ password: e.target.value })} />
                    <span className="help-block" />
                  </div>
                  <div>
                    <input id="confirmpassword" type="password" className="form-control" placeholder="Confirm Password" required onChange={(e) => this.setState({ confirmpassword: e.target.value })} />
                    <span className="help-block" />
                  </div>
                  
                  <button className="btn btn-block bt-login" type="submit" onClick={this.handleform}>Reset Password</button>
                </div>
                {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : ''}
               
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
