import React, { Component } from 'react'
import recommend1 from '.././images/home/recommend1.jpg'
import recommend2 from '.././images/home/recommend2.jpg'
import recommend3 from '.././images/home/recommend3.jpg'

export default class RecommendedItems extends Component {
    render() {
        return (
            <div className="recommended_items">{/*recommended_items*/}
            <h2 className="title text-center">recommended items</h2>
            <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="item active">
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={recommend1} alt="" />
                          <h2>Rs: 250</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={recommend2} alt="" />
                          <h2>Rs: 300</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={recommend3} alt="" />
                          <h2>Rs: 200</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={recommend1} alt="" />
                          <h2>Rs: 400</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={recommend2} alt="" />
                          <h2>Rs: 500</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={recommend3} alt="" />
                          <h2>Rs: 200</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-info-circle" />Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        )
    }
}
