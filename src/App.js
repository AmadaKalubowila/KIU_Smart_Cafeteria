import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
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
import AppVendor from './webpages/Vendor';
import AppUserProfile from './webpages/UserProfile';
import AppUserEdit from './webpages/UserEdit';
import AppVendorEdit from './webpages/VendorEdit';
import AppSecurityView from './webpages/SecurityView';
import AppSecurityDetails from './webpages/SecurityDetails';
import AppAboutUs from './webpages/AboutUs';
import AppBills from './webpages/Bills';

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
          <Route path="/Vendor" element={<AppVendor/>} />
          <Route path="/UserProfile" element={<AppUserProfile />} />
          <Route path="/UserEdit/:userID" element={<AppUserEdit />} />
          <Route path="/Review/:userID" element={<Review />} />
          <Route path="/Venderadd" element={<AppVenderadd />} />
          <Route path="/Review_edit/:reviewID" element={<AppReview_edit />} />
          <Route path="/VendorEdit/:vendorID" element={<AppVendorEdit />} />
          <Route path="/SecurityView" element={<AppSecurityView />} />
          <Route path="/SecurityDetails" element={<AppSecurityDetails />} />
          <Route path="/AboutUs" element={<AppAboutUs />} />
          <Route path="/Bills" element={<AppBills />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
