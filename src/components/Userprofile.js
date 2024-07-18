import React, { useState, useEffect } from 'react';
import './orderpart3.css';
import { useNavigate } from 'react-router-dom';
import UserService from '../OrderService/UserService';
import img3 from './images/1.png';


function Userprofile() {
    const userID="14633"
    const navigate = useNavigate();
  const [user, setUser] = useState({});
    const handleEditClick = () => {
        navigate(`/UserEdit/${userID}`);
    };
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/v1/user/getUserByUserId/${userID}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          setUser(userData);
        
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserDetails();
    }, [userID]);
    const handleDeleteClick = (UID) => {
      const confirmed = window.confirm("Do you want to delete?");
      if (confirmed) {
          UserService.deleteUserById(UID)
              .then(() => {
                  console.log("User deleted");
                  navigate('/home'); 
              })
              .catch((error) => {
                  console.error('There was an error deleting the user!', error);
              });
      } else {
          console.log("user not deleted");
      }
  };
  
  return (
    <div>
        <h1 className='hp1'>Profile</h1>
        <div className='b1'>
        <button onClick={handleEditClick} className="button5" type="button" >Edit</button>
        <button onClick={() => handleDeleteClick(user.u_id)} className="button6" type="button" >Delete</button>
        </div>
            <table className='t5'>
              <tbody >
                <thead>
                <tr>
                  <td>
                  <label>Name</label>
                  <br></br>
                  <input className='i1'defaultValue={user.name} readOnly></input>
                <br></br>
                <br></br>
                  <label>Index Number</label>
                  <br></br>
                  <input className='i1'defaultValue={user.id} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>Address</label>
                  <br></br>
                  <input className='i1' defaultValue={user.address} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>NIC</label>
                  <br></br>
                  <input className='i1' defaultValue={user.nic} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>Contact Number</label>
                  <br></br>
                  <input className='i1' defaultValue={user.contact_no} readOnly></input>
                  <br></br>
                  <br></br>
                  <label className='i1'>Email</label>
                  <br></br>
                  <input className='i1' defaultValue={user.email} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>Batch Number</label>
                  <br></br>
                  <input className='i1' defaultValue={user.batch_no} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>Degree</label>
                  <br></br>
                  <input className='i1' defaultValue={user.course} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>Department</label>
                  <br></br>
                  <input className='i1' defaultValue={user.department} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>Role</label>
                  <br></br>
                  <input className='i1' defaultValue={user.role} readOnly></input>
                  <br></br>
                  <br></br>
                  <label>Password</label>
                  <br></br>
                  <input className='i1' type="password "defaultValue={user.password} readOnly></input>
                  
                  </td>
                  <td>
                    <div className='Box20'><img src={img3}className='img1'></img></div>
                    </td>
                </tr>
                </thead>
              
              </tbody>
              </table> 
    </div>
  )
}
export default Userprofile;
