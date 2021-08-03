import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

import videobg from '../../../assets/img/video-bg/video-1.jpg';
import playicon from '../../../assets/img/icons/play.svg';
import lines from '../../../assets/img/lines/08.png';

class Video extends Component {
    componentDidMount(){
        $('.popup-video').magnificPopup({
			type: 'iframe',
		});
    }
    render() {
        return (
            <section className="video-section bg-img-c section-gap" style={{ backgroundImage: "url(" + videobg + ")" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-8 col-md-10 order-2 order-md-1">
                            <div className="video-text">
                                <div className="section-title left-border mb-30">
                                    <span className="title-tag">Watch Videos</span>
                                    <h2 className="title">
                                        Exclusive Video Presentation <br /> About Recent Project
                                    </h2>
                                </div>
                                <p>
                                    Ranim ad minima veniam, quis nostrum exercitationem ullam corpsuscipit
                                    laboriosam, nisi ut aliquid exea commodi consequa turuis autem
                                </p>
                                <Link to="/portfolio" className="main-btn">Need Any Project</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-lg-4 col-md-2 order-1 order-md-2">
                            <div className="video-btn text-md-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <Link to="https://www.youtube.com/watch?v=fEErySYqItI" className="play-btn popup-video">
                                    <img src={playicon} alt="" />
                                    <i className="fas fa-play" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-shape">
                    <img src={lines} alt="Line" />
                </div>
            </section>
        );
    }
}

export default Video;