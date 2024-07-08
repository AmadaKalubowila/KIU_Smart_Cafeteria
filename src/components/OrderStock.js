import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderstockstyle.css';

function OrderStock() {
  const navigate = useNavigate(); 
  const [orders, setOrder] = useState([]);
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16)); 

    useEffect(() => {
      const fetchOrderDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/order/getOrders`);
          if (!response.ok) {
            throw new Error('Failed to fetch order data');
          }
          const orderData = await response.json();
          const sortedOrders = orderData.sort((a, b) => a.itemName.localeCompare(b.itemName));
        setOrder(sortedOrders);
        } catch (error) {
          console.error('Error fetching order data:', error);
        }
      };
  
      fetchOrderDetails();
    }, []);
  return (
    <div>
    <h1 className="heading_1">Order Stock</h1>
    <div>
    <h2 className="heading_2">Rice & Curry</h2>
    <div className="Box_1">
    <table border="1" className="Tablestructure">
        <thead>
        <tr>
        <th className="th_1">Order Id</th>
        <th className="th_1">Index no</th>
        <th className="th_1">Customer Name</th>
        <th className="th_1">Date</th>
        <th className="th_1">Batch No</th>
        <th className="th_1">Item</th>
        <th className="th_1">Quantity</th>
        <th className="th_1">Status</th>
        </tr>
        </thead>
        <tbody>
        {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.indexNo}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.batchNo}</td>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
              </tr>
            ))}
    </tbody>
    </table>
    </div>
    <table  class="Tablestructure">
        <th ><h3 className="heading_3">Quantity</h3></th>
        <th ><h3 className="heading_3">Full Count</h3></th>
        <tr>
            <td>
                <ul >
                    <li className="list1">Chicken:<input className="Input1"></input></li>
                    <li className="list1">Egg:<input className="Input2"></input></li>
                    <li className="list1">Vegetable:<input className="Input3"></input></li>
                    <li className="list1">Mix<input className="Input4"></input></li>

                    <li className="list1">Chicken:<input className="Input1"></input></li>
                    <li className="list1">Egg:<input className="Input2"></input></li>
                    <li className="list1">Vegetable:<input className="Input3"></input></li>
                    <li className="list1">Mix:<input className="Input4"></input></li>

                    <li className="list1">Chicken:<input className="Input1"></input></li>
                    <li className="list1">Egg:<input className="Input2"></input></li>
                    <li className="list1">Vegetable:<input className="Input3"></input></li>
                    <li className="list1">Mix:<input className="Input4"></input></li>

                    <li className="list1">Pasta:<input className="Input1"></input></li>
                    <li className="list1">Parata:<input className="Input2"></input></li>
                    <li className="list1">Noodles:<input className="Input3"></input></li>
                    <li className="list1">String Hoppers:<input className="Input4"></input></li>
                </ul>
            </td>
            <td>
                <ul>
                    <li className="list1">Chicken:<input className="Input1"></input></li>
                    <li className="list1">Egg:<input className="Input2"></input></li>
                    <li className="list1">Vegetable:<input className="Input3"></input></li>
                    <li className="list1">Mix:<input className="Input4"></input></li>

                    <li className="list1">Chicken:<input className="Input1"></input></li>
                    <li className="list1">Egg:<input className="Input2"></input></li>
                    <li className="list1">Vegetable:<input className="Input3"></input></li>
                    <li className="list1">Mix:<input className="Input4"></input></li>

                    <li className="list1">Chicken:<input className="Input1"></input></li>
                    <li className="list1">Egg:<input className="Input2"></input></li>
                    <li className="list1">Vegetable:<input className="Input3"></input></li>
                    <li className="list1">Mix:<input className="Input4"></input></li>

                    <li className="list1">Pasta:<input className="Input1"></input></li>
                    <li className="list1">Parata:<input className="Input2"></input></li>
                    <li className="list1">Noodles:<input className="Input3"></input></li>
                    <li className="list1">String Hoppers:<input className="Input4"></input></li>


                </ul>
            </td>
        </tr>
    </table>


    </div>
            

    
    


</div>
  )
}
export default OrderStock;
