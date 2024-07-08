import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationComponent() {
  const navigate = useNavigate();
  const userID = 1; 
  const handleOrderClick = () => {
    navigate(`/onlineorder/${userID}`);
  };
  const handleOrderClick2 = () => {
    navigate(`/Admin`);
  };
  const handleOrderClick3 = () => {
    navigate(`/Orderstockadmin`);
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
  return (
    <div>
      <button onClick={handleOrderClick} className="button1" type="button">
        Order
      </button>
      <button onClick={handleOrderClick2} className="button1" type="button">
        Order Admin
      </button>
      <button onClick={handleOrderClick3} className="button1" type="button">
        Order View
      </button>
      <button onClick={handleOrderClick4} className="button1" type="button">
       Review
      </button>
      <button onClick={handleOrderClick5} className="button1" type="button">
       Add User
      </button>
      <button onClick={handleOrderClick6} className="button1" type="button">
       Add Vendor
      </button>
    </div>
  );
}
