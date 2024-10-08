import React from 'react'
import AppUserprofile from '../components/Userprofile';
import AppMain from '../components/Main';


export default function UserProfile({userID}) {
  return (
    <div>
      <AppMain></AppMain>
        <AppUserprofile userID={userID}/>
        
    </div>
  );
}
