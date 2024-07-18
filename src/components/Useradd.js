import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './orderpart1.css';
import UserService from '../OrderService/UserService';

function Useradd() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
        const userData = {
          id,
          course,
          nic,
          address,
          batch_no: batchNo,
          contact_no: contact,
          department,
          email,
          name,
          password,
          role
        };
    
        UserService.submitUser(userData)
        
          .then(() => {
            navigate('/home');
          })
          .catch((error) => {
            console.error('There was an error submitting the form!', error);
          });
      }

      
     

  return (
    <div>
      <div className="Box1">
        <h1 className="heading">Register</h1>
        <form onSubmit={handleSubmit}>
          <table className="Structure">
            <tbody>
              <tr>
                <td>
                  <label className="label_structure">Index No</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="id" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">National Identification Number</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="nic" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Customer Name</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="name" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Address</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="address" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Email</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="email" name="email" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Contact No</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="contact" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Batch No</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="batchNo" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Department</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="department" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Degree</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="course" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Role</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="role" onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Password</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="password" name="password" onChange={handleChange} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <button onClick={handleSubmit} className="button1" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Useradd;
