import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderpart1.css';
import OrderService from '../OrderService/OrderService';

function Orderpart2() {
  const { ordersID } = useParams(); 
  const{ userID } = useParams();
  const navigate = useNavigate(); 
  const [orders, setOrders] = useState({});
  const [quantity, setQuantity] = useState(1); 
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16)); 
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

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/order/getOrderByOrderID/${ordersID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch order data');
        }
        const ordersData = await response.json();
        setOrders(ordersData);
        setSelectedItem(ordersData.itemName); 
        setQuantity(ordersData.quantity);
      } catch (error) {
        
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderDetails();
  }, [ordersID]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'quantity') {
      const numericValue = parseInt(value, 10);
      if (numericValue >= 1) {
        setQuantity(numericValue);
      }
    } else if (name === 'product') {
      setSelectedItem(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderingData = {
      id: orders.id,
      indexNo: orders.indexNo,
      customerName: orders.customerName,
      batchNo: orders.batchNo,
      itemName: selectedItem,
      email:orders.email,
      quantity,
      date: datetime,
      status:0
    };
console.log(orderingData)
    OrderService.updateOrder(ordersID, orderingData)
      .then(() => {
        alert("Successfully editted order");
        navigate(`/Ordersucsses/${userID}`);
      })
      .catch((error) => {
        console.error('There was an error submitting the order!', error);
        alert("Invalid inputs");
      });
  };

  return (
    <div>
      <div className="Box1">
        <h1 className="heading">Update Order</h1>
        <form onSubmit={handleSubmit}>
         <div className='fo1'>
          <div  className='input-group mb-5'>
                  <label className='input-group-text'>Index No</label>
                
                    <input className='form-control col-sm-6' type="text" name="indexNo" value={orders.indexNo || ''} readOnly />
                  </div>
              <div  className='input-group mb-5'>
                  <label className='input-group-text'>Customer Name</label>
               
                    <input className='form-control col-sm-6' type="text" name="customerName" value={orders.customerName || ''} readOnly />
                  </div>
              <div  className='input-group mb-5'>
                  <label className='input-group-text'>Batch No</label>
                
              
                    <input className='form-control col-sm-6' type="text" name="batchNo" value={orders.batchNo || ''} readOnly />
                  </div>
              <div  className='input-group mb-5'>
                  <label className='input-group-text'>Item Name</label>
          
                    <select className='form-control col-sm-6' name="product" value={selectedItem} onChange={handleChange}>
                    <option value="" disabled selected>---Select Your Item---</option>
                      {itemStock.map((item) => (
                        <option key={item.item_id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
              <div  className='input-group mb-5'>
                  <label className='input-group-text'>Quantity</label>
               
                    <input className='form-control col-sm-6' type="number" name="quantity" value={quantity} onChange={handleChange} />
                  </div>
              <div  className='input-group mb-5'>
                  <label className='input-group-text'>Date</label>
                
                    <input  className='form-control col-sm-6' type="datetime-local" name="datetime" value={datetime} readOnly />
                  </div>
     
          <button className="button1" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Orderpart2;
