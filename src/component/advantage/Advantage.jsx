import React from 'react'
import "./advantage.css"

const Advantage = () => {
  return (
    <section className="comparision">
    <div className="container">
    
        <h2 className="section-heading"> The upGrad <b>Advantage</b></h2>
        <div className="table-responsive">
            <table className="table-advantage table-striped custom-table">
                <thead>
                    <tr>
                        <th className="first-column"></th>
                        <th>Video Course</th>
                        <th>Bootcamps</th>
                        <th>upGrad</th>
                    </tr>
                    
                </thead>
                <tbody>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <tr>
                    
                        <td className="first-column">
                        <h3 className="title">
                            Cloud Labs
                        </h3></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                    </tr>
                    <tr>
                        <td className="first-column">
                        <h3 className="title">
                            Industry projects
                        </h3></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                    </tr>
                    <tr>
                        <td className="first-column">
                        <h3 className="title">
                            Interview Opportunity
                        </h3></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                    </tr>
                    <tr>
                        <td className="first-column">
                        <h3 className="title">
                            Career guidance sessions
                        </h3></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                    </tr>
                    <tr>
                        <td className="first-column">
                        <h3 className="title">
                            Performance Report
                        </h3></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                    </tr>
                    <tr>
                        <td className="first-column">
                        <h3 className="title">
                            MAANG instructors
                        </h3></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">close</i></td>
                        <td align="center"><i class="material-symbols-outlined">done</i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ul>
            <li>
                Cloud Labs is an intelligent immersive learning platform where you can practice your codes and receive instant feedback on areas of improvement.
            </li>
            <li>
                Interview Opportunity indicates that upGrad will be guaranteed an invitation to interview post successful completion of the progam.
            </li>
            <li>
                MAANG instructors stand for instructors from the best tech firms in the world namely Meta, Apple, Amazon, Netflix, Google and other top product companies.
            </li>
            <li>
                Performance report provides the learners with their strengths and areas of development. It also recommends thclassNameets that they need to look into to improve the areas of development.
            </li>
        </ul>
    </div>
</section>
  )
}

export default Advantage