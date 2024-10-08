import React from 'react'
import AppOrderpart4 from '../components/Orderpart4';
import Appfooter from '../components/footer';



export default function onlineorder({userID}) {
  return (
    <div>
      
        <AppOrderpart4 userID={userID} />
        <Appfooter></Appfooter>
        
        </div>
   
  );
}
