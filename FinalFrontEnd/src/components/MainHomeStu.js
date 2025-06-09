import React from 'react'
import AppMain from '../components/Main'
import AppMidesiteStu from '../components/MidesiteStu'

import Appfooter from '../components/footer';

export default function MainHomeStu({userID}) {
  return (
    <div>
        
        <AppMain  userID={userID}/>
        <AppMidesiteStu  userID={userID}/>
        <Appfooter/>
        
        
        </div>
   
  )
}
