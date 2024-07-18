import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderpart1.css';
import UserService from '../OrderService/UserService';

 function Useredit() {
  const userID = "14633"; 
  const navigate = useNavigate(); 
  const [user, setUser] = useState({});
  const [id, setID] = useState(''); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [contact_no, setContact_no] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [batch_no, setBatch_no] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/user/getUserByUserId/${userID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
        setContact_no(userData.contact_no);
        setAddress(userData.address);
        setBatch_no(userData.batch_no);
        setDepartment(userData.department);
        setCourse(userData.course);
        setRole(userData.role);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDetails();
  }, [userID]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'id':
        if (value.length === 5) {
          setID(value);
        } 
        break;
      case 'name':
        setName(value);
        break;
      case 'email':
          setEmail(value);
        
        break;
      case 'contact':
          setContact_no(value);
        break;
      case 'password':
          setPassword(value);

        break;
      case 'nic':
            setNic(value);

        break;
      case 'address':
        setAddress(value);
        break;
      case 'batchNo':
        setBatch_no(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      case 'course':
        setCourse(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
        const userData = {
          u_id:user.u_id,
          id:user.id,
          course,
          nic:user.nic,
          address,
          batch_no,
          contact_no,
          department,
          email,
          name,
          password:user.password,
          role
        };
        const UID =user.u_id
        console.log(UID)
        console.log(userData)
        UserService.updateUser(UID,userData)
      .then(() => {
        navigate('/UserProfile');
      })
      .catch((error) => {
        console.error('There was an error updating the user!', error);
      });
      }

  return (
    <div>
    <div className="Box1">
      <h1 className="heading">Update Your Profile</h1>
      <form >
        <table className="Structure">
          <tbody>
            <tr>
              <td>
                <label className="label_structure">Index No</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="id" defaultValue={user.id} onChange={handleChange} readOnly />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">National Identification Number</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="nic" defaultValue={user.nic} onChange={handleChange} readOnly/>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Customer Name</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="name" defaultValue={user.name} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Address</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="address" defaultValue={user.address} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Email</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="email" defaultValue={user.email} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Contact No</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="contact_no" defaultValue={user.contact_no} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Batch no</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="batch_no" defaultValue={user.batch_no} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Department</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="department" defaultValue={user.department} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Degree</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="course" defaultValue= {user.course} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Role</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="role" defaultValue={user.role} onChange={handleChange}></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure" >Password</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="password" name="password" defaultValue={user.password} onChange={handleChange} readOnly/>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </form>
    </div>
    <button onClick={handleSubmit}   className="button1" type="submit">
      Submit
    </button>
  </div>
  )
}export default Useredit;
