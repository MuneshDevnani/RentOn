import React, { Component } from 'react'
import Slide1 from '../images/home/slide1.png'
import Slide2 from '../images/home/slide2.jpg'
import Slide3 from '../images/home/slide3.png'
import logo from '.././images/home/logo3.png'

export default class Slider extends Component {
    render() {
        return (
            <section id="slider">{/*slider*/}
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#slider-carousel" data-slide-to={0} className="active" />
                      <li data-target="#slider-carousel" data-slide-to={1} />
                      <li data-target="#slider-carousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="col-sm-6">
                          <h1>Rent<span>On</span></h1>
                          <h2>Earn With Us</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                          <img src={Slide1} className="slide img-responsive" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="col-sm-6">
                        <h1>Rent<span>On</span></h1>
                          <h2>Have An Event To Attend?<br/> Select Your Favourite Dress</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                          <img src={Slide2}  className="slide img-responsive" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="col-sm-6">
                        <h1>Rent<span>On</span></h1>
                          <h2>Save Money</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                          <img src={Slide3} className="slide img-responsive" alt="" />
                          <img src={logo} className="logoSlide" alt="" />
                        </div>
                      </div>
                    </div>
                    <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                      <i className="fa fa-angle-left" />
                    </a>
                    <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
