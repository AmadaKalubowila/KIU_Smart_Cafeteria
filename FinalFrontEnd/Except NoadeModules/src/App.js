import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import ItemTable from './component/common/ItemTable';
import ItemStock from './component/Item/ItemStock';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LogOut from "./pages/LogOut/LogOut";
import AddItem from "./pages/AddItem/AddItem";
import EditItem from "./pages/EditItem/EditItem";
import Login from "./pages/LogIn/LogIn";

function App() {
  return (
    <div className="App">
      

      <Router>
            
      
        <Routes>

          <Route
          exact path="/Login" 
          element={<Login/>}>
          </Route>

          <Route 
            exact path="/ItemStock" 
            element={<ItemStock/>}>
          </Route>

          <Route 
            exact path="/ItemTable" 
            element={<ItemTable/>}>
          </Route>

          <Route 
            exact path="/AddItem" 
            element={<AddItem/>}>
          </Route>

          <Route 
            exact path="/EditItem/:itemId" 
            element={<EditItem/>}>
          </Route>


          <Route 
            exact path="/LogOut" 
            element={<LogOut/>}>
          </Route>

        </Routes>


      </Router>
    </div>
  );
}

export default App;
