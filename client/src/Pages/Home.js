import React, { Component } from 'react'
import Item from './Item'
import app from '../Api/index'

import Sidebar from '../Components/Sidebar'
import Slider from '../Components/Slider'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }

  }
  componentDidMount() {
    app.getItems((message) => {
      console.log(message)
      this.setState({ items: message })
    })
  }
  render() {
    return (
      <div>
        <Slider />
        <section>
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-sm-9 padding-right">
                <div className="features_items">{/*features_items*/}
                  <h2 className="title text-center">Features Items</h2>
                  <Item />

                </div>{/*features_items*/}
                <div className="category-tab">{/*category-tab*/}
                  <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                      <li className="active"><a href="#computers" data-toggle="tab">COMPUTERS & LAPTOPS</a></li>
                      <li><a href="#dresses" data-toggle="tab">DESIGNER DRESSES</a></li>
                      <li><a href="#cars" data-toggle="tab">CARS</a></li>
                      <li><a href="#houses" data-toggle="tab">HOUSES</a></li>
                      <li><a href="#lehengas" data-toggle="tab">LEHENGAS</a></li>
                    </ul>
                  </div>
                  <div className="tab-content">

                    <div className="tab-pane fade active in" id="computers">
                    {this.state.items.map(items => {
                      if(items.category==='Computers & Laptops')
                    return (
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src={items.itemImage} alt="" />
                              <h2>Rs: {items.RentPrice}</h2>
                              <p>{items.title}</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
          })}
                    </div>
                    <div className="tab-pane fade" id="dresses">
                    {this.state.items.map(items => {
                      if(items.category==='Designer Dresses')
                    return (
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src={items.itemImage} alt="" />
                              <h2>Rs: {items.RentPrice}</h2>
                              <p>{items.title}</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
          })}
                      
                    </div>
                    <div className="tab-pane fade" id="cars">
                    {this.state.items.map(items => {
                      if(items.category==='Cars')
                    return (
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src={items.itemImage} alt="" />
                              <h2>Rs: {items.RentPrice}</h2>
                              <p>{items.title}</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
          })}
                      
                    </div>
                    <div className="tab-pane fade" id="houses">
                    {this.state.items.map(items => {
                      if(items.category==='Houses')
                    return (
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src={items.itemImage} alt="" />
                              <h2>Rs: {items.RentPrice}</h2>
                              <p>{items.title}</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
          })}     
                    </div>
                    
                    <div className="tab-pane fade" id="lehengas">
                    {this.state.items.map(items => {
                      if(items.category==='Lehengas')
                    return (
                      <div className="col-sm-3">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src={items.itemImage} alt="" />
                              <h2>Rs: {items.RentPrice}</h2>
                              <p>{items.title}</p>
                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
          })}     
                    </div>

                  </div>
                </div>{/*/category-tab*/}
                
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}
