import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationComponent() {
  const navigate = useNavigate();
  const userID = 14633; 
  const handleOrderClick = () => {
    navigate(`/onlineorder/${userID}`);
  };
 
  const handleOrderClick4 = () => {
    navigate(`/Reviewuser`);
  };
  const handleOrderClick5 = () => {
    navigate(`/User`);
  };
  const handleOrderClick6 = () => {
    navigate(`/Vendor`);
  };
  const handleOrderClick7 = () => {
    navigate(`/UserProfile`);
  };
  const handleOrderClick8 = () => {
    navigate(`/SecurityView`);
  };
  const handleOrderClick9 = () => {
    navigate(`/AboutUs`);
  };
  const handleOrderClick11 = () => {
    navigate(`/Biils`);
  };
  return (
    <div>
      <button onClick={handleOrderClick} className="button1" type="button">
        Order
      </button>

      <button onClick={handleOrderClick8} className="button1" type="button">
       Security
      </button>
      <button onClick={handleOrderClick4} className="button1" type="button">
       Review
      </button>
      <button onClick={handleOrderClick5} className="button1" type="button">
       Add User
      </button>
      <button onClick={handleOrderClick6} className="button1" type="button">
       Vendor
      </button>
      <button onClick={handleOrderClick7} className="button1" type="button">
       Profile
      </button>
      <button onClick={handleOrderClick9} className="button1" type="button">
      About Us
      </button>
      <button onClick={handleOrderClick11} className="button1" type="button">
      Bills
      </button>
      
    </div>
  );
}
