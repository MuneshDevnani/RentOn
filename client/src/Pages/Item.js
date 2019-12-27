import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import app from '../Api/index'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.id = ""
    this.handleDetails = this.handleDetails.bind(this)
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
  componentWillUnmount() {
    this.id=""
}
    render() {
        return (
            <section>
              {this.id !== "" ? <Redirect to={`/itemdetails?id=${this.id}`} /> : ""}
          {this.state.items.map(items => {
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
        
</section>

        )
    }
}
