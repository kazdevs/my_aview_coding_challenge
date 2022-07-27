import React from 'react'
import './standard.css'
import image1 from '../../Assets/Saly-42.png'
import image2 from '../../Assets/Saly-31.png'

const Standard = () => {
  return (
    <div className='standard'>
      <h2>Standard</h2>
      <div className='standard-boxes'>
        <div className='standard-box'>
          <div className='img-container'>
            <img src={image1} alt='' srcset='' />
          </div>
          <h3>Fast & Easy</h3>
          <p>
            AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on
            dubbed content.
          </p>
        </div>

        <div className='standard-box'>
          <div className='img-container'>
            <img src={image2} alt='' srcset='' />
          </div>
          <h3>Flexible</h3>
          <p>
            We offer a personalized payment plan and tailor our process to your
            needs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Standard
