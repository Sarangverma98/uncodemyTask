import React from 'react'
import "./projects.css"
import img1 from "../../images/projects/1.png"
import img2 from "../../images/projects/2.png"
import img3 from "../../images/projects/3.png"
import img4 from "../../images/projects/4.png"
import img5 from "../../images/projects/5.png"
import img6 from "../../images/projects/6.png"
import img7 from "../../images/projects/7.png"
import img8 from "../../images/projects/8.png"

const Projects = () => {
  return (
    <section className="projects">
    <div className="container">
        <h2 className="section-heading text-center"> Get a real world understanding through <b>industry projects</b></h2>
        <div className="swiper-container project-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img1} alt="Bookshelf" title="Bookshelf"/>
                        <h5 className="proj-title"> Bookshelf </h5>
                        <h3 className="proj-name"> Social Networking </h3>
                        <p>
                            A social networking application, like Facebook, that allows users to create a curated virtual bookshelf with reviews
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img2} alt="Entertainment" title="Entertainment" />
                        <h5 className="proj-title"> Flixxit </h5>
                        <h3 className="proj-name"> Entertainment </h3>
                        <p>
                            A video streaming web app like Netflix, Prime Video or Apple TV+
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img3} alt="ShopPlusPlus" title="ShopPlusPlus" />
                        <h5 className="proj-title"> ShopPlusPlus </h5>
                        <h3 className="proj-name"> Commerce </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img4} alt="WeThePeople"  title="WeThePeople" />
                        <h5 className="proj-title"> WeThePeople </h5>
                        <h3 className="proj-name"> Crowdfunding </h3>
                        <p>
                            A kickstarter-like crowdfunding service that lets those in need of urgent funds (such as for medical treatments), start and manage campaigns
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img5} alt="YardSale" title="YardSale" />
                        <h5 className="proj-title"> YardSale </h5>
                        <h3 className="proj-name"> Commerce </h3>
                        <p>
                            An eBay-like auction platform for old antiques and memorabilia
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img6} alt="Black" title="Black" />
                        <h5 className="proj-title"> Black </h5>
                        <h3 className="proj-name"> Productivity </h3>
                        <p>
                            A slack/Discord clone for messaging within teams in an organization
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img7} alt="Chord" title="Chord" />
                        <h5 className="proj-title"> Chord </h5>
                        <h3 className="proj-name"> Entertainment </h3>
                        <p>
                            An Apple Music or Spotify clone featuring playlists, song player and other exciting features
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="project-thumb">
                        <img className="project-img" src={img8} alt="ChatCat" title="ChatCat" />
                        <h5 className="proj-title"> ChatCat </h5>
                        <h3 className="proj-name"> Social Networking </h3>
                        <p>
                            A WhatsApp or Messenger like messaging and chatting application for the web
                        </p>
                        <ul className="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
            <div className="swiper-button-prev project-button-prev"></div>
            <div className="swiper-button-next project-button-next"></div>
        </div>

    </div>
</section>
  )
}

export default Projects