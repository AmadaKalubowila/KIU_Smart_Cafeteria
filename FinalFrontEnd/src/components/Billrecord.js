import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './review.css';
import './orderstockstyle.css';
import BillService from '../OrderService/BillService';
import VendorBillService from '../OrderService/VendorBillService';

export default function NavigationComponent() {
  const navigate = useNavigate();
  const [bill, setBill] = useState([]);
  const [venderbill, setVenderBill] = useState([]);
  const [datebill, setDateBill] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [sums, setSums] = useState('');
  const [quantities, setQuantities] = useState(0);
  const [profit, setProfit] = useState('');

  const handleOrderClick14 = () => navigate(`/BillingForm`);
  const handleOrderClick15 = () => navigate(`/VendorForm`);

  const handleEditClick = (billID) => navigate(`/BillingFormEditing/${billID}`);

  const handleEmailClick = (billID) => navigate(`/Emailcb/${billID}`);

  const handleEmailClick1 = (vbillID) => navigate(`/Emailvb/${vbillID}`);
  
  const handleDeleteClick = (billID) => {
    if (window.confirm("Do you want to delete?")) {
      BillService.deleteBillById(billID)
        .then(() => {
          console.log("Bill deleted");
          navigate('/Bills');
        })
        .catch((error) => {
          console.error('Error deleting the bill:', error);
        });
    } else {
      console.log("Bill not deleted");
    }
  };

  useEffect(() => {
    const fetchBillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/bill/getBill`);
        if (!response.ok) throw new Error('Failed to fetch bill data');
        const sortedBill = await response.json();
        
        setBill(sortedBill);
      } catch (error) {
        console.error('Error fetching bill data:', error);
      }
    };

    fetchBillDetails();
  }, []);
  
  const handleEditClick1 = (VbillID) => navigate(`/VendorBillEditing/${VbillID}`);
  
  const handleDeleteClick1 = (VbillID) => {
    if (window.confirm("Do you want to delete?")) {
      VendorBillService.deleteVBillById(VbillID)
        .then(() => {
          console.log("Vendor Bill deleted");
          navigate('/Bills');
        })
        .catch((error) => {
          console.error('Error deleting the vendor bill:', error);
        });
    } else {
      console.log("Vendor bill not deleted");
    }
  };

  useEffect(() => {
    const fetchVBillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/vBill/getVBill`);
        if (!response.ok) throw new Error('Failed to fetch vendor bill data');
        const sortedVBill = await response.json();
        
        setVenderBill(sortedVBill );
      } catch (error) {
        console.error('Error fetching vendor bill data:', error);
      }
    };

    fetchVBillDetails();
  }, []);

  useEffect(() => {
    calculateQuantity(venderbill);
  }, [date, venderbill]);

  const calculateQuantity = (venderbill) => {
    let total = 0;

    venderbill.forEach(venderbill => {
      if (date === venderbill.date) {
        total += venderbill.totalAmount;
      }
    });

    setSums(total);
  };

  useEffect(() => {
    calculateQuantities(bill);
  }, [date, bill]);

  const calculateQuantities = (bill) => {
    let total = 0;

    bill.forEach(bill => {
      if (date === bill.date) {
        total += bill.totalAmount;
      }
    });

    setQuantities(total);
  };

  useEffect(() => {
    calculateProfit(bill,venderbill);
  }, [bill,venderbill]);

  const calculateProfit = (bill,venderbill) => {
    let profit=(quantities - sums)
    setProfit(profit);
  };


  return (
    <div>
      <h1 className='heading2_r'>Bill Records</h1>
      <button onClick={handleOrderClick14} className="button1_r" type="button">Add Customer</button>
      <button onClick={handleOrderClick15} className="button1_r" type="button">Add Vendor</button>

      <div>
        <h2 className="heading_2">Customer Bill Records</h2>
        <div >
          <table className='table table-bordered table-hover shadow'>
            <thead>
              <tr>
                <th className="th_4">Bill Id</th>
                <th className="th_4">Index No</th>
                <th className="th_4">Order Id</th>
                <th className="th_4">Item Id</th>
                <th className="th_4">Customer Name</th>
                <th className="th_4">Email</th>
                <th className="th_4">Item</th>
                <th className="th_4">Quantity</th>
                <th className="th_4" name='total'>Total</th>
                <th className="th_4">Paid</th>
                <th className="th_4">Balance</th>
                <th className="th_4">Date</th>
                <th className="th_4">Edit</th>
                <th className="th_4">Delete</th>
                <th className="th_4">Email</th>
              </tr>
            </thead>
            <tbody>
              {bill.map(bill => (
                <tr key={bill.id}>
                  <td>{bill.id}</td>
                  <td>{bill.indexNo}</td>
                  <td>{bill.orderId}</td>
                  <td>{bill.itemId}</td>
                  <td>{bill.customerName}</td>
                  <td>{bill.email}</td>
                  <td>{bill.itemName}</td>
                  <td>{bill.quantity}</td>
                  <td>{bill.totalAmount}</td>
                  <td>{bill.cash}</td>
                  <td>{bill.balance}</td>
                  <td>{bill.dates}</td>
                  <td><button className='bt2' onClick={() => handleEditClick(bill.id)}>Edit</button></td>
                  <td><button className='bt3' onClick={() => handleDeleteClick(bill.id)}>Delete</button></td>
                  <td><button className='bt4' onClick={() => handleEmailClick(bill.id)}>Email</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div >
            <label className="Inputbill">Total amount of Customer bills:</label>
            <input type='text' name="totcustomer" value={quantities} readOnly />
          </div>
      </div>

      <div>
        <h2 className="heading_2">Vendor Bill Records</h2>
        <div>
          <table className='table table-bordered table-hover shadow'>
            <thead>
              <tr>
                <th className="th_4">Bill Id</th>
                <th className="th_4">Vendor Id</th>
                <th className="th_4">NIC</th>
                <th className="th_4">Item Id</th>
                <th className="th_4">Vendor Name</th>
                <th className="th_4">Email</th>
                <th className="th_4">Item</th>
                <th className="th_4">Quantity</th>
                <th className="th_4">Total</th>
                <th className="th_4">Paid</th>
                <th className="th_4">Balance</th>
                <th className="th_4">Date</th>
                <th className="th_4">Edit</th>
                <th className="th_4">Delete</th>
                <th className="th_4">Email</th>
              </tr>
            </thead>
            <tbody>
              {venderbill.map(venderbill => (
                <tr key={venderbill.vb_id}>
                  <td>{venderbill.vb_id}</td>
                  <td>{venderbill.vendorId}</td>
                  <td>{venderbill.vendornic}</td>
                  <td>{venderbill.itemId}</td>
                  <td>{venderbill.vendorName}</td>
                  <td>{venderbill.email}</td>
                  <td>{venderbill.itemName}</td>
                  <td>{venderbill.quantity}</td>
                  <td>{venderbill.totalAmount}</td>
                  <td>{venderbill.cash}</td>
                  <td>{venderbill.balance}</td>
                  <td>{venderbill.dates}</td>
                  <td><button className='bt2' onClick={() => handleEditClick1(venderbill.vb_id)}>Edit</button></td>
                  <td><button className='bt3' onClick={() => handleDeleteClick1(venderbill.vb_id)}>Delete</button></td>
                  <td><button className='bt4' onClick={() => handleEmailClick1(venderbill.vb_id)}>Email</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div >
            <label className="Inputbill">Total amount of Vender bills:</label>
            <input  type='text' name="totcustomer" value={sums} readOnly />
          </div>
          <div >
            <label className="Inputbill1">The Profit Of The Day:</label>
            <input type='text' name="totcustomer" value={profit} readOnly />
          </div>
      </div>
    </div>
  );
}
