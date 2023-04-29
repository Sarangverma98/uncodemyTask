import {useState} from 'react'
import "./scholarBanner.css"

const ScholarBanner = () => {

  const [isVisible, setIsVisible] = useState(true)

  const hideBanner = (event) => {
    setIsVisible(false)
    event.preventDefault()
  }

  return (
    <div>
      {isVisible && (
      <div className="scholar-banner">
        <p>Scholarship upto INR 35,000 Scholarship</p>
        <div className="close-icon">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span className="material-symbols-outlined" onClick={hideBanner}>close</span>
        </div>
    </div>
    )}
    </div>
  )
}

export default ScholarBanner