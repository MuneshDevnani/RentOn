import React, { Component } from 'react'
import logo from ".././images/home/logo2.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header id="header">{/*header*/}
  <div className="header_top">{/*header_top*/}
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="contactinfo">
            <ul className="nav nav-pills">
              <li><Link to="#"><i className="fa fa-phone" /> +92 308 3316462</Link></li>
              <li><Link to="#"><i className="fa fa-envelope" /> info@rent-on.com</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="social-icons pull-right">
            <ul className="nav navbar-nav">
              <li><a href="https://www.linkedin.com/in/munesh-devnani-666512184/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://twitter.com/munesdevnani" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.facebook.com/munesh.k.dewnani" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://github.com/MuneshDevnani" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{/*/header_top*/}
  <div className="header-middle">{/*header-middle*/}
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="logo pull-left">
            <Link to="/"><img className="logoimg" src={logo} alt="" /></Link>
          </div>
          
        </div>
        <div className="col-sm-8">
          <div className="shop-menu pull-right">
            <ul className="nav navbar-nav">
              <li><Link to="/howtorent"><i className="fa fa-crosshairs" /> How To Rent</Link></li>
              <li><Link to="/signup"><i className="fa fa-user" /> Signup</Link></li>
              <li><Link to="/signin"><i className="fa fa-lock" /> Login</Link></li>
              <li><Link to="/myaccount"><i className="fa fa-user" /> Account</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{/*/header-middle*/}
  <div className="header-bottom">{/*header-bottom*/}
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="mainmenu pull-left">
            <ul className="nav navbar-nav collapse navbar-collapse">
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/collection">Collection</Link></li> 
              <li><Link to="/earnwithus">Earn With Us</Link></li> 
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="search_box pull-right">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  </div>{/*/header-bottom*/}
</header>{/*/header*/}

            </div>
        )
    }
}
