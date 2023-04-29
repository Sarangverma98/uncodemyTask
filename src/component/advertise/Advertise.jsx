import React from 'react'
import "./advertise.css"
import dwn from "../../images/download.svg"
import bnrthumb from "../../images/bnr-thumb.png"
import bnrplay from "../../images/bnr-play.png"

const Advertise = () => {
  return (
    <section className="banner">
    <div className="container-ad">
        <div className="breadcrumb-share">
            <ul className="breadcrumb clearfix">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="index.html">Bootcamps</a>
                </li>
                <li>
                    <span className="d-none d-sm-block">Full Stack Software Development Bootcamp </span>
                    
                </li>
            </ul>
        </div>
        <div className="banner-summary">
            <div className="row">
                <div className="col-md-6">
                    <div className="banner-summary-content">
                        <h2> Job Assistance with Interview Opportunity* </h2>
                        <h1><span>Full Stack</span> Software Development Bootcamp </h1>
                        <p>
                            Earn upto 12LPA on Course Completion - Book Your Seat With As Low As <span>INR 5,000/- only</span>
                            <strong>Duration of the program- 6 months</strong>
                            <span className="next-cohort-text">Next Cohort Starts: 01 May, 2023</span>
                            <br />
                            <span className="limit-text">Limited no. of seats available</span>
                        </p>
                        <div className="d-block d-sm-none banner-btns">
                        <a href="" className="btn btn-default"  > <img src={dwn} alt="Download"  title="Download"/> Download Curriculum </a>
                        <a href="" className=" btn-success-ad"  > Register for Free Demo </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bnr-img-summary">
                        <img className="bnr-img" src={bnrthumb} alt="Full Stack Software Development Bootcamp" title="Full Stack Software Development Bootcamp"/>
                        <a href="" className="video-btn" data-src="https://bootcamps.upgrad.com/bootcamps/videos/FSD_India_course_intro_video_upgrad.mp4"> <span> <img src={bnrplay} alt="Play Video" title="Play Video" /> </span> </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Advertise