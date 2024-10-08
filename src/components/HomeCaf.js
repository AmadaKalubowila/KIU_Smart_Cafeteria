import React from 'react'
import Appfooter from '../components/footer';
import './HomeCaf.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function HomeCaf() {
    const { userID,ItemID } = useParams();
    const navigate = useNavigate();

      const handleClick5= () => {
        navigate(`/LogIn/${userID}`);
       
      };
      const handleClick6 = (userID) => {
        if (userID === "") {
          alert("You already have an account");
          navigate(`/MainHome/${userID}`);
        } else {
          navigate(`/User/${userID}`);
        }
      };
  return (
    <div>
        <div className='section-top'>
            <div>
                <div className='navShort'>
                     <Link  className='linkhome1' to={`/AboutUs/${userID}`} >ABOUT US |</Link>
                    <Link className='linkhome1' to={`/onlineorder/${userID}/${ItemID}`} > ORDER |</Link>
                    <Link className='linkhome1'  to={`/Reviewuser/${userID}`} > REVIEW </Link>
                </div>

                <p className='cafe'><br></br>KIU <br></br>CAFEPLUS</p>
                <br></br><br></br>
                <div clasName="bc1">
                <button className='bot07'onClick={handleClick5}>LOG In</button>
                <button className='bot08' onClick={() => handleClick6(userID)}>REGISTER</button>
                </div>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br>
            </div>
        </div>
        

    </div>

       
      
       
   
  )
}
