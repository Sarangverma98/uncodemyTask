import React from 'react'
import "./certificate.css"
import img from "../../../images/upGrad-GGU-Insofe-Certificate-2.png"


const Certificate = () => {
  return (
    <section class="overview">
	<div class="container-cert">
		<h2 class="section-heading"> Get certificate of completion from Golden Gate University, California</h2>
		<div class="editor-content text-center">
			<img class="img-fluid" src={img} alt="Certificate" title="Certificate" />
		</div>
		
	</div>
</section>
  )
}

export default Certificate