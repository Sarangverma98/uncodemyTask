import React from 'react'
import "./question.css"
import img from "../../images/got-ques.png"

const Question = () => {
  return (
    <section className="got-a-ques">
    <div className="got-a-ques-summary">
        <div className="container">
            <img src={img} alt="Support" title="Support" />
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="got-a-ques-content">
                        <h2>Got a question?</h2>
                        <p>
                            Chat with our Admissions Counsellor today!
                        </p>
                        <div className="got-a-ques-btn">
                            <a href="mailto:bootcampsupport@upgrad.com" className="btn btn-default"> Write to us </a>
                            {/* <!-- <a href="javascript:void(0)" className="btn btn-success d-none d-sm-inline-flex" data-toggle="modal" data-target="#support-modal"> Call us </a>
                            <a href="tel:18002102020" className="btn btn-success d-inline-flex d-sm-none" > Call us </a> --> */}
                            <a href="" className="btn btn-default whatsapp-btn" target="_blank"> Chat With Us </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Question