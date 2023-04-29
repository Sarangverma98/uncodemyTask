import { useState } from 'react'
import "./FAQuestions.css"

const FAQuestions = () => {

    const [criteria, setCriteria] = useState(false)
    const [program, setProgram] = useState(false)
    const [pricng, setPricing] = useState(false)
    const [interview, setInterview] = useState(false)

    const toggleCriteria = (event) => {
        setCriteria(!criteria)
    }

    const toggleProgram = (event) => {
        setProgram(!program)
    }

    const togglePricing = (event) => {
        setPricing(!pricng)
    }

    const toggleInterview = (event) => {
        setInterview(!interview)
    }

  return (
    <div>
        <div className="section-heading text-center">
            <h2>Frequently Asked <b>Questions</b> </h2> 
        </div>
        <div className='card-ques'>
            <div className="card-head" onClick={toggleCriteria}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <div className='card-text'>Entry Criteria</div>
                {criteria && (
                    <div><span class="material-symbols-outlined">expand_less</span></div>
                )}
                {!criteria && (
                    <div><span class="material-symbols-outlined arrow">expand_more</span></div>
                )}
                
            </div>
            {criteria && (
            <div className="card-content">
                <div className="card-content-body">
                    <h4>1. What is the prerequisite to join the program?</h4>
                    <p>
                        You can only pursue the program if you are a final-year graduate student (any
                        discipline- MTech/BSc IT/MSc IT/BTech/BCA/MCA among other streams). You need to have
                        scored 50% in 10th, 12th and graduation (score up to the last semester if you are in
                        your final year). A tech background is highly preferred.
                    </p>
                    <hr />
                    <h4>2. Will I be able to do this program if I have a non-coding backgrounds?</h4>
                    <p>
                        Yes, you will be able to successfully complete this program irrespective of your
                        educational or professional background. All you need is to dedicate your time and
                        efforts to this program—attend live sessions, complete the assignments on time to
                        name a few. Please read the T&C carefully.
                    </p>
                    <hr />
                    <h4>3. Does non-tech experience count as work experience?</h4>
                    <p>
                        Yes, any form of work experience, irrespective of the roles you are currently in,
                        will be considered as work experience.
                    </p>
                    <hr />
                    <h4>4. What kind of jobs can I expect as a working professional from non-technical
                        backgrounds?</h4>
                    <p>The program will train you to apply for roles like UI Developer, Frontend Developer,
                        Full Stack Developer, Frontend Developer, Backend Developer, etc. That said, the
                        outcome entirely depends on the time you dedicate to this course.
                    </p>
                    <hr />
                    <h4>5. What is the format of the qualifying test?</h4>
                    <p>The qualifying test will check your logical reasoning and English language skills (as
                        the mode of instruction is in English).
                    </p>
                    <hr />
                    <h4>6. What if I fail the entry test?</h4>
                    <p>Not to worry. You have one more chance to reappear for the entry test.</p>
                    <hr />
                    <h4>7. What is the medium of instruction?</h4>
                    <p>Medium of instruction and program delivery is 100% English and we expect candidates
                        to know English as a mandatory language to apply for the program.</p>
                        <hr />
                    <h4>8. Can someone who has a gap after graduation and doesn’t have a job at present,
                        apply to the program?</h4>
                    <p>Yes, you can still apply for the program.</p>
                    <hr />
                    <h4>9. What if I do not have an Indian government identity proof?</h4>
                    <p>At the time of admission, having an Indian government identity is mandatory.</p>
                </div>
            </div>
            )}
        </div>

        
        <div className='card-ques'>
            <div className="card-head" onClick={toggleProgram}>
                <div className='card-text'>Program Delivery + Expected Outcomes</div>
                {program && (
                    <div><span class="material-symbols-outlined">expand_less</span></div>
                )}
                {!program && (
                    <div><span class="material-symbols-outlined arrow">expand_more</span></div>
                )}
            </div>
            {program && (
                <div className='card-content'>
                <div className="card-content-body">
                    <h4>1. How many live sessions do I have to attend?</h4>
                    <p>There would be live sessions conducted on the weekends. To successfully complete the
                        program, you need to attend at least 80% of these sessions.</p><hr />
                    <h4>2. Do I have the option to fast-track this program?</h4>
                    <p>We want all our learners to pursue the curriculum we have designed for you to gain an
                        entry into the world of full stack development. There are no shortcuts to this
                        program.</p>
                        <hr />
                    <h4>3. Can I opt for a job by myself?</h4>
                    <p>upGrad’s programs are recognized by the industry. You surely can apply to any company
                        by creating an impressive resume with industry projects.</p><hr />
                    <h4>4. Do I need to sign any documents for getting a job?</h4>
                    <p>You just need to go through our T&C and accept it to be eligible for placements.</p><hr />
                    <h4>5. Will I receive the certificate after program completion?</h4>
                    <p>Yes, you will receive the program completion certificate considering that the exit
                        criteria is met by the student as per policy.</p><hr />
                    <h4>6. Do I have to take the first job I am offered?</h4>
                    <p>No. But our obligation to get an invitation for the inteview will end with the first job offer you receive. </p><hr />
                    <h4>7. The course hours do not work for me. Can I attend classNamees in my own time?</h4>
                    <p>No. It is mandatory for students to attend lectures as per defined program schedule
                        and required to maintain 80% attendance for all live deliverables (lectures,
                        mentorship calls).</p><hr />
                    <h4>8. What is the program duration and career services period?</h4>
                    <p>Program duration is of 6 months. Career services period starts post successful
                        completion of the progam and is of 6 months duration.</p>
                </div>
            </div>
            )}
        </div>

        
        <div className='card-ques'>
            <div className="card-head" onClick={togglePricing}>
                <div className='card-text'>Pricing</div>
                {pricng && (
                    <div><span class="material-symbols-outlined">expand_less</span></div>
                )}
                {!pricng && (
                    <div><span class="material-symbols-outlined arrow">expand_more</span></div>
                )}
            </div>
            {pricng && (
                <div className='card-content'>
                <div className="card-content-body">
                    <h4>1. Can I get any special discount for this program?</h4>
                    <p>We are offering you this program at competitive rates. Hence, we are not offering any
                        discounts, however, we have a lot of financing options to support you to do this
                        program.</p>
                        <hr />
                    <h4>2. What financing options do I have?</h4>
                    <p>We have EMI options with financial institutions for flexible tenures.</p>
                    <hr />
                    <h4>3. What are the documents required for opting for an EMI?</h4>
                    <p>Each loan partner would have a different set of documentation requirements for the
                        EMI. upGrad SPOC will guide you through the admission process.</p>
                        <hr />
                    <h4>4. Are there interest or processing fee charges on EMI?</h4>
                    <p>The user will have to bear standard charges as applicable as per loan partner policy.
                    </p>
                    <hr />
                    <h4>5. If a student doesn’t get placed, will he/she be eligible for a Program fee
                        refund?</h4>
                        <p>We are confident to place all the learners after successful completion with applicable T&Cs.</p><hr />
                    <h4>6. Is there any down payment to block the seat?</h4>
                    <p>Yes, you need to pay a block amount to confirm your enrollment in the program</p>
                </div>
            </div>
            )}
        </div>

        
        <div className='card-ques'>
            <div className="card-head" onClick={toggleInterview}>
                <div className='card-text'>Interview Opportunity</div>
                {interview && (
                    <div><span class="material-symbols-outlined">expand_less</span></div>
                )}
                {!interview && (
                    <div><span class="material-symbols-outlined arrow">expand_more</span></div>
                )}
            </div>
            {interview && (
                <div className='card-content'>
                <div className="card-content-body">
                    <h4>1. How does the Interview Opportunity Program work?</h4>
                    <p className="border-bottom-0 pb-0">The Guaranteed Interview Opportunity Program provides prospective learners from partner companies with a clear path to earn an interview. Each company requires that learners complete the program requirements outlined by upGrad.
                    </p>
                    <ul>
                        <li>
                            <p>Prospective learners that have met the criteria will be provided an opportunity to interview with the partner companies.</p>
                        </li>
                        <li>
                            <p>Qualified learners should will be contacted by upGrad's placement team during the 6th month or within six months following successful program completion.</p>
                        </li>
                    </ul>
                </div>
            </div>
            )}
        </div>
         
    </div>
  )
}

export default FAQuestions