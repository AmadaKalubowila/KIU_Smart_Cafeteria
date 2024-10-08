import React, { useState, useEffect } from 'react';
import './orderpart1.css';
import { useParams, useNavigate } from 'react-router-dom';
import VendorBillService from '../OrderService/VendorBillService';

function VendorFormEdit() {
  const {VbillID} = useParams();
  const navigate = useNavigate();
  const [venderbill, setVenderBill] = useState({});
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));
  const [payAmount, setPayAmount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  
  
  useEffect(() => {
    const fetchBillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/vBill/getVendorBillByBillID/${VbillID}`);
        if (!response.ok) {
          alert("No matched data");
          throw new Error('Failed to fetch bill data');
        }
        const billData = await response.json();
        setVenderBill(billData);
      } catch (error) {
        console.error('Error fetching bill data:', error);
      }
    };

    fetchBillDetails();
  }, [VbillID]);

  useEffect(() => {
    console.log(venderbill.price)
    if (quantity && venderbill.price) {
      setTotalAmount(quantity * venderbill.price);
    }
  }, [quantity, venderbill.price]);

  const calc2 = () => {
    const payAmountValue = parseFloat(payAmount);
    const totalAmountValue = parseFloat(totalAmount);
    if (!isNaN(payAmountValue) && !isNaN(totalAmountValue)) {
      return (payAmountValue - totalAmountValue).toFixed(2);
    }
    return 0;
  };

  const handlePayAmountChange = (event) => {
    setPayAmount(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
   
    if (name === 'qty') {
      setQuantity(value);
    }
  };



 
  const handleSubmit = (event) => {
    event.preventDefault();
    const BillingData = {
      vb_id:venderbill.vb_id,
      vendorId:venderbill.vendorId,
      vendornic:venderbill.vendornic,
      vendorName: venderbill.vendorName,
      itemId: venderbill.itemId,
      email: venderbill.email,
      price:venderbill.price,
      itemName:venderbill.itemName,
      quantity: quantity,
      dates: datetime,
      date:date,
      totalAmount: totalAmount,
      cash: payAmount,
      balance: calc2(),

  
    };
console.log(BillingData)
    VendorBillService.updateVBill(VbillID,BillingData)
      .then(() => {
        alert("Successfully editted the vender bill");
        navigate('/Bills');
      })
      .catch((error) => {
        console.error('There was an error submitting the Bill!', error);
        alert("Invalid inputs");
      });
  };

  return (
    <div>
      <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h1 className="heading">Update Billing Form Vender</h1>
        <form onSubmit={handleSubmit}>
         <div className='input-group mb-5'>
              <label className='input-group-text'> Vender Bill No</label>
              <input className='form-control col-sm-6' type="text" name="id" defaultValue={venderbill.vb_id} readOnly/></div>
              <div className='input-group mb-5'>
              <label className='input-group-text'>Vender Nic</label>
              <input className='form-control col-sm-6' type="text" name="nic" defaultValue={venderbill.vendornic} readOnly/></div>
              <div className='input-group mb-5'>
              <label className='input-group-text'>Vender Name</label>
              <input className='form-control col-sm-6' type="text" name="vendername" defaultValue={venderbill.vendorName} readOnly /></div>
             <div className='input-group mb-5'>
            <label className='input-group-text'>Item No</label>
              <input className='form-control col-sm-6' type="text" name="itemno" defaultValue={venderbill.itemId} readOnly /></div>
              <div className='input-group mb-5'>
              <label className='input-group-text'>Item Name</label>
                <input className='form-control col-sm-6' type="text" name="item" defaultValue={venderbill.itemName} readOnly /></div>
             <div className='input-group mb-5'>
             <label className='input-group-text'>Price</label>
              <input className='form-control col-sm-6' type="text" name="price" defaultValue={venderbill.price} readOnly/></div>
             
             <div className='input-group mb-5'>
              <label className='input-group-text'>Quantity</label>
              <input className='form-control col-sm-6' type="text" name="qty" defaultValue={venderbill.quantity} value={quantity} onChange={(e) => setQuantity(e.target.value)} /></div>
              <div className='input-group mb-5'>
              <label className='input-group-text'>Date And Time</label>
              <input className='form-control col-sm-6' type="date" name="date" defaultValue={venderbill.datetime} readOnly /></div>
              <div className='input-group mb-5'>
               <label className='input-group-text'>Total Amount</label>
                <input className='form-control col-sm-6' type="text" name="tamount" defaultValue={venderbill.totalAmount} value={totalAmount} readOnly /></div>
            <div className='input-group mb-5'>
            <label className='input-group-text'>Pay Amount</label>
              <input className='form-control col-sm-6' type="text" name="pamount" value={payAmount} onChange={handlePayAmountChange} /></div>
              
                <div className='input-group mb-5'>
                <label className='input-group-text'>Balance</label>
               <input className='form-control col-sm-6' type="text" name="bamount" value={calc2()} readOnly /></div>
           
          <button className="button1" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default VendorFormEdit;
