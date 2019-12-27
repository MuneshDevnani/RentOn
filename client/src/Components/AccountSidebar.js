import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';

export default class AccountSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = { redirect: false }
        this.handlelogout = this.handlelogout.bind(this);
    }
    handlelogout = () => {
        localStorage.clear("token");
        localStorage.clear("user");
        this.setState({ redirect: true });
    };
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/signin' push={true} />;
        }

        return (
            <div>
                <div className id="sidebar-wrapper">
                <div   className="list-group list-group-flush col-xs-4 col-sm-4 col-md-4">
              <Link className="list-group-item list-group-item-action " to="/myaccount">Profile</Link>
			  <Link className="list-group-item list-group-item-action " to="/youritems">Your Items</Link>
              <button type="button" className="btn btn-primary list-group-item list-group-item-actio" onClick={this.handlelogout}>
                                        Logout</button>
                </div>
                </div>
            </div>
        )
    }
}
