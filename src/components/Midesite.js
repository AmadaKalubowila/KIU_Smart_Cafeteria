import { useState,useEffect } from 'react';
import fried from './images/FRIED-RICE.jpg';
import kottu from './images/KOTHTHU.jpg';
import curry from './images/RICE-&-CURRY.jpg';
import other from './images/food.jpg';
import './home.css'
import AppMain from '../components/Main';

import { useNavigate, useParams } from 'react-router-dom';

function Midesite(){
    const { userID } = useParams();
    const navigate = useNavigate();
    const[user, setUser]=useState({});
    const handleClick1= () => {
        navigate(`/CategoryKottu/${userID}`);
      };

      const handleClick2= () => {
        navigate(`/CategoryRice/${userID}`);
      };

      const handleClick3= () => {
        navigate(`/CategoryOther/${userID}`);
      };

      const handleClick4= () => {
        navigate(`/CategoryFriedRice/${userID}`);
      };
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
      useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/v1/user/getUserByUserId/${userID}`);
            if (!response.ok) {
              throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            setUser(userData);
          
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserDetails();
      }, [userID]);
    return (
        <>
        <div className="welcome1">
            <p className='welcome2'>Welcome</p>
            <h2 className='welcome3'>{user.name}</h2>
        </div>
        <AppMain></AppMain>
        <div className="titel-text">
            KIU CafePlus
        </div>

        <div className="cat-text">
            Category
        </div>

        <div className="food-grid">
            <div className="food-block">
                <div>
                    <img className="food-img" src={fried} alt="rice"/>
                </div>

                <div className="food-button">
                    <button className="food-titel1"  onClick={handleClick4}>
                        <h6 className='cat-Name'>FRIED RICE</h6> 
                    </button>
                </div>

            </div>

            <div className="food-block">
                <div>
                    <img className="food-img" src={kottu} alt="kottu" />
                </div>
                <div className="food-button">
                    <button className="food-titel1" onClick={handleClick1}>
                        <h6 className='cat-Name'>KOTTU</h6>
                    </button>
                </div>

            </div>

            <div className="food-block">
                <div>
                    <img className="food-img" src={curry} alt="curry"/>
                </div>
                <div className="food-button">
                    <button className="food-titel1"  onClick={handleClick2}>
                        <div>
                            <h6 className='cat-Name'>RICE & CURRY</h6>
                        </div>
                        
                    </button>
                </div>

            </div>

            <div className="food-block">
                <div>
                    <img className="food-img" src={other} alt="other" />
                </div>
                <div className="food-button">
                    <button className="food-titel1"  onClick={handleClick3}>
                        <div>
                            <h6 className='cat-Name'>OTHERS</h6>
                    </div>
                    </button>
                </div>

            </div>
        </div>

    </>
    );
}


export default Midesite;