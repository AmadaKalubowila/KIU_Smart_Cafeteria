import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate, useParams } from 'react-router-dom';
import './email.css';

export const Contact = () => {
  const { ordersID, userID } = useParams();
  const navigate = useNavigate();
  const [orders, setOrders] = useState(null); 
  const subject = "KIU Smart Cafeteria";
  const form = useRef();


  const handleSubmit = () => navigate(`/MainHome/${userID}`);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/order/getOrderByOrderIDAndIndex/${ordersID}/${userID}`);
        if (!response.ok){
          
          throw new Error('Failed to fetch order data');}
        const fetchedOrder = await response.json();
        setOrders(fetchedOrder);
      } catch (error) {
        
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderDetails();
  }, [ordersID, userID]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0iz7df', 'template_9bbq0a4', form.current, 'lwmKZamOfqORQl9jP')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
          handleSubmit();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
    e.target.reset();
  };

  return (
    <div className="Boxem2">
      
        <h1 className='headingem'>Your Order Token</h1>
      {orders ? (
        <form ref={form} onSubmit={sendEmail}>
        <div className='fo3'>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Name</label>
         
          <input  className='form-control col-sm-6' type="text" name="user_name" value={subject} readOnly />
          </div>
          <div className='input-group mb-5' >
          <label className='input-group-text'>Email</label>
          
          <input className='form-control col-sm-6'  type="email" name="useremail" value={orders.email || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Order Id</label>
         
          <input className='form-control col-sm-6'  name="message1" value={orders.id || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Item Name</label>
        
          <input className='form-control col-sm-6'  name="message2" value={orders.itemName || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Quantity</label>
         
          <input className='form-control col-sm-6'  name="message3" value={orders.quantity || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Order date</label>
          
          <input className='form-control col-sm-6' name="message4" value={orders.date || ''} readOnly />
          </div>
          
          <button  className="buttonem"type="submit">Send Message</button>
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
      
      </div>
   
  );
};

export default Contact;
