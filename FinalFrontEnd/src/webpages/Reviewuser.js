import React from 'react';
import AppReviewview from '../components/Reviewview';
import Appfooter from '../components/footer';
import AppMain from '../components/Main';

export default function Reviewuser({userID}) {
  return (
    <div>
      <AppMain></AppMain>
        < AppReviewview userID={userID}></ AppReviewview>
       <Appfooter></Appfooter>
        
        </div>
   
  );
}
