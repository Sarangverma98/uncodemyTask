import React from 'react'
import "./curriculam.css"

const Curriculam = () => {

    function showDiv(id) {
        var element = document.getElementById(id);
        element.style.display = "block";
      }
      
      function hideDiv(id) {
        var element = document.getElementById(id);
        element.style.display = "none";
      }

  return (
    <section className="curriculum">
    <div className="container">
        <h2 className="section-heading text-center"> Learn with a world className <b>curriculum</b></h2>
        <div className="tabs-list">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active step-01" data-toggle="tab" href="#module-1" role="tab" aria-selected="true">Fundamentals</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link step-02" data-toggle="tab" href="#module-2" role="tab"  aria-selected="false" onClick={()=>{showDiv("module-2"); hideDiv("module-1")}}>Frontend Development</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link step-03" data-toggle="tab" href="#module-3" role="tab" aria-selected="false" onClick={()=>{showDiv("module-2"); hideDiv("module-1")}}>Data Structures</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link step-04" data-toggle="tab" href="#module-4" role="tab" aria-selected="false" onClick={()=>{showDiv("module-2"); hideDiv("module-1")}}>Backend Development</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link step-05" data-toggle="tab" href="#module-5" role="tab" aria-selected="false" onClick={()=>{showDiv("module-2"); hideDiv("module-1")}}>Testing &amp; Deployment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link step-06" data-toggle="tab" href="#module-6" role="tab" aria-selected="false" onClick={()=>{showDiv("module-2"); hideDiv("module-1")}}>Level Up Your Skills</a>
                </li>
            </ul>
            <div id="myProgressbar" className="progress">
                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade active show" id="module-1" role="tabpanel">
                    <div className="curriculum-content-summary">
                        <span className="module-badge"> Module-1 </span>
                        <div className="curi-title">
                            <h3> Fundamentals </h3>
                            <span> Week 1-3 </span>
                        </div>
                        <p>
                            This module helps you take your first steps towards becoming a successful coder. You will be introduced to computer programming as you learn about programming languages, how computer programs work, and how to build programming logic using Pseudocode.
                        </p>
                        <div className="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                    Introduction to Programming
                                </li>
                                <li>
                                    Syntax and Pseudocode
                                </li>
                                <li>
                                    Introduction to Fullstack Development
                                </li>
                                <li>
                                    Linux Essentials
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="tab-pane fade" id="module-2" role="tabpanel">
                    <div className="curriculum-content-summary">
                        <span className="module-badge"> Module-2 </span>
                        <div className="curi-title">
                            <h3> Frontend Development </h3>
                            <span> Week 4-13 </span>
                        </div>
                        <p>
                            The frontend represents the user-facing application, which aims to provide a stellar user experience. This module will begin with an introduction to source code management using Git and GitHub. HTML5 and CSS3 will help you build user interfaces and web pages. To build such user-facing applications, you will learn React, an immensely popular JavaScript library by Meta and loved by some of the biggest product companies worldwide.
                        </p>
                        <div className="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                    Source & Version Control using Git & GitHub
                                </li>
                                <li>
                                    Mastering HTML5 & CSS3
                                </li>
                                <li>
                                    Mastering JavaScript (ECMAScript 2020+)
                                </li>
                                <li>
                                    Working with Remote Data &amp; Writing Modular Code
                                </li>
                                <li>
                                    Modern JavaScript using Babel
                                </li>
                                <li>
                                    Working with Parcel &amp; Webpack module bundlers
                                </li>
                                <li>
                                    Building Single Page Applications using React
                                </li>
                                <li>
                                    Work with the incredible Hooks API
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="module-3" role="tabpanel">
                    <div className="curriculum-content-summary">
                        <span className="module-badge"> Module-3 </span>
                        <div className="curi-title">
                            <h3> Data Structures using JavaScript </h3>
                            <span> Week 14-15 </span>
                        </div>
                        <p>
                            Data structures represent mechanisms for storing and processing data in computer programming. Your ability to identify, pick and utilise the right structure is not only essential for becoming a better coder, but is also a required ability in job interviews. With that in mind, you will learn to work with various data structures using JavaScript in this phase of the program.
                        </p>
                        <div className="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                    Master the intricacies of Arrays, Objects, Stacks, Queues, Linked Lists, Hash Tables, Graphs, Trees and more data structures
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="module-4" role="tabpanel">
                    <div className="curriculum-content-summary">
                        <span className="module-badge"> Module-4 </span>
                        <div className="curi-title">
                            <h3> Backend Development </h3>
                            <span> Week 16-19 </span>
                        </div>
                        <p>
                            Discover Node.js, the incredibly popular JavaScript runtime that enables you to build everything from command-line tools to web servers and APIs. You will then work with Express, a popular framework that simplifies building Node.js applications. Work with the MongoDB database engine to learn about operations, data aggregation pipelines, and more. Go deeper into RESTful API design as you learn more about the OpenAPI Spec and the use of Swagger for API documentation.
                        </p>
                        <div className="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                    Learning Node.js
                                </li>
                                <li>
                                    Mastering the Express framework
                                </li>
                                <li>
                                    Learning MongoDb
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="module-5" role="tabpanel">
                    <div className="curriculum-content-summary">
                        <span className="module-badge"> Module-5 </span>
                        <div className="curi-title">
                            <h3> Testing &amp; Deployment</h3>
                            <span> Week 20-21 </span>
                        </div>
                        <p>
                            Learn about software testing which enables you to write code that tests and validates your application code to ensure it behaves as expected under various scenarios. Learn to deploy your Fullstack applications on the cloud with major providers such as AWS Elastic Beanstalk, Azure, Netlify, and Heroku.
                        </p>
                        <div className="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                    Designing & Building RESTful APIs
                                </li>
                                <li>
                                    Test-Driven Development using Jest, Puppeteer & Cypress.io
                                </li>
                                <li>
                                    Deploying the app on the cloud
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="module-6" role="tabpanel">
                    <div className="curriculum-content-summary">
                        <span className="module-badge"> Module-6 </span>
                        <div className="curi-title">
                            <h3> Level Up Your Skills</h3>
                            <span> Week 22-27 </span>
                        </div>
                        <p>
                            The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill, especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence.
                        </p>
                        <p>
                            In this final module, you will learn about essential algorithms that are needed to efficiently solve critical programming challenges and problems, not only in day-to-day life but also during job interviews. You also get access to self-paced content on the Agile and SCRUM process management frameworks to ensure you're comfortable working in a professional environment.
                        </p>
                        <div className="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                    Mastering System Design
                                </li>
                                <li>
                                    Algorithms using JavaScript
                                </li>
                                <li>
                                    Agile &amp; Scrum for Developers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curi-btn text-center">
                <a href="javascript:void(0)" className="btn btn-default" data-toggle="modal" data-target=".download-modal"> <img src="images/download.svg" alt="Download" title="Download" /> Download Curriculum </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Curriculam