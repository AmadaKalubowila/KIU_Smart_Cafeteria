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
  const [itemStock, setItemStock] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    const fetchItemStock = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v/Item/getItem`);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const itemStockData = await response.json();
        setItemStock(itemStockData);
        if (itemStockData.length > 0) {
          setSelectedItem(itemStockData[0].name); 
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItemStock();
  }, []);

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
        setSelectedItem(vendorData.items);
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
      v_id: vendor.v_id,
      vendorName: vname,
      email,
      contactNo: contact,
      gender:gender,
      nic,
      address,
      date,
      noItems: noitems,
      items: selectedItem,
      price
    };
    console.log(vendoringData)
    VendorService.updateVendor(vendorID, vendoringData)
      .then(() => {
        alert("Successfully edited the vender");
        navigate('/Vendor');
      })
      .catch((error) => {
        console.error('There was an error submitting the vendor!', error);
        alert("Invalid inputs");
      });
  };

  return (
    <div>
      <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h1 className="heading">Update Vendor Details</h1>
        <form onSubmit={handleSubmit}>
                  <div className='input-group mb-5'>
                  <label  className='input-group-text'>Name</label>
                
                  <input  className='form-control col-sm-6' type="text" name="vname" value={vname} onChange={handleChange} />
                  </div>
               <div className='input-group mb-5'>
                  <label  className='input-group-text'>Address</label>
                    <input  className='form-control col-sm-6' type="text" name="address" value={address} onChange={handleChange} />
                  </div>
                <div className='input-group mb-5'>
                  <label  className='input-group-text'>NIC</label>

                    <input  className='form-control col-sm-6' type="text" name="nic" value={nic} onChange={handleChange} placeholder='if "V" include put 0 for that'/>
                  </div>
            <div className='input-group mb-5'>
                  <label  className='input-group-text'>Gender</label>
                
                    <select className='form-control col-sm-6'  type="text"  name="gender" onChange={handleChange} value={gender}  >
                    <option value="" disabled selected>---Select Your Gender--</option>
                        <option >Male</option>
                        <option >Female</option>
                        <option >Other</option>
                       
                    </select>
                  </div>
                <div className='input-group mb-5'>
                  <label  className='input-group-text'>Email</label>
                
                    <input  className='form-control col-sm-6' type="text" name="email" value={email} onChange={handleChange} placeholder='@gmail.com'/>
                  </div>
              <div className='input-group mb-5'>
                  <label  className='input-group-text'>Contact No</label>
              
                    <input  className='form-control col-sm-6' type="text" name="contact" value={contact} onChange={handleChange} placeholder='only 10 digits' />
                  </div>
               <div className='input-group mb-5'>
                  <label  className='input-group-text'>Date</label>
              
                    <input  className='form-control col-sm-6' type="date" name="date" value={date} onChange={handleChange} />
                  </div>
               <div className='input-group mb-5'>
                  <label  className='input-group-text'>No Of Item</label>
                
                    <input   className='form-control col-sm-6' type="text" name="noitems" value={noitems} onChange={handleChange} />
                  </div>
              <div className='input-group mb-5'>
                  <label  className='input-group-text'>Item Name</label>
                
                    <select  className='form-control col-sm-6' name="product" value={selectedItem} onChange={handleChange}>
                      {itemStock.map((item) => (
                        <option key={item.item_id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Price</label>
              
                    <input  className='form-control col-sm-6' type="text" name="price" value={price} onChange={handleChange} />
                  </div>
            
          <button className="button1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Vendoredit;
