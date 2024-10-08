import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Login() {
  const{userid}=useParams();
  const navigate = useNavigate();
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {

    const loggedInUser = localStorage.getItem('userID');
    if (loggedInUser) {
      navigate(`/Logout/${loggedInUser}`);
    }
  }, [navigate]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'indexno') {
      setUserID(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLoginClick = async () => {
    try {
      const userResponse = await fetch(`http://localhost:8080/api/v1/user/getUserByUserId/${userID}`);
      const loginData = await userResponse.json();
      console.log(loginData.id);
      if (userID !== loginData.id) {
        alert("Enter a valid Index");
        return;
      }

      if (password === loginData.password) {
        localStorage.setItem('userID', userID);
        if (userID === "Ad595") {
          navigate("/Orderstockadmin");
        } else if (userID === "Se595") {
          navigate("/SecurityView");
        } else {
          navigate(`/MainHome/${userID}`);
        }
      } else {
        alert("Provide a valid Password");
      }
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  };

  return (
    <div className='pageOfLog'>
      <div className='page'>
        <div className='LogOfOut'>
          <form>
            <h1 className='headerOfLogin'>Login</h1>
            <div className='NoAndPassword'>
              <div className='Iteminput'>
                <label htmlFor="IndexNo" className='headText'>Index_No: </label>
                <input
                  type='text'
                  className='dataBox'
                  name='indexno'
                  placeholder='Index No'
                  onChange={handleInput}
                />
              </div>
              <div className='Iteminput'>
                <label htmlFor="Password" className='headText'>Password: </label>
                <input
                  type="password"
                  className='dataBox'
                  name='password'
                  onChange={handleInput}
                  placeholder='Password'
                />
              </div>
            </div>
            <button
              type="button"
              className='LoginPageBtn'
              onClick={handleLoginClick}
            >
              Log In
            </button>

            <Link to={`/User/${userid}`} className='RegisterNow'>Register Now</Link><br />
            <Link to="/Forgotpassword" className='ForgotPassword'>Forgot Password</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
