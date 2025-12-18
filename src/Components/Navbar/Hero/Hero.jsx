import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrival Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src="" alt="" />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src="https://cdn-icons-png.flaticon.com/128/724/724927.png" alt="" />
        </div>
      </div>
       <div className="hero-right">
        <img src="https://plus.unsplash.com/premium_photo-1707928073617-c377918fa97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8" alt="" />
       </div>
    </div>
  )
}

export default Hero
