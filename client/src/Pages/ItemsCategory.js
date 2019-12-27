import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import app from '../Api/index'
import Sidebar from '../Components/Sidebar'

export default class ItemCategory extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.category = this.props.location.search.split("=")[1]
    this.id = ""
    this.handleDetails = this.handleDetails.bind(this)
    this.refresh = this.refresh.bind(this)
  }
  handleDetails(id) {
    this.id = id
    this.setState({}) //This is only to call render() method again
  }
  componentDidMount() {
    app.getItems((message) => {
      this.setState({ items: message })
    })
  }
  refresh() {
    console.log("hello");
      app.getItems((message) => {
        this.setState({ items: message })
      })
  }
  componentWillUnmount() {
    this.id=''
    this.category=''
}
    render() {
        return (
            <section>
              {this.id !== "" ? <Redirect to={`/itemdetails?id=${this.id}`} /> : ""}
              
              <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-sm-9 padding-right">
                <div className="features_items">
                  <h2 className="title text-center">Collection</h2>
                  
                  {this.state.items.map(items => {
              if(items.category=== this.category )
                    return (
                      <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img className="productimg" src={items.itemImage} alt="" />
                            <h2>Rs: {items.RentPrice}</h2>
                            <p>{items.title}</p>
                            <button className="btn btn-default add-to-cart" onClick={() => this.handleDetails(items._id)}><i className="fa fa-info-circle" />Details</button>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>Rs: {items.RentPrice}</h2>
                              <p>{items.title}</p>
                              <button className="btn btn-default add-to-cart" onClick={() => this.handleDetails(items._id)}><i className="fa fa-info-circle" />Details</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
           )
          })}
                </div>
                </div>
                </div>
</div>
        
</section>

        )
    }
}
