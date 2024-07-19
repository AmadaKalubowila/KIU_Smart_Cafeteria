import React, { useState,userEffect} from 'react';
import './BillingForm.css';


const BillingForm = () => {
  const [formData, setFormData] = useState({
    billNo: '',
    indexNo: '',
    orderId: '',
    itemId: '',
    customerName: '',
    email: '',
    itemName: '',
    quantity: '',
    dateAndTime: '',
    totalAmount: '',
    cash: '',
    change: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='header'>
     <center>
     <h2>Billing Form (Customer)</h2>      </center>

      <div className="form-container" >
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <div key={field} className="form-group">
              <label className="form-label">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          ))}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
