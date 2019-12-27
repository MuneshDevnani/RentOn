import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Sidebar from '../Components/AccountSidebar';
import app from '../Api/index'

export default class Wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = { item: [], status: true, message: '', redirect: false }
    this.id = ""
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(id) {
    this.id = id
    app.Itemdelete(this.id, (message) => {
     this.setState({redirect:true})
     window.location.reload();
 })
    this.setState({}) //This is only to call render() method again
  }
componentDidMount() {
    if(localStorage.token !== undefined){
    app.accountInfo((message) => {
        localStorage.item = JSON.stringify(message.item)
        this.setState({ item: JSON.parse(localStorage.item) })
    })
  } 
}

    render() {
        return (
            <section id="cart_items">
              
        <div className="container">
         <div className="breadcrumbs">
                <h2 className="title text-center">Items Posted By You</h2>
                <Sidebar />
    <div className="table-responsive cart_info col-xs-10 col-sm-8 col-md-8">
      <table className="table table-condensed">
        <thead>
          <tr className="cart_menu">
            <td className="image">Item Picture</td>
            <td className="image">Item Name</td>
            <td className="total">Rent Price</td>
            <td className="total">Remove Item</td>
            <td />
          </tr>
        </thead>
        <tbody>
        {this.state.item.map(item => {
                        return (
          <tr>
            <td className="cart_product">
              <img src={item.itemImage} alt="" />
            </td>
            <td className="cart_description">
              <h4><a href>{item.title}</a></h4>
            </td>
            <td className="cart_total">
              <p className="cart_total_price">Rs: {item.RentPrice}</p>
            </td>
            <td className="cart_delete">
              <a className="cart_quantity_delete" onClick={() => this.handleDelete(item._id)}><i className="fa fa-times" /></a>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
  </div>
</section> 

        )
    }
}
