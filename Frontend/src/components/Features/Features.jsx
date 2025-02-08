import React from 'react'
import './Features.css'
import arrow_icon from '../../assets/arrow_icon.jpg'
import test_skills from '../../assets/testskillsimg.png'

const Features = () => {
  return (
    <div>
        <div className="container">
            <button className='checkout-button-container'>
                <p className="NF-para">New feature</p>
                <p className="checkout-para">Check out the team dashboard</p>
                <image src={arrow_icon} className="arrow_icon" alt="arrow" />
            </button>
      <h1 className="title">Beautiful analytics to grow smarter</h1>
      <p className="description">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="buttons">
        <button className="demo-btn">Demo</button>
        <button className="sign-up-btn">Sign up</button>
      </div>   

      <div>
            <img src={test_skills} className="test_skills-img" alt="" />
      </div>   
    </div>
    </div>
  )
}

export default Features