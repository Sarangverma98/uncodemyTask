import {useState, useEffect} from 'react'
import "./Placement.css"
import img1 from "../../images/cny/accenture.png"
import img2 from "../../images/cny/adobe.png"
import img3 from "../../images/cny/amazon.png"
import img4 from "../../images/cny/axis.png"
import img5 from "../../images/cny/capgemini.png"
import img6 from "../../images/cny/career360.png"
import img7 from "../../images/cny/citius.jpg"
import img8 from "../../images/cny/cognizant.png"
import img9 from "../../images/cny/deloitte.png"
import img10 from "../../images/cny/ey.png"
import img11 from "../../images/cny/flipkart.jpg"
import img12 from "../../images/cny/fractal.png"
import img13 from "../../images/cny/genpact.png"
import img14 from "../../images/cny/groupM.jpg"
import img15 from "../../images/cny/ibm.png"
import img16 from "../../images/cny/kantar.png"
import img17 from "../../images/cny/kpmg.svg"
import img18 from "../../images/cny/publicis.jpg"
import img19 from "../../images/cny/tcqo.png"
import img20 from "../../images/cny/techm.png"
import img21 from "../../images/cny/uber.png"
import img22 from "../../images/cny/ugam.png"
import img23 from "../../images/cny/wipro.png"
import img24 from "../../images/cny/zivame.png"
import img25 from "../../images/cny/zs.png"

const Placement = () => {

    const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
      }, []);

  return (
    <section className="course-summary">
        <div className="container">
            <div className="floating-strip">
                <div className="top-course-summary">
                    <div className="row-parent">
                        <div className="col-md-5">
                            <h2 className="section-heading"><b>Placement</b> stats</h2>
                        </div>
                        <div className="col-md-7">
                            <div className="row-child">
                                <div className='item'>
                                    <div className="col-md-6 col-6 ">
                                        <div className="course-summary-list">
                                            <h3><b>70000+</b> Career transitions </h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 ">
                                        <div className="course-summary-list">
                                            <h3><b>44%</b> Average Salary Hike </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="col-md-6 col-6 ">
                                        <div className="course-summary-list">
                                            <h3><b>12LPA</b> Exciting salaries </h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 ">
                                        <div className="course-summary-list">
                                            <h3><b>650+</b> Hiring Partners </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="companies-summary">
                    <h2>
                        Companies that trust upGrad learners
                    </h2>
                    
                    <div className="slideshow-container">
                        {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={`slideshow-image ${index === currentImage ? 'active' : ''}`}
                        />
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Placement