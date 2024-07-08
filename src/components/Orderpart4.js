import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderpart1.css';
import OrderService from '../OrderService/OrderService';

function Orderpart4() {
  const { userID } = useParams(); 
  const navigate = useNavigate(); 
  const [user, setUser] = useState({});
  const [quantity, setQuantity] = useState(1); 
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));
  const[date,setDate]=useState(new Date().toISOString().split('T')[0],)
  const [product, setProduct] = useState('Fried Rice'); 

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/user/getUserByUserId/${userID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDetails();
  }, [userID]);

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
    const orderData = {
      indexNo: user.id,
      customerName: user.name,
      batchNo: user.batch_no,
      itemName: product,
      quantity,
      date: datetime,
      dates:date,
    };

    OrderService.submitOrder(orderData)
      .then(() => {
        navigate('/Ordersucsses');
      })
      .catch((error) => {
        console.error('There was an error submitting the order!', error);
      });
  };
  const handleadmin = (event) => {
    event.preventDefault();
    
    
  };


  return (
    <div>
      <div className="Box1">
        <h1 className="heading">Online Order</h1>
        <form onSubmit={handleSubmit}>
          <table className="Structure">
            <tbody>
              <tr>
                <td>
                  <label className="label_structure">Index No</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="id" defaultValue={user.id} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Customer Name</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="cname" defaultValue={user.name} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Batch no</label>
                </td>
                <td>
                  <div className="field_structure">
                    <input type="text" name="batch_no" defaultValue={user.batch_no} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Item Name</label>
                </td>
                <td>
                  <div className="field_structure">
                    <select name="product" value={product} onChange={handleChange}>
                      <option value="Fried Rice">Fried Rice - Chicken</option>
                      <option value="Egg Fried Rice">Fried Rice - Egg</option>
                      <option value="Vegetable Fried Rice">Fried Rice - Vegetable</option>
                      <option value="Mix Fried Rice">Fried Rice - Mix</option>
                      <option value="Chicken Rice">Rice & Curry - Chicken</option>
                      <option value="Vegetable Rice">Rice & Curry - Vegetable</option>
                      <option value="Fish Rice">Rice & Curry - Fish</option>
                      <option value="Egg Rice">Rice & Curry - Egg</option>
                      <option value="Egg Kottu">Kottu - Egg</option>
                      <option value="Chicken Kottu">Kottu - Chicken</option>
                      <option value="Vegetable Kottu">Kottu -Vegetable</option>
                      <option value="Mix Kottu">Kottu - Mix</option>
                      <option value="Pasta">Other - Pasta</option>
                      <option value="Noodles">Other - Noodles</option>
                      <option value="Parata">Other - Parata</option>
                      <option value="String Hoppers">Other - String Hoppers</option>
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
                    <input type="number" name="quantity" value={quantity} onChange={handleChange} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label_structure">Date and Time</label>
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
      <button  onClick={() => {handleSubmit();handleadmin();}} className="button1" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Orderpart4;
