import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderpart1.css';
import OrderService from '../OrderService/OrderService';

function Orderpart4() {
  const { userID ,itemID} = useParams();
  
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [itemStock, setItemStock] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const[stock,setStock]=useState({});
  

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

  useEffect(() => {
    const fetchItemStock = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v/Item/getItem`);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const itemStockData = await response.json();
        setItemStock(itemStockData);
        
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItemStock();
  }, []);

  useEffect(() => {
    const fetchItemStock = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v/Item/getItemById/${itemID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const itemStockData = await response.json();
        setStock(itemStockData);
        setSelectedItem(itemStockData.name || '');
        console.log(itemStockData.name)
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItemStock();
  }, []);

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
    const orderData = {
      indexNo: user.id,
      customerName: user.name,
      batchNo: user.batch_no,
      itemName: selectedItem,
      quantity,
      date: datetime,
      dates: date,
      email: user.email,
      status:0
    };

    OrderService.submitOrder(orderData)
      .then(() => {
        alert("Successfully placed order");
        navigate(`/Ordersucsses/${userID}`);
        console.log(orderData);
      })
      .catch((error) => {
        console.error('There was an error submitting the order!', error);
        alert("Invalid inputs");
      });
  };

  return (
    <div>
      <div className="Box1">
        <h1 className="heading">Online Order</h1>
        <form onSubmit={handleSubmit}>
        <div className='fo1'>
          <div  className='input-group mb-5'>
                  <label  className='input-group-text'>Index No</label>
               
                    <input className='form-control col-sm-6' type="text" name="id" value={user.id || ''} readOnly />
                  </div>
              <div  className='input-group mb-5'>
                  <label  className='input-group-text'>Customer Name</label>
               
                    <input className='form-control col-sm-6' type="text" name="customerName" value={user.name || ''} readOnly />
                  </div>
             <div  className='input-group mb-5'>
                  <label  className='input-group-text'>Batch no</label>
                
                    <input  className='form-control col-sm-6' type="text" name="batchNo" value={user.batch_no || ''} readOnly />
                  </div>
             <div  className='input-group mb-5'>
                  <label  className='input-group-text'>Item Name</label>
                    <select className='form-control col-sm-6' name="product" value={selectedItem}  onChange={handleChange}>
                    <option value="" disabled selected>---Select Your Item---</option>
                      {itemStock.map((item) => (
                        
                        <option key={item.item_id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
               
              <div  className='input-group mb-5'>
                  <label  className='input-group-text'>Quantity</label>
                
                    <input className='form-control col-sm-6' type="number" name="quantity" value={quantity} onChange={handleChange} />
                  </div>
              <div  className='input-group mb-5'>
                  <label  className='input-group-text'>Date and Time</label>
                
                    <input className='form-control col-sm-6' type="datetime-local" name="datetime" value={datetime} readOnly />
                  </div>
               
          <button className="button1" type="submit" >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Orderpart4;
