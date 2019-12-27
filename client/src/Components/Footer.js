import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
  <div className="footer-widget">
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <div className="single-widget">
            <h2>Service</h2>
            <ul className="nav nav-pills nav-stacked">
              <li><Link to="/onlinehelp">Online Help</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/howtorent">How To Rent</Link></li>
              <li><Link to="/earnwithus">Earn with us</Link></li>
              <li><Link to="/faqs">FAQ’s</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="single-widget">
            <h2>Quock Shop</h2>
            <ul className="nav nav-pills nav-stacked">
              <li><Link to="#">T-Shirt</Link></li>
              <li><Link to="#">Mens</Link></li>
              <li><Link to="#">Womens</Link></li>
              <li><Link to="#">Kids</Link></li>
              <li><Link to="#">Shoes</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="single-widget">
            <h2>Policies</h2>
            <ul className="nav nav-pills nav-stacked">
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Privecy Policy</Link></li>
              <li><Link to="#">Return Policy</Link></li>
              <li><Link to="#">Help Center</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="single-widget">
            <h2>About RENT<span style={{color:"orange"}}>On</span></h2>
            <ul className="nav nav-pills nav-stacked">
              <li><Link to="#">Company Information</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Who we are</Link></li>
              <li><Link to="#">Copyright</Link></li>
              <li><Link to="#">About us</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3 col-sm-offset-1">
          <div className="single-widget">
            <h2>About Renter</h2>
            <form action="#" className="searchform">
              <input type="text" placeholder="Your email address" />
              <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
              <p>Get the most recent updates from <br />our site and be updated your self...</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <p className="pull-left">Copyright © 2019 Rent On Inc. All rights reserved.</p>
        <p className="pull-right">Designed by <span><a target="_blank" href="https://muneshdevnani.herokuapp.com">Munesh Devnani</a></span></p>
      </div>
    </div>
  </div>
</footer>{/*/Footer*/}

            </div>
        )
    }
}
