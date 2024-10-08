import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate, useParams } from 'react-router-dom';
import './email.css';

export const Contact3 = () => {
  const { vbillID} = useParams();
  const navigate = useNavigate();
  const [venderbill, setVenderbill] = useState(null); 
  const subject = "KIU Smart Cafeteria";
  const form = useRef();


  const handleSubmit = () => navigate("/Bills");

  useEffect(() => {
    const fetchBillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/vBill/getVendorBillByBillID/${vbillID}`);
        if (!response.ok){ 
          
          throw new Error('Failed to fetch Bill data');}
        const fetchedBill = await response.json();
        setVenderbill(fetchedBill);
      } catch (error) {
       
        console.error('Error fetching Bill data:', error);
      }
    };

    fetchBillDetails();
  }, [vbillID]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61a4ztg', 'template_kjhm56n', form.current, 'Zo8YiWZzVOm5JgP7y')
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
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
      
        <h1 className='headingem'>Your Bill Token</h1>
      {venderbill ? (
        <form ref={form} onSubmit={sendEmail}>
         <div className='fo3'>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Name</label>
          
          <input className='form-control col-sm-6'  type="text" name="user_name" value={subject} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Email</label>
         
          <input className='form-control col-sm-6'   type="email" name="useremail" value={venderbill.email || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Bill Id</label>
          
          <input className='form-control col-sm-6'   name="message1" value={venderbill.vb_id || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label className='input-group-text'>Item Name</label>
         
          <input className='form-control col-sm-6'   name="message2" value={venderbill.itemName || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label  className='input-group-text'>Quantity</label>
         
          <input className='form-control col-sm-6'   name="message3" value={venderbill.quantity || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label  className='input-group-text'>Total Amount</label>
          
          <input className='form-control col-sm-6'   name="message4" value={venderbill.totalAmount || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label  className='input-group-text'>Your Pay Amount</label>
          
          <input className='form-control col-sm-6'   name="message5" value={venderbill.cash || ''} readOnly />
         </div>
          <div className='input-group mb-5'>
          <label  className='input-group-text'>Balance</label>
          
          <input className='form-control col-sm-6'   name="message6" value={venderbill.balance || ''} readOnly />
          </div>
          <div className='input-group mb-5'>
          <label  className='input-group-text'>Order date</label>
         
          <input className='form-control col-sm-6'   name="message7" value={venderbill.dates || ''} readOnly />
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

export default Contact3;
