import React, { useState, useEffect } from "react";
import "./orderpart1.css";
import { useNavigate } from "react-router-dom";
import UserService from "../OrderService/UserService";

function Password() {
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  const [user,setUser] = useState({});
  const [password, setPassword] = useState();
  const [id, setId] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showButtonInput, setShowButtonInput] = useState(false);
  

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name == "indexno") {
      setUserID(value);
    }
    if (name == "nic") {
      setId(value);
    }
    if (name == "password") {
        setPassword(value);
      }
  };

  const handleEnterClick = async (userID, id) => {
    if (userID && id) {
      try {
        const userResponse = await fetch(`http://localhost:8080/api/v1/user/getUserByUserId/${userID}`);
        if (!userResponse.ok) {
         
          throw new Error("Failed to fetch user data");
        }
        const userData = await userResponse.json();
        
        if (userData.id === userID & userData.nic === id) {
          setUser(userData);
          setShowPasswordInput(true);
          setShowButtonInput(true);
         
        } else {
          alert("ID or NIC does not match");
        }
      } catch (error) {
        alert("ID or NIC does not match")
        console.error("Error fetching user data:", error);
      }
    }else{
      alert("Require Both Feilds to be filled.")
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userDataUpdate = {
        u_id:user.u_id,
        id:user.id,
        course:user.course,
        nic:user.nic,
        address:user.address,
        batch_no:user.batch_no,
        contact_no:user.contact_no,
        department:user.department,
        email:user.email,
        name:user.name,
        password:password,
        role:user.role
      };
      
      console.log(userDataUpdate)

   UserService.updateUser(user.u_id,userDataUpdate)
      .then(() => {
        alert("Successefully reset the password.")
        navigate("/Login");
      })
      .catch((error) => {
        
        console.error("There was an error submitting the form!", error);
        
      });
      console.log(userDataUpdate)
 
    }
  return (
    <div >
      <div className="Password1">
        <h1 className="heading">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
         <div className="fo1">
          <div className='input-group mb-5'>
                  <label className='input-group-text'>Index No</label>
                    <input
                    className='form-control col-sm-6'
                      type="text"
                      name="indexno"
                      value={userID}
                      onChange={handleInput}
                    />
                  </div>
               <div className='input-group mb-5'>
                  <label className='input-group-text'>Your NIC</label>
                
                 
                    <input
                    className='form-control col-sm-6'
                      type="text"
                      name="nic"
                      value={id}
                      onChange={handleInput}
                    />
                  
                
                  <button className="password2" onClick={() => handleEnterClick(userID, id)}>
                    Enter
                  </button>
                  </div>
                
              {showPasswordInput && (
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Reset Password</label>
               
                    <input
                    className='form-control col-sm-6'
                      type="text"
                      name="password"
                      value={password}
                      onChange={handleInput}
                    />
                  </div>
                
              )}
            
          {showButtonInput && (
          <button
            className="button1"
            id="b1"
            type="submit"
            
          >
            Submit
          </button>)}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Password;
