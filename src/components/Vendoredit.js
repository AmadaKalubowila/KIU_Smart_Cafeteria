import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderpart1.css';
import VendorService from '../OrderService/VendorService';

function Vendoredit() {
  const { vendorID } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState({});
  const [vname, setVname] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [contact, setContact] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [noitems, setNoitems] = useState('');
  const [product, setProduct] = useState('Fried Rice');
  const [price, setPrice] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'vname':
        setVname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contact':
        setContact(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'nic':
        setNic(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'noitems':
        setNoitems(value);
        break;
      case 'product':
        setProduct(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/vendor/getVendorByVendorID/${vendorID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch vendor data');
        }
        const vendorData = await response.json();
        setVendor(vendorData);
        setVname(vendorData.vendorName);
        setEmail(vendorData.email);
        setContact(vendorData.contactNo);
        setGender(vendorData.gender);
        setNic(vendorData.nic);
        setAddress(vendorData.address);
        setDate(vendorData.date);
        setNoitems(vendorData.noItems);
        setProduct(vendorData.items);
        setPrice(vendorData.price);
      } catch (error) {
        console.error('Error fetching vendor data:', error);
      }
    };

    fetchVendorDetails();
  }, [vendorID]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const vendoringData = {
      v_id:vendor.v_id,
      nic,
      address,
      items: product,
      contactNo: contact,
      gender,
      email,
      vendorName: vname,
      no_items: noitems,
      date,
      price
    };
    VendorService.updateVendor(vendorID, vendoringData)
      .then(() => {
        navigate('/Vendor');
      })
      .catch((error) => {
        console.error('There was an error submitting the vendor!', error);
      });
  };

  return (
    <div>
      <div className="Box30">
        <h1 className="heading">Update Vendor Details</h1>
        <form onSubmit={handleSubmit}>
          <table className="Structure">
            <tbody>
              <tr>
                <td>
                  <label className="label_structure">Name</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="vname" value={vname} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Address</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="address" value={address} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">NIC</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="nic" value={nic} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Gender</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="gender" value={gender} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Email</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="email" value={email} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Contact No</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="contact" value={contact} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Date</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="date" name="date" value={date} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">No Of Item</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="noitems" value={noitems} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Item Name</label>
                </td>
                <td>
                  <div className="field_structure">
                    <select name="product" value={product} onChange={handleChange}>
                      <option value="Fried Rice">Fried Rice - Chicken</option>
                      <option value="Egg Fried Rice">Fried Rice - Egg</option>
                      <option value="Vegetable Fried Rice">Fried Rice - Vegetable</option>
                      <option value="Mix Fried Rice">Fried Rice - Mix</option>
                      <option value="Chicken Rice">Rice & Curry - Chicken</option>
                      <option value="Vegetable Rice">Rice & Curry - Vegetable</option>
                      <option value="Fish Rice">Rice & Curry - Fish</option>
                      <option value="Egg Rice">Rice & Curry - Egg</option>
                      <option value="Egg Kottu">Kottu - Egg</option>
                      <option value="Chicken Kottu">Kottu - Chicken</option>
                      <option value="Vegetable Kottu">Kottu -Vegetable</option>
                      <option value="Mix Kottu">Kottu - Mix</option>
                      <option value="Pasta">Other - Pasta</option>
                      <option value="Noodles">Other - Noodles</option>
                      <option value="Parata">Other - Parata</option>
                      <option value="String Hoppers">Other - String Hoppers</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Price</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="price" value={price} onChange={handleChange} />
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

export default Vendoredit;
