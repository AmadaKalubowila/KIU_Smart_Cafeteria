import React from 'react'
import AppOrderpart1 from './webpages/onlineorder';
import Apporder_success from './webpages/order_sucsses';
import Appedit_onlineorder from './webpages/edit_onlineorder';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AppOrderpart1 />} />
          <Route path="/order_sucsses" element={<Apporder_success />} />
          <Route path="/edit_onlineorder" element={<Appedit_onlineorder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
