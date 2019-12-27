import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import Item from './Item'

export default class Collection extends Component {
    render() {
        return (
            <section>
  <div className="container">
    <div className="row">
      <Sidebar />
      <div className="col-sm-9 padding-right">
        <div className="features_items">
          <h2 className="title text-center">Collection</h2>
          <Item />
          <ul className="pagination">
            <li className="active"><a href>1</a></li>
            <li><a href>2</a></li>
            <li><a href>3</a></li>
            <li><a href>»</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
}
