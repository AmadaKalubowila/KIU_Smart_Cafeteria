import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderpart1.css';
import UserService from '../OrderService/UserService';

 function Useredit() {
  const {userID}= useParams();
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
          course:course,
          nic:user.nic,
          address,
          batch_no,
          contact_no,
          department:department,
          email,
          name,
          password:user.password,
          role:role
          
        };
        const UID =user.u_id
        console.log(UID)
        console.log(userData)
        UserService.updateUser(UID,userData)
      .then(() => {
        alert("Successfully edited the user.")
        navigate(`/UserProfile/${userID}`);
      })
      .catch((error) => {
        console.error('There was an error updating the user!', error);
        alert("Invalid inputs");
      });
      }

  return (
    <div>
    <div className="Box1">
      <h1 className="heading">Update Your Profile</h1>
      <form >
      <div className='fo1'>
       <div className='input-group mb-5'>
                <label className='input-group-text'>Index No</label>
            
                  <input  className='form-control col-sm-6' type="text" name="id" defaultValue={user.id} onChange={handleChange} readOnly />
                </div>
             <div className='input-group mb-5'>
                <label className='input-group-text'>National Identification Number</label>
             
                  <input  className='form-control col-sm-6' type="text" name="nic" defaultValue={user.nic} onChange={handleChange}  readOnly/>
                </div>
             <div className='input-group mb-5'>
                <label className='input-group-text'>Customer Name</label>
              
                  <input  className='form-control col-sm-6' type="text" name="name" defaultValue={user.name} onChange={handleChange}></input>
                </div>
            <div className='input-group mb-5'>
                <label className='input-group-text'>Address</label>
          
                  <input  className='form-control col-sm-6' type="text" name="address" defaultValue={user.address} onChange={handleChange}></input>
                </div>
            <div className='input-group mb-5'>
                <label className='input-group-text'>Email</label>
             
                  <input   className='form-control col-sm-6' type="text" name="email" defaultValue={user.email} onChange={handleChange} placeholder='@gmail.com'></input>
                </div>
            <div className='input-group mb-5'>
                <label className='input-group-text'>Contact No</label>
          
                  <input  className='form-control col-sm-6'  type="text" name="contact_no" defaultValue={user.contact_no} onChange={handleChange} placeholder='10 digits only'></input>
                </div>
           <div className='input-group mb-5'>
                <label className='input-group-text'>Batch no</label>
           
                  <input   className='form-control col-sm-6' type="text" name="batch_no" defaultValue={user.batch_no} onChange={handleChange} placeholder='If you are staff enter "NBS" '></input>
                </div>
         <div className='input-group mb-5'>
                <label className='input-group-text'>Department</label>
          
                 
                  <select className='form-control col-sm-6'  type="text" name="department" onChange={handleChange} defaultValue={user.department}  value={department}  >
                    <option value="" disabled selected>---Select Your Department---</option>
                        <option >Department of Marketing
                        </option>
                        <option>Department of Accounting
                        </option>
                        <option >Department of Computer science
                        </option>
                        <option>Department of Human Resource
                        </option>
                        <option >Department of Biomedical Science
                        </option>
                        <option >Department of Decision Science</option>
                        <option >Other</option>
                    </select>
                </div>
             <div className='input-group mb-5'>
                <label className='input-group-text'>Degree</label>             
                    <select className='form-control col-sm-6'  type="text"  name="course" onChange={handleChange}  defaultValue= {user.course}  value={course}  >
                    <option value="" disabled selected>---Select Your Degree---</option>
                    <option value="" disabled selected>--Undergraduate--</option>
                        <option >Bachelor of Management Honours in Business Analytics
                        </option>
                        <option >Bachelor of Management Honours in Accounting
                        </option>
                        <option >Bachelor of Management Honours in Human Resource
                        </option>
                        <option >Bachelor of Management Honours in Marketing
                        </option>
                        <option>Bachelor of Science Honours in Data Science
                        </option>
                        <option>Bachelor of Science Honours in Software Engineering 
                        </option>
                        <option>Bachelor of Science Honours in Computer Networks and Cyber Security</option>
                        <option>Bachelor of Science Honours in Management Information System 
                        </option>
                        <option>Bachelor of Science Honours in Biomedical Science
                        </option>
                        <option>Bachelor of Science Honours in Medical Science in Acupuncture
                        </option>
                        <option>Bachelor of Science Honours in Nursing
                        </option>
                        <option>Bachelor of Science Honours in Psychology
                        </option>
                        <option>Bachelor Of Honours in  Laws 
                        </option>
                        <option value="" disabled selected>--Postgraduate Programs--
                        </option>
                        <option>Master Of Business Administration (SLQF 10)
                        </option>
                        <option>Master of Nursing Education (SLQF 9)
                        </option>
                        <option>Master of Nursing Management (SLQF 9)
                        </option>
                        <option>Master of Science in Nursing (SLQF 10)
                        </option>
                        <option>Master Of Philosophy In Nursing (SLQF 11)
                        </option>
                        <option value="" disabled selected>--Diplomas--</option>
                        <option>Certificate in IELTS Preparation
                        </option>
                        <option>Certificate Course for Laboratory Assistant
                        </option>
                        <option>Certificate Course in Human Resource Analytics</option>
                        <option>Certificate Course in Financial and Management Accounting</option>
                        <option>Certificate Course In Digital Marketing</option>
                        <option>
                        Certificate Course In Caregiver</option>
                        <option>Certificate in Clinical Competency in Acupuncture</option>
                        <option>Diploma In Fabrication And Welding</option>
                        <option>Diploma In Acupuncture</option>
                        <option>Japanese Language Programs</option>
                        <option>
                        Certificate Course in English Language (Elementary Level)</option>
                        <option>Certificate Course in English Language (Intermediate Level)</option>
                        <option>Certificate Course in English Language (Advanced Level)</option>
                        <option>Diploma in Agriculture and Livestock Management(DALM)</option>
                       
                    </select>
                </div>
        <div className='input-group mb-5'>
                <label className='input-group-text'>Role</label>
                  <select className='form-control col-sm-6'  type="text"  name="role" onChange={handleChange} defaultValue={user.role} value={role}  >
                    <option value="" disabled selected>---Select a suitable role---</option>
                        <option >Student</option>
                        <option >Lecturer</option>
                        <option >Staff</option>
                        <option >Other</option>
                    </select>
                </div>
              
             <div className='input-group mb-5'>
                <label className='input-group-text'>Password</label>
            
                  <input  className='form-control col-sm-6' type="password" name="password" defaultValue={user.password} onChange={handleChange} readOnly/>
                </div>
            </div>
      </form>
    </div>
    <button onClick={handleSubmit}   className="button1" type="submit">
      Submit
    </button>
  </div>
  )
}export default Useredit;
