import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderpart1.css';
import OrderService from '../OrderService/OrderService';

function Orderpart2() {
  const { ordersID } = useParams(); 
  const navigate = useNavigate(); 
  const [orders, setOrders] = useState({});
  const [quantity, setQuantity] = useState(1); 
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16)); 
  const [product, setProduct] = useState('Fried Rice'); 

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/order/getOrderByOrderID/${ordersID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Order data');
        }
        const ordersData = await response.json();
        setOrders(ordersData);
        setProduct(ordersData.itemName); 
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
      setProduct(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderingData = {
        id:orders.id,
        indexNo: orders.indexNo,
        customerName: orders.customerName,
        batchNo: orders.batchNo,
        itemName: product,
        quantity,
        date:datetime
    };

    OrderService.updateOrder(ordersID,orderingData)
      .then(() => {
        navigate('/Ordersucsses');
      })
      .catch((error) => {
        console.error('There was an error submitting the order!', error);
      });
  };

  return (
    <div>
      <div className="Box1">
        <h1 className="heading">Update Order</h1>
        <form onSubmit={handleSubmit}>
          <table className="Structure">
            <tbody>
              <tr>
                <td>
                  <label className="label_structure">Index No</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="id" defaultValue={orders.indexNo} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Customer Name</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="cname"defaultValue={orders.customerName} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Batch no</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="batch_no" defaultValue={orders.batchNo} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Item Name</label>
                </td>
                <td>
                  <div className="field_structure">
                    <select name="product" defaultValue={orders.itemName} onChange={handleChange}>
                      <option value="Fried Rice">Chicken Fried Rice</option>
                      <option value="Egg Fried Rice">Egg Fried Rice</option>
                      <option value="Vegetable Fried Rice">Vegetable Fried Rice</option>
                      <option value="Mix Fried Rice">Mix Fried Rice</option>
                      <option value="Chicken Rice">Chicken Rice</option>
                      <option value="Vegetable Rice">Vegetable Rice</option>
                      <option value="Fish Rice">Fish Rice</option>
                      <option value="Egg Rice">Egg Rice</option>
                      <option value="Egg Kottu">Egg Kottu</option>
                      <option value="Chicken Kottu">Chicken Kottu</option>
                      <option value="Vegetable Kottu">Vegetable Kottu</option>
                      <option value="Mix Kottu">Mix Kottu</option>
                      <option value="Pasta">Pasta</option>
                      <option value="Noodles">Noodles</option>
                      <option value="Parata">Parata</option>
                      <option value="String Hoppers">String Hoppers</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Quantity</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="number" name="quantity" defaultValue={orders.quantity} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Date</label>
                </td>
                <td>
                  <div className="field_structure">
                  <input type="datetime-local" name="datetime" value={datetime} readOnly />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <button onClick={handleSubmit} className="button1" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Orderpart2;
