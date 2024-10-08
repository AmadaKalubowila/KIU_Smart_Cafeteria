import { useParams, useNavigate } from 'react-router-dom';
import './Category.css';
import img7 from './images/catagory.jpg';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';


export function Categorynav() {
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
            console.error('Error fetching status:');
          }
        };
    
        fetchStatusDetails();
      }, []);
      const handleClick10= (e) => {
        e.preventDefault();
        console.log(status.status)
        if(status.status==0){
          alert("Can Not Put Orders Today");
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
    <div>
        <div className="headerca">
          
        <img className="hader-imgca" src={img7}/>
        </div>
  
  <div>
    
    <div className="headca">
      <div className="navigationca">
        <div className="navigation-barca">
            <div className="navigation-text1ca">
                <Link className="link-textca" to="#" onClick={handleClick9}> HOME </Link>
            </div>
           
    
            <div className="navigation-text2ca">
                <Link className="link-textca" to={`/AboutUs/${userID}`}> ABOUT US </Link>
            </div>
    
            <div className="navigation-text3ca">
                <Link className="link-textca" to="#" onClick={handleClick10}>ORDER</Link>
            </div>
    
            <div className="navigation-text4ca">
                <Link className="link-textca" to={`/Reviewuser/${userID}`}> REVIEW </Link>
            </div>
            {loggedIn &&(
                  <>
            <div className="navigation6ca">
                <button className="logout-buttonca" onClick={handleClick6}> LOGOUT </button>
            </div>
           </> )}
        </div>
        
      <div className="navigation-text5ca">
        Our Menu
      </div>
    </div>
    



  
  </div>
  
  
</div>
</div>

    
  );
}export default Categorynav;

