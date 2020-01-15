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
									<h4 className="panel-title"><Link to="/category?ctg=Lehengas">Lehengas</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Designer Dresses">Designer Dresses</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Shalwar And Kameez">Shalwar And Kameez</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Mobile Phones">Mobile Phones</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Tablets">Tablets</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Tractors & Trailers">Tractors & Trailers</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Rickshaw">Rickshaw</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Trucks">Trucks</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Buses">Buses</Link></h4>
								</div>
                </div>
                <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><Link to="/category?ctg=Cars" >Cars</Link></h4>
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
                        <li><Link to="/category?ctg=Houses">Houses</Link></li>
                        <li><Link to="/category?ctg=Apartments & Flats">Apartments & Flats</Link></li>
                        <li><Link to="/category?ctg=Portions & Floors">Portions & Floors</Link></li>
                        <li><Link to="/category?ctg=Shops">Shops</Link></li>
                        <li><Link to="/category?ctg=Guest Houses">Guest Houses</Link></li>
                        <li><Link to="/category?ctg=Land & Plots">Land & Plots</Link></li>
                        <li><Link to="/category?ctg=Vacation Rentals">Vacation Rentals</Link></li>
                        <li><Link to="/category?ctg=Offices">Offices</Link></li>
                        <li><Link to="/category?ctg=Computers & Laptops">Computers & Laptops</Link></li>
                        <li><Link to="/category?ctg=LCD & LED">LCD & LED</Link></li>
                        <li><Link to="/category?ctg=Cameras">Cameras</Link></li>
                        <li><Link to="/category?ctg=Games & Entertainment">Games & Entertainment</Link></li>
                        <li><Link to="/category?ctg=Generators & UPS">Generators & UPS</Link></li>
                        <li><Link to="/category?ctg=Fridges & Freezers">Fridges & Freezers</Link></li>
                        <li><Link to="/category?ctg=Washing Machines & Dryers">Washing Machines & Dryers</Link></li>
                        <li><Link to="/category?ctg=Other Electronics">Other Electronics</Link></li>
                        <li><Link to="/category?ctg=Motorcycles">Motorcycles</Link></li>
                        <li><Link to="/category?ctg=Bicycles">Bicycles</Link></li>
                        <li><Link to="/category?ctg=Scooters">Scooters</Link></li>
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
