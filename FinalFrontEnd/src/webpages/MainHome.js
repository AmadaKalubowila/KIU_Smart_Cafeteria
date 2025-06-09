import React from 'react'

import AppMidesite from '../components/Midesite';
import Appfooter2 from '../components/footer2';
import AppHomeCaf from '../components/HomeCaf';

export default function MainHome({userID}) {
  return (
    <div>
        
     
        
        <AppMidesite  userID={userID}/>
        <Appfooter2/>
        
        
        </div>
   
  )
}
