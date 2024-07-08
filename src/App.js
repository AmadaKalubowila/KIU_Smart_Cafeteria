import React from 'react'
import AppOrderpart4 from './webpages/onlineorder';
import AppOrdersucsses from './webpages/Ordersucsses';
import Appedit_onlineorder from './webpages/edit_onlineorder';
import Apphome from './webpages/home';
import AppAdmin from './webpages/Admin';
import AppOrderstockadmin from './webpages/Orderstockadmin';
import AppReviewuser from './webpages/Reviewuser';
import Review from './components/Review';
import AppReview_edit from './webpages/Review_edit';
import AppUseradd from './components/Useradd';
import AppVenderadd from './components/Venderadd';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        

        <Routes>
           
          <Route path="/" element={<Apphome />} />
          <Route path="/onlineorder/:userID" element={<AppOrderpart4 />} />
          <Route path="/Ordersucsses" element={<AppOrdersucsses />} />
          <Route path="/edit_onlineorder/:ordersID" element={<Appedit_onlineorder />} />
          <Route path="/Admin" element={<AppAdmin />} />
          <Route path="/Orderstockadmin" element={<AppOrderstockadmin />} />
          <Route path="/Reviewuser" element={<AppReviewuser />} />
          <Route path="/User" element={<AppUseradd />} />
          <Route path="/Vendor" element={<AppVenderadd />} />
          <Route path="/Review/:userID" element={<Review />} />
          <Route path="/Review_edit/:reviewID" element={<AppReview_edit />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
