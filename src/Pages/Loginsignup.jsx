import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Loginsignup.css';

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          {/* CHECKBOX WITH TERMS (before Continue button) */}
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>

          {/* BUTTON LINK */}
          <Link to="/">
            <button>Continue</button>
          </Link>

          {/* LOGIN LINK */}
          <p className="loginsignup-login">
            Already have an account?
            <Link to="/login"> <span>Login Here</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
