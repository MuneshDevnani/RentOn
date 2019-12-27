import React, { Component } from 'react';
import '../App.css';
import myimg from '../images/home/mine.jpg';
import sagar from '../images/home/sagar.jpg'
import shakeel from '../images/home/shakeel.jpg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="aboutus" className="container margintop">
                <div className="bg">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="title text-center">Our <strong>Mission</strong></h2>
                        </div>
                        <div className="col-sm-12 text-center aboutus">
                            <p>The mission is to improve lives by providing local communities a vibrant<br />
                                online market where people can connect with each other. On the RentOn platform,<br />
                                people can give anything on rent and also can rent used goods, clothes, cars and properties etc.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="title text-center">Our <strong>Team</strong></h2>
                        </div>
                        <div className="col-sm-12 text-center aboutus">
                            <p>We are a diverse team,each individual with a unique talent</p>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="aboutus info-pic">
                                <div className="col-md-4 ">
                                    <img className="mineimg" alt="Minepic" title="Munesh Devnani Full-stack" src={myimg} /><br />
                                    <h4 className="font-weight-bold text-center"><span>Munesh Devnani</span> CEO-RentOn inc.</h4>
                                    <p>To thrive as a CEO you must be a prudent manager and an inspiring leader.
                                    The ideal candidate will have a business mindset and will be able to see the
                                    “big picture” in a variety of settings. They will take actions to enhance the
                                    company’s cash flow while keeping the human factor in perspective. </p>
                                </div>
                                <div className="col-md-4 ">
                                    <img className="mineimg" alt="Minepic" title="Munesh Devnani Full-stack" src={sagar} /><br />
                                    <h4 className="font-weight-bold text-center"><span>Sagar Maheshwari</span> COO-RentOn inc.</h4>
                                    <p>The COO role is a key member of the senior management team, reporting only to the
                                        Chief Executive Officer (CEO). You’ll have to maintain control of diverse business
                                        operations, so we expect you to be an experienced and efficient leader. If you also
                                        have excellent people skills, business acumen and exemplary work ethics, we’d like to meet you </p>
                                </div>
                                <div className="col-md-4">
                                    <img className="mineimg" alt="Minepic" title="Munesh Devnani Full-stack" src={shakeel} /><br />
                                    <h4 className="font-weight-bold text-center"><span>Shakeel Qureshi</span> CIO-RentOn inc.</h4>
                                    <p>An excellent CIO must have a solid IT background and consistently keep up-to-date
                                        with advancements of the field. Apart from their education and experience,
                                        The goal is to ensure that information technology adds the maximum value to our
                                        company so as to facilitate the success of our business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;