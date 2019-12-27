import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import app from '../Api/index'

export default class EarnWithUs extends Component {
    constructor(props){
        super(props)
        this.state = { title:'', 
                       RentPrice:'',
                       category:'',
                       itemImage:'',
                    //    itemImageName:'Choose Item Image…',
                    //    uploadedFile:'',
                       desc:'', 
                       message: '',
                       status: false,
                       correctForm:true,
                       redirect: false }
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.onChange=this.onChange.bind(this);
        // this.handleChange = this.handleChange.bind(this)
    }
    // onChange (e){
    //     this.setState({itemImage:e.target.files[0],itemImageName: e.target.files[0].name});  
    // }
    // handleChange(e) {
    //     e.preventDefault();
    //     this.setState({
    //       itemImage: e.target.files[0]
    //     })
    //   }
    handleSubmit () {
        if(this.state.title !== '' && this.state.RentPrice !== '' && this.state.category !== '' && this.state.itemImage !== '' && this.state.desc !== ''){
        app.postItems(this.state.title, 
                    this.state.RentPrice,
                    this.state.category, 
                    this.state.itemImage,
                    this.state.desc,
            (message) => {
                console.log(message);
              if (message.state === true) {
                this.setState({ status: true, message: message.message })
              }
            })
        } else{
                this.setState({correctForm:false,status: false,message: "Please Fill The Form Correctly"})
              }
    }
    render() {
        return (
            <div id="earnWithUs-page" className="container">
                {localStorage.token === undefined ? <Redirect to="/signin" /> : "" }
                <div className="bg">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="title text-center">Earn With <strong>Us</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="earnWithUs-form">
                                <h2 className="title text-center">Post Item For Rent</h2>
                                <div className="status alert alert-success" style={{ display: 'none' }} />
                                <div id="main-earnWithUs-form" className="earnWithUs-form row" name="earnWithUs-form">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="item name" className="form-control" required="required" placeholder="Item Name" onChange={(e) => this.setState({ title: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" name="rent" className="form-control" required="required" placeholder="Rent Price" onChange={(e) => this.setState({ RentPrice: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <div>
                                            <select id="inputState" className="form-control" onChange={(e) => this.setState({ category: e.target.value })}>
                                                <option defaultChecked>Category...</option>
                                                <option>Lehengas</option>
                                                <option>Designer Dresses</option>
                                                <option>Full Suit</option>
                                                <option>Shalwar And Kameez</option>
                                                <option>Mobile Phones</option>
                                                <option>Tablets</option>
                                                <option>Tractors & Trailers</option>
                                                <option>Rickshaw</option>
                                                <option>Trucks</option>
                                                <option>Buses</option>
                                                <option>Cars</option>
                                                <option>Houses</option>
                                                <option>Apartments & Flats</option>
                                                <option>Portions & Floors</option>
                                                <option>Shops</option>
                                                <option>Guest Houses</option> 
                                                <option>Land & Plots</option> 
                                                <option>Vacation Rentals</option> 
                                                <option>Offices</option> 
                                                <option>Computers & Laptops</option> 
                                                <option>LCD & LED</option> 
                                                <option>Cameras</option> 
                                                <option>Games & Entertainment</option> 
                                                <option>Generators & UPS</option> 
                                                <option>Fridges & Freezers</option> 
                                                <option>Washing Machines & Dryers</option> 
                                                <option>Other Electronics</option> 
                                                <option>Motorcycles</option> 
                                                <option>Bicycles</option> 
                                                <option>Scooters</option> 
                                            </select>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="form-group col-md-12">
                                    <div className="input-group">
                                  <label className="input-group-btn">
                                   <span className="form-control btn btn-primary">
                                   Choose File... <input type="file" style={{display: 'none'}} onChange={this.handleChange}/>
                                  </span>
                                  </label>
                                   <input type="text" className="form-control" readOnly value={this.state.itemImage}/>
                                  </div>
                                    </div> */}
                                     <div className="form-group col-md-12">
                                        <input type="text" name="imageurl" className="form-control" required="required" placeholder="Item Image Url" onChange={(e) => this.setState({ itemImage: e.target.value })}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea id="message" required="required" className="form-control" rows={8} placeholder="Item Details" defaultValue={""} onChange={(e) => this.setState({ desc: e.target.value })}/>
                                    </div>
                                    <div className="col-md-12">
                     {this.state.status === true ? <div className="alert alert-success" role="alert">{this.state.message}</div> : ''}
                     {this.state.correctForm === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : ''}
                     </div> 
                                    <div className="form-group col-md-12">
                                        <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}> Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="earnWithUs-info">
                                <h2 className="title text-center">User Guide</h2>
                                <address>
                                    <p>If You Want To Give Anything On Rent</p>
                                    <p>Follow These Simple Steps.</p>
                                    <p>Fill This Form Carefully.</p>
                                    <h5>Step: 1</h5>
                                    <p>Give The Expected Rent Price For A Day.</p>
                                    <h5>Step: 2</h5>
                                    <p>Select The Item Category And Subcategory Carefully.</p>
                                    <h5>Step: 3</h5>
                                    <p>Upload a clear Picture Of The Item.</p>
                                    <h5>Step: 4</h5>
                                    <p>And Simply Post It.</p>
                                    <h5>Here You Go Your Item Posted
                                        Now The Intrested Renter Will Contact You.</h5>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
