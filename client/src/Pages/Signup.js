import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import app from '../Api/index'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '', confirm: '', status: true, message: '', redirect: false }

    this.handleform = this.handleform.bind(this);
  }

  handleform() {
    if(this.state.email !== '' && this.state.password !== '' && this.state.confirm !== '' ){
    if (this.state.password === this.state.confirm) {
      //Insert fetch() code here
      app.signup(this.state.email, this.state.password,
        (message) => {
          if (message.state === false) {
            this.setState({ status: false, message: message.message })

          } else {
            localStorage.token = (message.token)
            this.setState({ status: true, redirect: true })
          }
        })
    }
    else {
      this.setState({ status: false, message: "Password Dosen't Matched" })
    }
  }else{
    this.setState({ status: false, message: "Fields can not be empty" })
  }
  }
  render() {
    return (
      <section id="form">
        <div className="container">
          <div className="login-form">
            <h1 className="text-center">New User Signup!</h1>
            <div className="form-header">
              <i className="fa fa-user" />
            </div>
            <div className="form-register" id="register-form">
              <div>
                {/* {this.state.redirect === true ? <Redirect to="/accountinfo" /> : "" } */}
               {localStorage.token !== undefined ? <Redirect to="/myaccount" /> : ""}
              </div>
              <div>
                <input id="email" type="email" className="form-control" placeholder="Email address" required onChange={(e) => this.setState({ email: e.target.value })} />
                <span className="help-block" />
              </div>
              <div>
                <input id="password" type="password" className="form-control" placeholder="Password" required onChange={(e) => this.setState({ password: e.target.value })} />
                <span className="help-block" />
              </div>
              <div>
                <input id="confirm_password" type="password" className="form-control" placeholder="Confirm Password" required onChange={(e) => this.setState({ confirm: e.target.value })} />
                <span className="help-block" />
              </div>
              <button className="btn btn-block bt-login" type="submit" onClick={this.handleform}>Sign Up</button>
            </div>
            {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : ''}
               
            <div className="form-footer">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <i className="fa fa-lock" />
                  <Link to="/forgotpassword"> Forgot password? </Link>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                  <i className="fa fa-check" />
                  <Link to="/signin"> Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
