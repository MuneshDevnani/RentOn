import React, { Component } from 'react'
import app from '../Api/index'
import {Map, InfoWindow,mapStyles, Marker, GoogleApiWrapper} from 'google-maps-react';

class Contact extends Component {
  constructor(props){
    super(props)
    this.state={name:'', email:'', subject:'', yourMessage: '',status: false,correctForm:true}

    this.handleform=this.handleform.bind(this);
  }
  handleform() {
    if(this.state.name !== '' && this.state.email !== '' && this.state.subject !== '' && this.state.yourMessage !== ''){
  app.contact(this.state.name,this.state.email,this.state.subject, this.state.yourMessage,(message) => {
    if(message.state === true) {
      this.setState({status: true,correctForm:true,message: message.message})   
  }
    })
  } else{
    this.setState({correctForm:false,status: false,message: "Please Fill The Form Correctly"})
  }
}
    render() {
        return (
            <div id="contact-page" className="container">
            <div className="bg">
              <div className="row">    		
                <div className="col-sm-12">    			   			
                  <h2 className="title text-center">Contact <strong>Us</strong></h2>  
                  <div id="gmap" class="contact-map">
                  {/* <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map> */}
 <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{ lat: 25.384702, lng: 68.362615}}
        >
          <Marker position={{ lat: 25.384702, lng: 68.362615}} />
        </Map>
					</div>  			    				    				
                </div>			 		
              </div>    	
              <div className="row">  	
                <div className="col-sm-8">
                  <div className="contact-form">
                    <h2 className="title text-center">Get In Touch</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    <div className="status alert alert-success" style={{display: 'none'}} />
                    <div id="main-contact-form" className="contact-form row">
                      <div className="form-group col-md-6">
                        <input type="text" className="form-control" required placeholder="Name" onChange={(e)=> this.setState({name: e.target.value})}/>
                      </div>
                      <div className="form-group col-md-6">
                        <input type="email" className="form-control" required placeholder="Email" onChange={(e)=> this.setState({email: e.target.value})}/>
                      </div>
                      <div className="form-group col-md-12">
                        <input type="text" className="form-control" required placeholder="Subject" onChange={(e)=> this.setState({subject: e.target.value})}/>
                      </div>
                      <div className="form-group col-md-12">
                        <textarea id="message" required className="form-control" rows={8} placeholder="Your Message Here" defaultValue={""} onChange={(e)=> this.setState({yourMessage: e.target.value})}/>
                      </div>   
                      <div className="col-md-12">
                     {this.state.status === true ? <div className="alert alert-success" role="alert">{this.state.message}</div> : ''}
                     {this.state.correctForm === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : ''}
                     </div>                     
                      <div className="form-group col-md-12">
                        <button type="submit" className="btn btn-primary pull-right" onClick={this.handleform}> Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="contact-info">
                    <h2 className="title text-center">Contact Info</h2>
                    <address>
                      <p>RentOn Inc.</p>
                      <p>Fazle Rabi Heights Civil Lines Gul Center ,Hyderabad</p>
                      <p>Hyderabad Pakistan</p>
                      <p>Mobile: +92 308 3316462</p>
                      <p>Email: info@rent-on.com</p>
                    </address>
                    <div className="social-networks">
                      <h2 className="title text-center">Social Networking</h2>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/munesh.k.dewnani" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://twitter.com/munesdevnani" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/munesh-devnani-666512184/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a>
                        </li>
                        <li>
                          <a href="https://github.com/MuneshDevnani" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>    			
              </div>  
            </div>	
          </div>
        )
    }
}

export default GoogleApiWrapper({
  googleMapURL: ("https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDC-okH9umd6gw0XdDQBsJVo2_iLBkLSEM")
})(Contact)
