import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppOrderpart4 from './webpages/onlineorder';
import AppOrdersucsses from './webpages/Ordersucsses';
import Appedit_onlineorder from './webpages/edit_onlineorder';
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
import AppVendorForm from './components/VendorForm';
import AppBillingForm from './components/BillingForm';
import AppBillingFormEditing from './webpages/BillingFormEditing';
import AppVendorBillEditing from './webpages/VendorBillEditing';
import AddItem from "./components/AddItem";
import EditItems from "./webpages/EditItems";
import AdminItem from "./webpages/AdminItem";
import AppMainHome from "./webpages/MainHome";
import './App.css';
import AppCategoryKottu from "./webpages/CategoryKottu";
import AppCategoryFriedRice from "./webpages/CategoryFriedRice";
import AppCategoryOther from "./webpages/CategoryOther";
import AppCategoryRice from "./webpages/CategoryRice";
import AppLogIn from "./webpages/LogIn";
import AppLogout from "./webpages/Logout";
import AppLogouta2 from "./webpages/Logouta2";
import AppLogouts3 from "./webpages/Logouts3";
import AppEmail from "./webpages/Email";
import AppEmailcb from "./webpages/Emailcb";
import AppEmailvb from "./webpages/Emailvb";
import AppForgotpassword from "./webpages/Forgotpassword";
import AppMainHomeStu from "./components/MainHomeStu";
import AppMainHome2 from "./webpages/MainHome2";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<AppMainHome2 />} />
          <Route path="/onlineorder/:userID/:itemID" element={<AppOrderpart4 />} />
          <Route path="/Ordersucsses/:userID" element={<AppOrdersucsses />} />
          <Route path="/edit_onlineorder/:userID/:ordersID" element={<Appedit_onlineorder />} />
          <Route path="/Admin" element={<AppAdmin />} />
          <Route path="/Orderstockadmin" element={<AppOrderstockadmin />} />
          <Route path="/Reviewuser/:userID" element={<AppReviewuser />} />
          <Route path="/User/:userID" element={<AppUseradd />} />
          <Route path="/Vendor" element={<AppVendor />} />
          <Route path="/UserProfile/:userID" element={<AppUserProfile />} />
          <Route path="/UserEdit/:userID" element={<AppUserEdit />} />
          <Route path="/Review/:userID" element={<Review />} />
          <Route path="/Venderadd" element={<AppVenderadd />} />
          <Route path="/Review_edit/:userID/:reviewID" element={<AppReview_edit />} />
          <Route path="/VendorEdit/:vendorID" element={<AppVendorEdit />} />
          <Route path="/SecurityView" element={<AppSecurityView />} />
          <Route path="/SecurityDetails" element={<AppSecurityDetails />} />
          <Route path="/AboutUs/:userID" element={<AppAboutUs />} />
          <Route path="/Bills" element={<AppBills />} />
          <Route path="/BillingForm" element={<AppBillingForm />} />
          <Route path="/VendorForm" element={<AppVendorForm />} />
          <Route path="/BillingFormEditing/:billID" element={<AppBillingFormEditing />} />
          <Route path="/VendorBillEditing/:VbillID" element={<AppVendorBillEditing />} />
          <Route path="/AdminItem" element={<AdminItem />} />
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/EditItems/:itemId" element={<EditItems />} />
          <Route path="/CategoryKottu/:userID" element={<AppCategoryKottu />} />
          <Route path="/CategoryFriedRice/:userID" element={<AppCategoryFriedRice />} />
          <Route path="/CategoryRice/:userID" element={<AppCategoryRice />} />
          <Route path="/CategoryOther/:userID" element={<AppCategoryOther />} />
          
          <Route path="/LogIn/:userID" element={<AppLogIn />} />
          <Route path="/Logout/:userID" element={<AppLogout />} />
          <Route path="/MainHome/:userID" element={<AppMainHome />} />
          <Route path="/Logouta2" element={<AppLogouta2 />} />
          <Route path="/Logouts3" element={<AppLogouts3 />} />
          <Route path="/Email/:ordersID/:userID" element={<AppEmail />} />
          <Route path="/Emailcb/:billID" element={<AppEmailcb />} />
          <Route path="/Emailvb/:vbillID" element={<AppEmailvb />} />
          <Route path="/Forgotpassword" element={<AppForgotpassword />} />
          <Route path="/MainHomeStu/:userID" element ={<AppMainHomeStu/>}/>
          <Route path="/MainHome2" element ={<AppMainHome2/>}/>
        </Routes>
     
    </Router>
  );
}

export default App;
