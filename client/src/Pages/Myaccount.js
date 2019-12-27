import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import app from '../Api/index'
import Sidebar from './../Components/AccountSidebar'

export default class Myaccount extends Component {
    constructor(props) {
        super(props)
        this.state = { accountInfo: [], firstName: '', lastName: '', email: '', dateOfBirth: '', phone: '', address: '', status: true, message: '', redirect: false }
    }
   
    componentDidMount() {
        if(localStorage.token !== undefined){
        app.accountInfo((message) => {
            localStorage.user = JSON.stringify(message.accountInfo)
            this.setState({ accountInfo: JSON.parse(localStorage.user) })
        })
      } 
    }

    render() {
        return (
            <div className="container">
                {localStorage.token === undefined ? <Redirect to="/signin" /> :localStorage.user === undefined || localStorage.user === "[]" ? <Redirect to="/accountinfo" /> : ""}
               
                <h2 className="title text-center">Account Information</h2>
                <Sidebar />
                    <div className="col-xs-10 col-sm-6 col-md-6">
                        <div className="well well-sm">
                        {this.state.accountInfo.map(info => {
                        return (
                            <div className="row">
                            {/* <div className="col-sm-6 col-md-4">
                             <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
                            </div> */}
                                <div className="col-sm-6 col-md-8">
                                    <h1>
                                   {info.firstName} {info.lastName}</h1>
                                    <small className="fontsize"><cite title="San Francisco, USA">{info.address} <i className="glyphicon glyphicon-map-marker">
                                    </i></cite></small>
                                    <p className="fontsize">
                                        <i className="glyphicon glyphicon-envelope" />{info.email}
              <br />
                                        <i className="glyphicon glyphicon-phone" />{info.phone}
                                        <br />
                        <i className="glyphicon glyphicon-gift" />{info.dateOfBirth.split('T')[0]}</p>
                                    
                                </div>
                            </div>
                             )
                            })}
                        </div>
                    </div>
                </div>
           
        )
    }
}
