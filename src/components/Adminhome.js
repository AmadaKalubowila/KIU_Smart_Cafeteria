import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationComponent() {
  const navigate = useNavigate();
  const userID = 1; 
  const handleOrderClick = () => {
    navigate(`/Orderadmin`);
  };

  return (
    <div>
      <button onClick={handleOrderClick} className="button1" type="button">
        Order Admin
      </button>
    </div>
  );
}
