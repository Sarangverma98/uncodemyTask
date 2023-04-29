import React from 'react'
import "./footer.css"
import logo from "../../images/logo-white.svg"
import fblogo from "../../images/fb.png"
import twitterlogo from "../../images/twiiter.png"
import linkedinlogo from "../../images/linkedin.png"
import youtubelogo from "../../images/youtube.png"

const Footer = () => {
  return (
    <footer>
    <div className="container">
        <div className="footer-summary">
            <div className="top-footer">
                <div className="row">
                    <div className="col-md-3">
                        <img src={logo} alt="upGrad" title="upGrad"/>
                        <div className="social-icons">
                            <img src={fblogo} alt="" />
                            <img src={twitterlogo} alt="" />
                            <img src={linkedinlogo} alt="" />
                            <img src={youtubelogo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="row">
                            <div className="col-md-5 offset-md-1">
                                <h3> Upgrad </h3>
                                <ul>
                                    <li>
                                        <a href="" target="_blank"> About </a>
                                    </li>
                                    <li>
                                        <a href="" target="_blank"> upGrad In Media</a>
                                    </li>
                                    <li>
                                        <a href="" target="_blank"> Careers </a>
                                    </li>
                                    <li>
                                        <a href="" target="_blank"> upGrad Blog </a>
                                    </li>
                                    <li>
                                        <a href="" target="_blank"> Success Stories </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <h3> Support </h3>
                                <ul>
                                    <li>
                                        <a href="" target="_blank"> Terms and Conditions </a>
                                    </li>
                                    <li>
                                        <a href="" target="_blank"> Privacy Policy </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <p>
                    Copyright © 2020.  All rights reserved.
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer