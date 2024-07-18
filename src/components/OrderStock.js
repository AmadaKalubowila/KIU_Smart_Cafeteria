import React, { useState, useEffect } from 'react';
import './orderstockstyle.css';

function OrderStock() {
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [quantities, setQuantities] = useState({
    friedRiceChicken: 0,
    friedRiceEgg: 0,
    friedRiceVegetable: 0,
    friedRiceMix: 0,
    pasta: 0,
    parata: 0,
    noodles: 0,
    stringHoppers: 0,
    riceCurryChicken: 0,
    riceCurryEgg: 0,
    riceCurryVegetable: 0,
    riceCurryMix: 0,
    kottuChicken: 0,
    kottuEgg: 0,
    kottuVegetable: 0,
    kottuMix: 0,
  });

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/order/getOrders');
        if (!response.ok) {
          throw new Error('Failed to fetch order data');
        }
        const orderData = await response.json();
        const sortedOrders = orderData.sort((a, b) => a.itemName.localeCompare(b.itemName));
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
    const quantities = {
      friedRiceChicken: 0,
      friedRiceEgg: 0,
      friedRiceVegetable: 0,
      friedRiceMix: 0,
      pasta: 0,
      parata: 0,
      noodles: 0,
      stringHoppers: 0,
      riceCurryChicken: 0,
      riceCurryEgg: 0,
      riceCurryVegetable: 0,
      riceCurryMix: 0,
      kottuChicken: 0,
      kottuEgg: 0,
      kottuVegetable: 0,
      kottuMix: 0,
    };

    orders.forEach(order => {
      if (date === order.dates) {
        switch (order.itemName) {
          case 'Fried Rice':
            quantities.friedRiceChicken += order.quantity;
            break;
          case 'Egg Fried Rice':
            quantities.friedRiceEgg += order.quantity;
            break;
          case 'Vegetable Fried Rice':
            quantities.friedRiceVegetable += order.quantity;
            break;
          case 'Mix Fried Rice':
            quantities.friedRiceMix += order.quantity;
            break;
          case 'Pasta':
            quantities.pasta += order.quantity;
            break;
          case 'Parata':
            quantities.parata += order.quantity;
            break;
          case 'Noodles':
            quantities.noodles += order.quantity;
            break;
          case 'String Hoppers':
            quantities.stringHoppers += order.quantity;
            break;
          case 'Chicken Rice':
            quantities.riceCurryChicken += order.quantity;
            break;
          case 'Egg Rice':
            quantities.riceCurryEgg += order.quantity;
            break;
          case 'Vegetable Rice':
            quantities.riceCurryVegetable += order.quantity;
            break;
          case 'Mix Rice':
            quantities.riceCurryMix += order.quantity;
            break;
          case 'Chicken Kottu':
            quantities.kottuChicken += order.quantity;
            break;
          case 'Egg Kottu':
            quantities.kottuEgg += order.quantity;
            break;
          case 'Vegetable Kottu':
            quantities.kottuVegetable += order.quantity;
            break;
          case 'Mix Kottu':
            quantities.kottuMix += order.quantity;
            break;
          default:
            break;
        }
      }
    });

    setQuantities(quantities);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const btnClick = (e) => {
    e.target.innerText="Done";
  };

  return (
    <div>
      <h1 className="heading_1">Order Stock</h1>
      <div>
        <h2 className="heading_2">Order History</h2>
        
        <div className="Box_1">
          <table border="1" className="Tablestructure">
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
                  <td><button id="bt1" onClick={btnClick}>Pending</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <table className="Tablestructure">
          <thead>
            <tr>
              <th><h3 className="heading_3">Full Count</h3></th>
              <th><h3 className="heading_3">Quantity</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li className="list1">Fried Rice - Chicken: <input className="Input1" value={quantities.friedRiceChicken}  readOnly /></li>
                  <li className="list1">Fried Rice - Egg: <input className="Input2" value={quantities.friedRiceEgg} readOnly /></li>
                  <li className="list1">Fried Rice - Vegetable: <input className="Input3" value={quantities.friedRiceVegetable} readOnly /></li>
                  <li className="list1">Fried Rice - Mix: <input className="Input4" value={quantities.friedRiceMix} readOnly /></li>

                  <li className="list1">Pasta: <input className="Input13" value={quantities.pasta} readOnly /></li>
                  <li className="list1">Parata: <input className="Input14" value={quantities.parata} readOnly /></li>
                  <li className="list1">Noodles: <input className="Input15" value={quantities.noodles} readOnly /></li>
                  <li className="list1">String Hoppers: <input className="Input16" value={quantities.stringHoppers} readOnly /></li>

                  <li className="list1">Rice & Curry - Chicken: <input className="Input5" value={quantities.riceCurryChicken} readOnly /></li>
                  <li className="list1">Rice & Curry - Egg: <input className="Input6" value={quantities.riceCurryEgg} readOnly /></li>
                  <li className="list1">Rice & Curry - Vegetable: <input className="Input7" value={quantities.riceCurryVegetable} readOnly /></li>
                  <li className="list1">Rice & Curry - Mix: <input className="Input8" value={quantities.riceCurryMix} readOnly /></li>

                  <li className="list1">Kottu - Chicken: <input className="Input9" value={quantities.kottuChicken} readOnly /></li>
                  <li className="list1">Kottu - Egg: <input className="Input10" value={quantities.kottuEgg} readOnly /></li>
                  <li className="list1">Kottu - Vegetable: <input className="Input11" value={quantities.kottuVegetable} readOnly /></li>
                  <li className="list1">Kottu - Mix: <input className="Input12" value={quantities.kottuMix} readOnly /></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderStock;
