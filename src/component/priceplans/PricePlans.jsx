import {useState} from 'react'
import "./priceplans.css"

const PricePlans = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [secondPlan, setSecondPlan] = useState(false)

    const toggleTab1 = (event) => {
        if(!tab1){
            setTab2(false)
            setTab1(true);
            
        }
        event.preventDefault();
    }

    const toggleTab2 = (event) => {
        if(!tab2){
            setTab1(false)
            setTab2(true)
        }
        event.preventDefault();
    }

    const toggleVisibility = (event) => {
        setIsVisible(!isVisible);
        event.preventDefault() 
      };

      const toggleSecondPlan = (event) => {
        setSecondPlan(!secondPlan);
        event.preventDefault();
      };

  return (
    <div>
        <div className='section'>
            <h2 className="section-heading text-center"> Pricing <b>Plans</b></h2>
        </div>
        <div className='card'>
            <div className="plan1">
                <div className='scholar'>
                    <span>Scholarship upto INR 15,000</span>
                </div>
                <div className='price'>
                    <div><span className='bold'>1.</span><span className='bold'>Pay After Placement</span></div>
                    <div className='loc'><span className='bold'>INR 48,000</span><p>Upfront Payment</p></div>
                    <div className='plus loc'><span className='bold'>+ 8% of CTC</span><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pay After Placement</p></div>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <div ><a href="#" onClick={toggleVisibility} className='link'>More Details<span class="material-symbols-outlined arrow-price">expand_more</span> </a></div>
                    <div><button className='btn-price'>Apply Now</button></div>
                </div>
                <hr />
                {isVisible && (
                    <div className="tbdata">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td >Paid at the time of enrollment</td>
                                <td >INR - 48,000</td>
                            </tr>
                            <tr>
                                <td >Pay After you get a tech job</td>
                                <td >8% of CTC</td>
                            </tr>
                            <tr>
                                <td >Monthly payments during the course</td>
                                <td >INR - 0</td>
                            </tr>
                            <tr>
                                <td >Monthly payments after starting new job</td>
                                <td >0.67% of CTC</td>
                            </tr>
                            <tr>
                                <td>Total Cost</td>
                                <td>INR 48,000 + 8% of CTC</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <span className='tax'>inclusive of all taxes</span>
                
                </div>
                )}
                
            </div>
        </div>
        <div className='card'>
            <div className="plan2">
                <div className='price2'>
                    <div><span className='bold left'>2.</span><span className='bold'>Upfront Payment</span></div>
                    <div className='loc'><span className='bold'>INR 85,000</span><p><strike>1,55,000</strike></p></div>
                    
                    <div ><a href="#" onClick={toggleSecondPlan} className='link-2'>View Plans<span class="material-symbols-outlined arrow-price">expand_more</span></a></div>
                    <div><button className='btn-price'>Apply Now</button></div>
                </div>
                <hr />
                {secondPlan && (
                    <div className="emi-cont">
                    
                    <h2 className='section-heading text-center' >Other Financing Options <b>EMI</b> </h2>
                
                <div className='tb'>
                    <div className="tab-1">
                        <div class="emi-tabs">
                                <div className='emi-part'>
                                        EMI Partners
                                </div>
                                    <ul className='emi-part-list' >
                                        <li>
                                            <a href='#' onClick={toggleTab1} className='emi-partner'>Liquiloans
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' onClick={toggleTab2} className='emi-partner'>Propelld
                                            </a>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                    {tab1 && (
                        <div className="tab-2">
                        <div class="tenure">
                            <table className='table-2'>
                                <thead>
                                    <tr>
                                        <th>Tenure (Monthly)</th>
                                        <th>Interest (Flat)</th>
                                        <th>EMI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12</td>
                                        <td>10.25</td>
                                        <td>INR - 8,269</td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>10.25</td>
                                        <td>INR - 5,769</td>
                                    </tr>
                                    <tr>
                                        <td>24</td>
                                        <td>10.25</td>
                                        <td>INR - 4,519</td>
                                    </tr>
                                    <tr>
                                        <td>36</td>
                                        <td>10.25</td>
                                        <td>INR - 3,269</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}
                    {tab2 && (
                        <div className="tab-3">
                        <div class="tenure">
                            <table className='table-2'>
                                <thead>
                                    <tr>
                                        <th>Tenure (Monthly)</th>
                                        <th>Interest (Flat)</th>
                                        <th>EMI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>13</td>
                                        <td>10.25</td>
                                        <td>INR - 8,269</td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>10.25</td>
                                        <td>INR - 5,769</td>
                                    </tr>
                                    <tr>
                                        <td>24</td>
                                        <td>10.25</td>
                                        <td>INR - 4,519</td>
                                    </tr>
                                    <tr>
                                        <td>36</td>
                                        <td>10.25</td>
                                        <td>INR - 3,269</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}
                </div>
            </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default PricePlans