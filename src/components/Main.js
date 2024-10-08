import profile from './images/5.jpg';
import style from '../App.css';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Main() {
    const { userID,itemID } = useParams();
    const navigate=useNavigate();
    const[status,setStatus]=useState('');
const [loggedIn,setLoggedIn]=useState(false);
    useEffect(() => {
      
      const loggedInUser = localStorage.getItem('userID');
      setLoggedIn(!!loggedInUser)
    }, []);
  
    const handleClick6= () => {
        navigate(`/Logout/${userID}`);
      };
      useEffect(() => {
        const fetchStatusDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/status/getLatestStatusForUser`);
            if (!response.ok) {
              throw new Error('Failed to fetch status');
            }
            const SData = await response.json();
            console.log(SData)
            setStatus(SData);
           
          } catch (error) {
            console.error('Error fetching status:', error);
          }
        };
    
        fetchStatusDetails();
      }, []);
      const handleClick10= (e) => {
        e.preventDefault();
        console.log(status.status)
        if(status.status==0){
          alert("Can not place Orders Today");
            navigate(`/MainHome/${userID}`);
        }else{
            navigate(`/onlineorder/${userID}/${itemID}`)
        }
      };
 
      const handleClick9= (e) => {
        e.preventDefault();
        

      const loggedInUser = localStorage.getItem('userID');
          if (loggedInUser) {
            navigate(`/MainHome/${loggedInUser}`);
          }
          else{
            navigate(`/MainHome2`)
          }
        }
      

    return (
        <div className="navigation">
            <div className="navigation-bar">
                <div className="stynavigation1">
                    <Link className="link-text" to="#" onClick={handleClick9} > HOME </Link>
                </div>
                <div className="navigation2">
                    <Link className="link-text" to={`/AboutUs/${userID}`} >ABOUT US</Link>
                    
                </div>
                <div className="navigation3">
                    <Link className="link-text" to="#" onClick={handleClick10} >ORDER</Link>
                </div>
                <div className="navigation4">
                    <Link className="link-text" to={`/Reviewuser/${userID}`} >REVIEW</Link>
                    
                </div>
                {loggedIn &&(
                  <>
                <div className="navigation6">
                <button className="logout-button" onClick={handleClick6}> Logout </button>
            </div>
              
            
            <div className="navigation5">
                
                <Link className="link-text" to={`/UserProfile/${userID}`} ><img className="profile-photo" src={profile} alt="profile" /></Link>
            </div>
            </>)}
        </div>
        </div>

    );
}

export default Main;
