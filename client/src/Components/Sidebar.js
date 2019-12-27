import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import flayer from '.././images/home/girl1.jpg'


export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    
  }
    render() {
        return (
          
            <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Category</h2>
              <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Lehengas</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Designer Dresses</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Shalwar And Kameez</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Mobile Phones</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Tablets</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Tractors & Trailers</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Rickshaw" onClick={this.refresh}>Rickshaw</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Trucks</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Buses</a></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Cars" onClick={this.refresh}>Cars</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordian" href="#More">
                        <span className="badge pull-right"><i className="fa fa-plus" /></span>
                        More
                      </a>
                    </h4>
                  </div>
                  <div id="More" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li><a href="#">Houses</a></li>
                        <li><a href="#">Apartments & Flats</a></li>
                        <li><a href="#">Portions & Floors</a></li>
                        <li><a href="#">Shops</a></li>
                        <li><a href="#">Guest Houses</a></li>
                        <li><a href="#">Land & Plots</a></li>
                        <li><a href="#">Vacation Rentals</a></li>
                        <li><a href="#">Offices</a></li>
                        <li><a href="#">Computers & Laptops</a></li>
                        <li><a href="#">LCD & LED</a></li>
                        <li><a href="#">Cameras</a></li>
                        <li><a href="#">Games & Entertainment</a></li>
                        <li><a href="#">Generators & UPS</a></li>
                        <li><a href="#">Fridges & Freezers</a></li>
                        <li><a href="#">Washing Machines & Dryers</a></li>
                        <li><a href="#">Other Electronics</a></li>
                        <li><a href="#">Motorcycles</a></li>
                        <li><a href="#">Bicycles</a></li>
                        <li><a href="#">Scooters</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>{/*/category-products*/}
                            
                <img src={flayer} alt="" />
              
            </div>
          </div>
        )
    }
}
