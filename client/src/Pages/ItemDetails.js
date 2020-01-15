import React, { Component } from 'react'
import app from '../Api/index'
import Sidebar from '../Components/Sidebar'

export default class ItemDetails extends Component {
  constructor(props) {
    super(props)

    this.id = this.props.location.search.split("=")[1]
    this.state = { item: [] ,accountInfo:[]}
    

}
componentDidMount() {
    app.Itemdetails(this.id, (items) => {
         this.setState({ item: items })
         this.setState({accountInfo:items.user.accountInfo[0]})
    })
}
    render() {
        return (
            <section>
  <div className="container">
    <div className="row">
      <Sidebar />
      <div className="col-sm-9 padding-right">
        <div className="product-details">{/*product-details*/}
        <h2 className="title text-center">Item Details</h2>
          <div className="col-sm-5">
            <div className="view-product">
              <a href><img src={this.state.item.itemImage} className="share img-responsive" alt="" /></a>
           
            </div>
           
          </div>
          <div className="col-sm-7">
            <div className="product-information">{/*/product-information*/}
            
              <h2>{this.state.item.title}</h2>
              <span>
              <span> Rs: {this.state.item.RentPrice}</span>
              </span>
              <p><b>Description:</b> {this.state.item.desc}</p>
              <span>
              <span>Owner Contact Info</span>
              </span>
              <p><b>Name: </b> {this.state.accountInfo.firstName} {this.state.accountInfo.lastName}</p>
              <p><b>Phone: </b>+92 {this.state.accountInfo.phone}</p>
            </div>
          </div>
        </div>{/*/product-details*/}
      </div>
    </div>
  </div>
</section>

        )
    }
}
