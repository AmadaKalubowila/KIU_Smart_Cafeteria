import React from 'react'
import AppMidesiteStu from '../components/MidesiteStu'
import Appfooter2 from '../components/footer2';
import AppHomeCaf from '../components/HomeCaf';

export default function MainHome2({userID}) {
  return (
    <div>
      
       <AppHomeCaf></AppHomeCaf>
        <AppMidesiteStu  userID={userID}/>
        <Appfooter2/>
        
        
        </div>
   
  )
}
