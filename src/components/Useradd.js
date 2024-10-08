import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './orderpart1.css';
import UserService from '../OrderService/UserService';

function Useradd() {
  const {userID}=useParams();
  const navigate = useNavigate(); 
  const [user, setUser] = useState({});
  const [id, setID] = useState(''); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [contact, setContact] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [batchNo, setBatchNo] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [role, setRole] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'id':
          setID(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'email':
          setEmail(value);
        
        break;
      case 'contact':
          setContact(value);
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
        setBatchNo(value);
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
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/user/getUsers`);
        if (!response.ok) {
          throw new Error('Failed to fetch users data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
        const userData = {
          id,
          course:course,
          nic,
          address,
          batch_no: batchNo,
          contact_no: contact,
          department:department,
          email,
          name,
          password,
          role:role
         
        };
    console.log(userData)
    console.log(user)
    const userExists = user.some(user => user.id === id);
console.log(userExists)
   
      if (userExists == true) {
       alert("This Index is already registered.")
       navigate('/LogIn');
      }
   else{
    console.log(userData)
        UserService.submitUser(userData)
        
          .then(() => {
            alert("Successfully registered")
            navigate(`/LogIn/${userID}`);
          })
          .catch((error) => {
            console.error('There was an error submitting the form!', error);
            alert("Invalid inputs");
          
        });}
      }

      
     

  return (
    <div>
      <div className="Box1">
        <h1 className="heading">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='fo1'>
          <div className='input-group mb-5'>
                  <label className='input-group-text'>Index No</label>
               
                    <input className='form-control col-sm-6'  type="text" name="id" onChange={handleChange} placeholder='last 5 digits only' />
                  </div>
             <div className='input-group mb-5'>
                  <label className='input-group-text'>National Identification Number</label>
               
                    <input className='form-control col-sm-6'  type="text" name="nic" onChange={handleChange} placeholder='if "V" include put 0 for that'/>
                    
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Customer Name</label>
               
                    <input className='form-control col-sm-6'  type="text" name="name" onChange={handleChange} />
                  </div>
                <div className='input-group mb-5'>
                  <label className='input-group-text'>Address</label>
                
                    <input  className='form-control col-sm-6'  type="text" name="address" onChange={handleChange} />
                  </div>
            <div className='input-group mb-5'>
                  <label className='input-group-text'>Email</label>
                
                    <input className='form-control col-sm-6'  type="email" name="email" onChange={handleChange} placeholder=' @gmail.com' />
                  </div>
            <div className='input-group mb-5'>
                  <label className='input-group-text'>Contact No</label>
                
                    <input  className='form-control col-sm-6' type="text" name="contact" onChange={handleChange} placeholder='10 digits'/>
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Batch No</label>
               
                    <input className='form-control col-sm-6' type="text" name="batchNo" onChange={handleChange} placeholder='If you are staff enter "NBS" ' />
                    
                    
                  </div>
             <div className='input-group mb-5'>
                  <label className='input-group-text'>Department</label>
                

                    <select className='form-control col-sm-6'  type="text" name="department" onChange={handleChange}  value={department}  >
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
                
                    <select className='form-control col-sm-6'  type="text"  name="course" onChange={handleChange}   value={course}  >
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
                 
                  
                  <select className='form-control col-sm-6'  type="text"  name="role" onChange={handleChange}  value={role}  >
                    <option value="" disabled selected>---Select a suitable role---</option>
                        <option >Student</option>
                        <option >Lecturer</option>
                        <option >Staff</option>
                        <option >Other</option>
                    </select>
                  
                  </div>
              
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Password</label>
          
                    <input className='form-control col-sm-6'  type="password" name="password" onChange={handleChange} placeholder='6 characters allowed' />
                  </div>
              
          <button onClick={handleSubmit} className="button1" type="submit">
        Submit
      </button>
     </div>
        </form>
      </div>
     
    </div>
  );
}

export default Useradd;
