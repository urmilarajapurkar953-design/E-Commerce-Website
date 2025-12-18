import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="https://cdn-icons-png.flaticon.com/128/1162/1162499.png" alt="" />
            <p>UrbanThreads</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
            <div className='footer-icon-container'>
                <img src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png" alt="" />
            </div>
            <div className='footer-icon-container'>
                <img src="https://cdn-icons-png.flaticon.com/128/145/145808.png" alt="" />
            </div>
            <div className='footer-icon-container'>
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @2025 - All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
