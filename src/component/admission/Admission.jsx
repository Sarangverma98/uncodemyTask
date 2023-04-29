import React from 'react'
import "./admission.css"

const Admission = () => {
  return (
    <section className="admission">
	<div className="container">
		<h2 className="section-heading text-center"> Admission <b>Process</b></h2>
		<ul>
			<li>
				<span className="count">1</span>
				<h3 className="content">Click on Apply Now</h3>
			</li>
			<li>
				<span className="count">2</span>
				<h3 className="content">Complete the application form</h3>
			</li>
			<li>
				<span className="count">3</span>
				<h3 className="content">Clear the	admission test</h3>
			</li>
			<li>
				<span className="count">4</span>
				<h3 className="content">Pay to reserve your seat</h3>
			</li>
		</ul>
	</div>
</section>  
  )
}

export default Admission