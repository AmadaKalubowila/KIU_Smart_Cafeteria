import React, { useState, useEffect } from 'react';
import './orderpart1.css';
import { useParams, useNavigate } from 'react-router-dom';
import BillService from '../OrderService/BillService';

function BillingFormEdit() {
  const { billID } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState({});
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [payAmount, setPayAmount] = useState('');
  
  useEffect(() => {
    const fetchBillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/bill/getBillByBillID/${billID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bill data');
        }
        const billData = await response.json();
        setBill(billData);
      } catch (error) {        
        console.error('Error fetching bill data:', error);
      }
    };

    fetchBillDetails();
  }, [billID]);

  const calcBalance = () => {
    const payAmountValue = parseFloat(payAmount);
    const totalAmountValue = parseFloat(bill.totalAmount);
    if (!isNaN(payAmountValue) && !isNaN(totalAmountValue)) {
      return (payAmountValue - totalAmountValue).toFixed(2);
    }
    return 0;
  };

  const handlePayAmountChange = (event) => {
    setPayAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const BillingData = {
      id: bill.id,
      indexNo: bill.indexNo,
      orderId: bill.orderId,
      itemId: bill.itemId,
      customerName: bill.customerName,
      email: bill.email,
      itemName: bill.itemName,
      quantity: bill.quantity,
      dates: new Date().toISOString(),
      totalAmount: bill.totalAmount,
      cash: parseFloat(payAmount),
      balance: parseFloat(calcBalance()),
    };

    BillService.updateBill(billID, BillingData)
      .then(() => {
        alert("Successfull Edited Customer Bill");
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
        <h1 className="heading">Update Billing Form Customer</h1>
        <form onSubmit={handleSubmit}>
          
                <div className='input-group mb-5'>
                <label className='input-group-text'>Bill No</label>
                <input className='form-control col-sm-6' type="text" name="index no" defaultValue={bill.id} readOnly/></div>
              
                <div className='input-group mb-5'>
                <label className='input-group-text'>Index No</label>
                <input  className='form-control col-sm-6' type="text" name="index no" defaultValue={bill.indexNo} readOnly/></div>
              
                <div className='input-group mb-5'>
                <label className='input-group-text'>Order NO</label>
               <input className='form-control col-sm-6' type="text" name="orderno" defaultValue={bill.orderId} readOnly /></div>
              
                <div className='input-group mb-5'>
                <label className='input-group-text'>Item No</label>
                <input className='form-control col-sm-6' type="text" name="itemno" defaultValue={bill.itemId} readOnly /></div>
              
                <div className='input-group mb-5'>
               <label className='input-group-text'>Customer Name</label>
               <input className='form-control col-sm-6' type="text" name="cuname" defaultValue={bill.customerName} readOnly /></div>
             
                <div className='input-group mb-5'>
                <label className='input-group-text'>Email</label>
                <input  className='form-control col-sm-6' type="text" name="email" defaultValue={bill.email} readOnly /></div>
              
                <div className='input-group mb-5'>
                <label className='input-group-text'>Item Name</label>
               <input className='form-control col-sm-6' type="text" name="iname" defaultValue={bill.itemName} readOnly/></div>
              
                <div className='input-group mb-5'>
                <label className='input-group-text'>Quantity</label>
                <input className='form-control col-sm-6' type="text" name="qty" defaultValue={bill.quantity} readOnly  /></div>
             
                <div className='input-group mb-5'>
               <label className='input-group-text'>Date And Time</label>
                <input className='form-control col-sm-6' type="date" name="date" defaultValue={date} readOnly /></div>
             
                <div className='input-group mb-5'>
                <label className='input-group-text'>Total Amount</label>
                <input className='form-control col-sm-6' type="text" name="tamount" defaultValue={bill.totalAmount} readOnly /></div>
              
                <div className='input-group mb-5'>
                <label className='input-group-text'>Pay Amount</label>
                <input  className='form-control col-sm-6'type="text" name="pamount" value={payAmount} onChange={handlePayAmountChange} /></div>
             
                <div className='input-group mb-5'>
                <label className='input-group-text'>Balance</label>
                <input className='form-control col-sm-6' type="text" name="bamount" value={calcBalance()} readOnly /></div>
             
          <button className="button1" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BillingFormEdit;
