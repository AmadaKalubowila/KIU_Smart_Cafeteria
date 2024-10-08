import React, { useState, useEffect } from 'react';
import './orderpart1.css';
import { useNavigate } from 'react-router-dom';
import BillService from '../OrderService/BillService';

function BillingForm() {
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();
  const [orders, setOrders] = useState({});
  const [product, setProduct] = useState({});
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payAmount, setPayAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [id, setId] = useState('');

  const handleinput = (event) => {
    const { name, value } = event.target;
    if (name == 'indexno') {
      setUserID(value);
    }
    if (name == 'orderno') {
      setId(value);
    }
   
  };
  
  const handleEnterClick = async (userID,id) => {
    console.log(userID)
    console.log(id)
    if (userID && id) {
      try {
        const vendorResponse = await fetch(`http://localhost:8080/api/order/getOrderByOrderIDAndIndex/${id}/${userID}`);
        if (!vendorResponse.ok) {          
          throw new Error('Failed to fetch user data');
        }
        const ordersData = await vendorResponse.json();
        setOrders(ordersData);
      } catch (error) {
          console.error('Error fetching order data:', error);
      }
    };
  }

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (orders.itemName) {
        try {
          const response = await fetch(`http://localhost:8080/api/v/Item/getProductByName/${orders.itemName}`);
          if (!response.ok) {          
            throw new Error('Failed to fetch Item data');
          }
          const productData = await response.json();
          setProduct(productData);
        } catch (error) {
            console.error('Error fetching item data:', error);
        }
      }
    };
console.log(product)
    fetchProductDetails();
  }, [orders.itemName]);

  useEffect(() => {
    if (orders.quantity && product.price) {
      setTotalAmount(orders.quantity * product.price);
    }
  }, [orders.quantity, product.price]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const payAmountValue = parseFloat(payAmount);
    const totalAmountValue = parseFloat(totalAmount);
    const balanceValue = parseFloat(calc2());

    const billData = {
      indexNo: orders.indexNo,
      orderId: orders.id,
      itemId: product.itemId,
      customerName: orders.customerName,
      email: orders.email,
      itemName: product.name,
      quantity: orders.quantity,
      dates: datetime,
      totalAmount: totalAmount,
      cash: payAmount,
      date:date,
      balance: calc2(),
    };
    console.log(billData); 
    BillService.submitBill(billData)
      .then(() => {
        alert("Succseefully submitted the customer bill.")
        navigate('/Bills');
      })
      .catch((error) => {
       
        console.error('There was an error submitting the form!', error);
        
      });
  };

  return (
    <div>
      <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h1 className="heading">Billing Form Customer</h1>
        <form onSubmit={handleSubmit}>
         <div className='input-group mb-5'>
                  <label className='input-group-text'>Index No</label>
                
                    <input className='form-control col-sm-6' type="text" name="indexno" value={userID} onChange={handleinput}/>
                  </div>
            
                  <div className='input-group mb-5'>
                  <label className='input-group-text'>Order No</label>
           
                    <input className='form-control col-sm-6' type="text" name="orderno" value={id} onChange={handleinput} />
                
                <button className='password2' onClick={() => handleEnterClick(userID,id)}>Enter</button>
                </div>
            <div className='input-group mb-5'>
                  <label className='input-group-text'>Item No</label>
             
                    <input className='form-control col-sm-6' type="text" name="itemno" defaultValue={product.itemId} readOnly />
                  </div>
            <div className='input-group mb-5'>
                  <label className='input-group-text'>Customer Name</label>
              
                    <input className='form-control col-sm-6' type="text" name="cuname" defaultValue={orders.customerName} readOnly />
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Email</label>
              
                    <input className='form-control col-sm-6' type="text" name="email" defaultValue={orders.email} readOnly />
                  </div>
           <div className='input-group mb-5'>
                  <label className='input-group-text'>Item Name</label>
                
                    <input className='form-control col-sm-6' type="text" name="iname" defaultValue={product.name} readOnly />
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Quantity</label>
                
                    <input className='form-control col-sm-6' type="text" name="qty" defaultValue={orders.quantity} readOnly />
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Date And Time</label>
            
                    <input className='form-control col-sm-6' type="date" name="date" defaultValue={orders.dates} readOnly />
                  </div>
               <div className='input-group mb-5'>
                  <label className='input-group-text'>Total Amount</label>
                
                    <input className='form-control col-sm-6' type="text" name="tamount" value={totalAmount} readOnly />
                  </div>
               <div className='input-group mb-5'>
                  <label className='input-group-text'>Pay Amount</label>
               
                    <input className='form-control col-sm-6' type="number" name="pamount" id="pamount" value={payAmount} onChange={handlePayAmountChange} />
                  </div>
             <div className='input-group mb-5'>
                  <label className='input-group-text'>Balance</label>
                
                    <input className='form-control col-sm-6' type="number" name="balance" value={calc2()} readOnly />
                  </div>
            
          <button className="button1" id="b1" type="submit"onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BillingForm;
