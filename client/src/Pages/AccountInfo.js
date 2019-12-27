import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import app from '../Api/index'

export default class AccountInfo extends Component {
    constructor(props){
        super(props)
        this.state = { firstName:'', 
                       lastName:'', 
                       email: '',
                       dateOfBirth:'', 
                       phone: '', 
                       address: '', 
                       message: '', 
                       redirect: false }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit () {
        app.account(this.state.firstName, 
                    this.state.lastName,
                    this.state.email, 
                    this.state.dateOfBirth,
                    this.state.phone, 
                    this.state.address,
            (message) => {
                console.log(message);
                
              if (message.state === false) {
                this.setState({ message: message.message })
                
    
              } else {
                this.setState({ redirect: true ,message: message.message})
                window.location.reload();
              }
            })
    }
    render() {
        return (
            <div id="earnWithUs-page" className="container">

                {this.state.redirect===true ? <Redirect to='/myaccount'/> : localStorage.token === undefined ? <Redirect to="/signin" /> : localStorage.user !== undefined && localStorage.user !== "[]" ? <Redirect to="/myaccount" /> : ""}
                <div className="bg">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="title text-center">Account <strong>Information</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="accountInfo-form ">
                                <div className="status alert alert-success" style={{ display: 'none' }} />
                                <div id="main-accountInfo-form" className="accountInfo-form row" name="accountInfo-form" method="post">
                                    <div className="form-group col-md-6 ">
                                        <input type="text" className="form-control" required="required" placeholder="First Name" onChange={(e) => this.setState({ firstName: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-6 ">
                                        <input type="text" className="form-control" required="required" placeholder="Last Name" onChange={(e) => this.setState({ lastName: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-6 ">
                                        <input type="email" className="form-control" required="required" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                    <input type="number" className="form-control" required="required" placeholder="Phone Number" onChange={(e) => this.setState({ phone: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                    <abbr title="Date Of Birth">
                                        <input type="date" className="form-control" required="required" placeholder="Date Of Birth" onChange={(e) => this.setState({ dateOfBirth: e.target.value })}/>
                                    </abbr> 
                                    </div>
                                    <div className="form-group col-md-12">
                                    <input type="address" className="form-control" required="required" placeholder="Address" onChange={(e) => this.setState({ address: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}> Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
