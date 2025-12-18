import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Emial</h1>
        <p>Subcribe To Our Newletter And Stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subcribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
