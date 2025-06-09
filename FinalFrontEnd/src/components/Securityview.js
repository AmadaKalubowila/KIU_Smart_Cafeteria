import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './security.css';
import VendorService from '../OrderService/VendorService';


function Securityview() {
const navigate = useNavigate(); 
  const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/v1/user/getUsers`);
            if (!response.ok) {
              throw new Error('Failed to fetch User data');
            }
            const sortedUser= await response.json();
            
          setUser(sortedUser);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserDetails();
      }, []);
      const handleclick = () => {
        navigate(`/Logouts3`);
      };
      return (
        <div>
        <h1 className="heading_s1">Users</h1>
        <button onClick={handleclick} className='bt14'>LogOut</button>
        <div className='tablemargin1'>
        
        <table  className='table table-bordered table-hover shadow'>
            <thead>
            <tr>
            <th className="th_9">User ID</th>
            <th className="th_9">User Index</th>
            <th className="th_9">User Name</th>
            <th className="th_9">NIC</th>
            <th className="th_9">Address</th>
            <th className="th_9">Email</th>
            <th className="th_9">Batch </th>
            <th className="th_9">Contact</th>
            <th className="th_9">Degree</th>
            <th className="th_9">Department</th>
            <th className="th_9">Role</th>
            
            
            </tr>
            </thead>
            <tbody>
            {user.map(user => (
                  <tr key={user.u_id}>
                    <td>{user.u_id}</td>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.nic}</td>
                    <td>{user.address}</td>
                    <td>{user.email}</td>
                    <td>{user.batch_no}</td>
                    <td>{user.contact_no}</td>
                    <td>{user.course}</td>
                    <td>{user.department}</td>
                    <td>{user.role}</td>
                    
                  </tr>
                ))}
        </tbody>
        </table>
       
        
    
    
        </div>
    
    </div>
      )
  
}
export default Securityview;
