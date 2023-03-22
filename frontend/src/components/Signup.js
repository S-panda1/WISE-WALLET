import React from 'react'
import { Link } from "react-router-dom";
import '../css/signup.css';

export default function Signup(props) {
  return (
    <>
      <div className="main-body">
        <div className="top-logo">
          <p className="name">Wise Wallet</p>
          <Link to="/login">
            <p className="page">Login</p>
          </Link>
        </div>
        <div className="middle-pic">
          <img src={require("../images/logo2.jpg")} alt="" className="pic" />
        </div>
        <form className="sign-up-form">
          <div className="signup-card">
            <h3 className='title'>Sign Up</h3>
            <br />
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" className='signup' id='firstname' />

            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" className='signup' id='lastname' />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" className='signup' id='email' />

            <label htmlFor="mobile">Mobile no.</label>
            <input type="password" name="mobile" className='signup' id='mobile' />

            <div className="check">
            <p>Are you a student?</p>
            <input type="radio" name="yes" id='yes' />
            <label htmlFor="yes">&nbsp;Yes</label>
            <br />
            <input type="radio" name="no" id='no' />
            <label htmlFor="no">&nbsp;No</label>
            </div>
            <br />
            
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className='signup' id='password' />

            <label htmlFor="conpassword">Confirm Password</label>
            <input type="confirmpassword" name="conPassword" className='signup' id='conpassword' />


            <button className="btn">sign up</button>

          </div>
        </form>
      </div>
    </>
  )
}
