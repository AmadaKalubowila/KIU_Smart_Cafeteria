import React, { useState, useEffect } from 'react';
import './orderstockstyle.css';
import OrderService from '../OrderService/OrderService';

function OrderStock() {
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [quantities, setQuantities] = useState({});
  const [orderc, setOrderc] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/order/getOrders');
        if (!response.ok) {
          throw new Error('Failed to fetch order data');
        }
        const orderData = await response.json();
        const sortedOrders = orderData.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setOrders(sortedOrders);
        calculateQuantities(sortedOrders);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderDetails();
  }, []);

  useEffect(() => {
    calculateQuantities(orders);
  }, [date, orders]);

  const calculateQuantities = (orders) => {
    const quantities = {};

    orders.forEach(order => {
      if (date === order.dates) {
        const itemName = order.itemName;
        if (!quantities[itemName]) {
          quantities[itemName] = 0;
        }
        quantities[itemName] += order.quantity;
      }
    });

    setQuantities(quantities);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const btnClick = (e) => {
    e.target.innerText = "Done";
  };

  const handleSubmitClick = async (orderid, order) => {
    
    const oderingData = {
      id:orderid,
      indexNo: order.indexNo,
      customerName: order.customerName,
      batchNo: order.batchNo,
      itemName: order.itemName,
      quantity:order.quantity,
      date:order.date,
      dates:order.date,
      email: order.email,
      status:1
    };
    console.log(oderingData)
    if (orderid) {
      try {
        
        await OrderService.updateorder(orderid, oderingData)
        const orderResponse = await fetch(`http://localhost:8080/api/order/getOrderByOrderID/${orderid}`);
        if (!orderResponse.ok) {
          throw new Error('Failed to fetch order data');
        }
        const updatedOrder = await orderResponse.json();
      setOrderc(updatedOrder);
      setOrders(prevOrders => 
        prevOrders.map(o => o.id === orderid ? updatedOrder : o)
      );
      } catch (error) {
        console.error('Error fetching order data:', error);
        
      }
    };
  }


  return (
    <div>
      <h1 className="heading_1">Order Stock</h1>
      <div>
        <h2 className="heading_2">Order History</h2>
        
        <div>
          <table className='table table-bordered table-hover shadow'>
            <thead>
              <tr>
                <th className="th_1">Order Id</th>
                <th className="th_1">Index no</th>
                <th className="th_1">Customer Name</th>
                <th className="th_2">Date</th>
                <th className="th_1">Batch No</th>
                <th className="th_1">Item</th>
                <th className="th_1">Quantity</th>
                <th className="th_2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td className='th_3'>{order.id}</td>
                  <td>{order.indexNo}</td>
                  <td>{order.customerName}</td>
                  <td>{order.date}</td>
                  <td className='th_3'>{order.batchNo}</td>
                  <td>{order.itemName}</td>
                  <td className='th_3'>{order.quantity}</td>
                  <td><button id="bt1" onClick={() => handleSubmitClick(order.id,order)}>{order.status === 1 ? "Done" : "Pending"}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <table className="Tablestructure">
          <thead>
            <tr>
              <th><h3 className="heading_3">Full Count</h3></th>
             
            </tr>
          </thead>
          <tbody>
            {Object.entries(quantities).map(([itemName, quantity]) => (
              <tr key={itemName}>
                <td>
                  <ul>
                    <li className="list1">{itemName}: <input className="Input" value={quantity} readOnly /></li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
     
    </div>
  );

}
export default OrderStock;
