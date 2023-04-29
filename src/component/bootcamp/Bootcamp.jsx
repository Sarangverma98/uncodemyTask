import React from "react";
import "./bootcamp.css";

const Bootcamp = () => {
  return (
            <section className="benefits">
                <div className="container-boot">
                    <h2 className="section-heading-boot">
                        {" "}
                        This Bootcamp Will Uplift Your Career. <b>Here’s How.</b>
                    </h2>
                    <div className="benefits-summary">
                        <div className="row-camp">
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0"
                            />
                            <div className="item">
                                <div className="col-md-4 col-6">
                                    <div className="benefit-thumb">
                                        <span class="material-symbols-outlined">schedule</span>
                                        <h3> 100+ hours learning </h3>
                                        <p>
                                            Learn from world className MAANG instructors and become job
                                            ready
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="benefit-thumb">
                                        <span class="material-symbols-outlined">
                                            sync_saved_locally
                                        </span>
                                        <h3> Outcome driven pedagogy </h3>
                                        <p className="h-auto">
                                            Career coaching includes mock interviews, CV, LinkedIn,
                                            Github and soft skills training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-4 col-6">
                                    <div className="benefit-thumb">
                                        <span class="material-symbols-outlined">desktop_windows</span>
                                        <h3> Immersive learning platform </h3>
                                        <p>
                                            Get reports on strengths and weaknesses on tech skills
                                            through coding on CloudLabs
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    <div class="benefit-thumb">
                                        <span class="material-symbols-outlined">thumb_up</span>
                                        <h3> 10X more employable</h3>
                                        <p>
                                            Get access to 10X more job opportunities and get ahead of
                                            your peers
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-4 col-6">
                                    <div className="benefit-thumb">
                                        <span class="material-symbols-outlined">menu_book</span>
                                        <h3> 20+ projects and case studies </h3>
                                        <p>
                                            Learn over 20 tools and technologies through real life
                                            industry projects
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="benefit-thumb">
                                        <span class="material-symbols-outlined">
                                            supervisor_account
                                        </span>
                                        <h3> 16+ hours of group career coaching </h3>
                                        <p>
                                            Become trained to join the workforce through interactions
                                            with tech industry leaders
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <div className="text-center">
          <a href="" className="btn-boot btn-default-boot whatsapp-btn" target="_blank">
            {" "}
            <i className="icons icon-whatsapp" title="Chat With Us"></i> Chat
            With Us{" "}
          </a>

          <a href="" className="btn-success-boot">
            {" "}
            Call us{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bootcamp;
