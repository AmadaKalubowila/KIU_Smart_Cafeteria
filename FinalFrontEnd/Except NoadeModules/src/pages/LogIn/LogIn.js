import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';




function Login() {
  return (
    <div className='pageOfLog'>
      <div className='page'>
      <div className='LogOfOut'>      

      <form action=''>
        <h1 className='headerOfLogin'>Login</h1> 

        <div className='NoAndPassword'>       
      
              <div className='Iteminput'>
                <label for="IndexNo" >Index_No: </label>
                <input type='text' className='dataBox' placeholder='Index No'/>
              </div>
      
              <div className='Iteminput'>
                <label for="Password" >Password: </label>
                <input type="Password" className='dataBox' placeholder='password'/>
              </div>
        </div>

        <Link to="/ItemTable" className='LoginPageBtn'>Log In</Link>
        <h6 className='ForgotPassword'>Forgot Password</h6>
        <h6 className='RegisterNow'>Register Now</h6>

      </form>
      
    </div>
    </div>
    </div>
  )
}

export default Login;