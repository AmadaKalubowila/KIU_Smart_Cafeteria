import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './orderstockstyle.css';
import VendorService from '../OrderService/VendorService';


function VendorView() {
  const navigate = useNavigate(); 
  const [vendor, setVendor] = useState([]);

  const handleOrderClick8 = () => {
    navigate(`/Venderadd`);
  };
 
    useEffect(() => {
      const fetchVendorDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/vendor/getVendors`);
          if (!response.ok) {
            throw new Error('Failed to fetch vendor data');
          }
          const sortedVendor = await response.json();
          console.log(sortedVendor)
        setVendor(sortedVendor);
        } catch (error) {
          console.error('Error fetching vendor data:', error);
        }
      };
  
      fetchVendorDetails();
    }, []);

    const handleEditClick = (vendorID) => {
        navigate(`/VendorEdit/${vendorID}`);
    };

    const handleDeleteClick = (vendorID) => {
        const confirmed = window.confirm("Do you want to delete?");
        if (confirmed) {
            VendorService.deleteVendorById(vendorID)
                .then(() => {
                    console.log("Vendor deleted");
                    navigate('/Vendor'); 
                })
                .catch((error) => {
                    console.error('There was an error deleting the vendor!', error);
                });
        } else {
            console.log("vendor not deleted");
        }
    };
    
      
  return (
    <div>
    <h1 className="heading_1">Vendors</h1>
    <button onClick={handleOrderClick8} className="button1_r" type="button">
        Add Vendor
      </button>
    <div>
    <h2 className="heading_2">Details</h2>
    <div>
    <table className='table table-bordered table-hover shadow'>
        <thead>
        <tr>
        <th className="th_4">Vendor Id</th>
        <th className="th_4">Vendor Name</th>
        <th className="th_4">NIC</th>
        <th className="th_4">Address</th>
        <th className="th_4">Email</th>
        <th className="th_4">Gender</th>
        <th className="th_4">Contact No</th>
        <th className="th_4">Item</th>
        <th className="th_4">No Of Items</th>
        <th className="th_4">Price</th>
        <th className="th_4">Date</th>
        <th className="th_4">Edit</th>
        <th className="th_4">Delete</th>
        </tr>
        </thead>
        <tbody>
        {vendor.map(vendor => (
              <tr key={vendor.v_id}>
                <td>{vendor.v_id}</td>
                <td>{vendor.vendorName}</td>
                <td>{vendor.nic}</td>
                <td>{vendor.address}</td>
                <td>{vendor.email}</td>
                <td>{vendor.gender}</td>
                <td>{vendor.contactNo}</td>
                <td>{vendor.items}</td>
                <td>{vendor.noItems}</td>
                <td>{vendor.price}</td>
                <td>{vendor.date}</td>
                <td><button className='bt2' onClick={() => handleEditClick(vendor.v_id)}>Edit</button></td>
                <td><button className='bt3'  onClick={() => handleDeleteClick(vendor.v_id)}>Delete</button></td>
              </tr>
            ))}
    </tbody>
    </table>
    </div>
    


    </div>

</div>
  )
}
export default VendorView;
