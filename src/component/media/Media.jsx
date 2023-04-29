import React from 'react'
import "./media.css";
import bs from "../../images/our-media-presence-bs.svg"
import ys from "../../images/our-media-presence-your-story.svg"
import af from "../../images/our-media-presence-afaqs.svg"

const Media = () => {
  return (
    <section className='faq'>
        <div className="container">
        <div className="row-media media-presence-container">
            <div className="col-md-12">
                <h2 className="section-heading text-center">Our Media Presence</h2>
            </div>
            <div className="flex-row">
                <div className="col-md-4">
                    <a href="https://www.business-standard.com/article/companies/upgrad-launches-new-upskilling-programme-aims-to-enable-75-000-jobs-122082201006_1.html" rel="nofollow" className="media-presence-block" target="_blank">
                        <h3 className="description">upGrad launches new upskilling programme; aims to enable 75,000 jobs</h3>
                        <img src={bs} className="media-img" alt="Business Standard" title="Business Standard" height="25px" />
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://yourstory.com/2022/08/upgrads-job-enabled-courses-college-freshers-working-professionals" className="media-presence-block" rel="nofollow" target="_blank">
                        <h3 className="description">upGrad launches job-enabled courses for college freshers and working
                            professionals</h3>
                        <img src={ys} className="media-img" alt="Your Story" title="Your Story" />
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://www.afaqs.com/people-spotting/upgrad-appoints-ex-amazon-ashish-sharma-to-spearhead-its-own-branded-program-vertical" rel="nofollow" className="media-presence-block" target="_blank">
                        <h3 className="description">upGrad appoints ex-Amazon Ashish Sharma to spearhead its own-branded Program
                            Vertical</h3>
                        <img src={af} className="media-img" alt="Afaqs" title="Afaqs" />
                    </a>
                </div>
            </div>
            <div className="col-12 text-center">
                <a href="https://www.upgrad.com/media/" className="btn btn-default view-more-btn" target="_blank">View More</a>
            </div>
        </div>
        </div>
    </section>
    
  )
}

export default Media