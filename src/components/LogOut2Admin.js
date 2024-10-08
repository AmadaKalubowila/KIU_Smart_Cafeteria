import React from 'react'
import './LogOut.css'
import { useNavigate } from 'react-router-dom';

export default function LogOut2Admin()  {
  
  const navigate =useNavigate();
  const handlecancel = () => {
    navigate(`/Orderstockadmin`);
  };
  const handlelogout = () => {
    localStorage.removeItem('userID');
    console.log(`User with ID:  has been logged out.`);
    navigate(`/`);
  };

  return (
    
    <div className='pageOfLog'>
    
    <div className='LogOfOut2'> 
             
            <form action=''>
              <div>
                <h1>LogOut</h1>
            
                <p className='pra'>Are you sure you want to log<br/> out from KIU Smart Cafeteria<br/> web site?</p>

                <button className='LogoutPageBtn' onClick={handlecancel}>Cancel</button>
                <button className='LogoutPageBtn'onClick={handlelogout}>LogOut</button>
            </div>

          </form>
          </div>     
          </div>
    
  )
}
