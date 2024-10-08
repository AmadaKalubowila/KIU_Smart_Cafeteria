import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './orderpart1.css';
import VendorService from '../OrderService/VendorService';

 function Venderadd() {
  const navigate = useNavigate(); 
  const [vendor, setVendor] = useState({});
  const [vname, setVname] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [contact, setContact] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] =useState(new Date().toISOString().split('T')[0]);
  const [noitems, setNoitems] = useState();
  const [product, setProduct] = useState('Fried Rice');
  const [price, setPrice] = useState('');
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'vname':
        setVname(value);
        break;
      case 'email':
          setEmail(value);
        
        break;
      case 'contact':
          setContact(value);
        break;
      case 'gender':
          setGender(value);

        break;
      case 'nic':
            setNic(value);

        break;
      case 'address':
        setAddress(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'noitems':
        setNoitems(value);
        break;
      case 'product':
        setSelectedItem(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
        const vendorData = {
          nic,
          address,
          items: selectedItem,
          contactNo: contact,
          gender:gender,
          email,
          vendorName:vname,
          noItems:noitems,
          date:date,
          price
        };
        console.log(vendorData)
        console.log("kl")
        VendorService.submitVendor(vendorData)
          .then(() => {
            alert("Successfully submitted Vender.");
            navigate('/Vendor');
          })
          .catch((error) => {
            console.error('There was an error submitting the form!', error);
            alert("Invalid inputs");
          });
      }


  return (
    <div>
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
      <h1 className="heading"> Vendor Registeration</h1>
      <form onSubmit={handleSubmit}>
        
               <div className='input-group mb-5'>
                <label className='input-group-text'>Name</label>
                <input className='form-control col-sm-6' type="text" name="vname"  onChange={handleChange}/>
                </div>

                <div className='input-group mb-5'>
                <label  className='input-group-text'>Address</label>
                  <input className='form-control col-sm-6' type="text" name="address" onChange={handleChange} />
                </div>
              <div className='input-group mb-5'>
                <label  className='input-group-text'>NIC</label>
                  <input  className='form-control col-sm-6' type="text" name="nic"  onChange={handleChange} placeholder='if "V" include put 0 for that' />
                </div>
            <div className='input-group mb-5'>
                <label  className='input-group-text'>Gender</label>

                 
                  <select className='form-control col-sm-6'  type="text"  name="gender" onChange={handleChange} value={gender}  >
                    <option value="" disabled selected>---Select Your Gender--</option>
                        <option >Male</option>
                        <option >Female</option>
                        <option >Other</option>
                       
                    </select>
                
                </div>
            <div className='input-group mb-5'>
                <label  className='input-group-text'>Email</label>

                  <input className='form-control col-sm-6' type="text" name="email" onChange={handleChange} placeholder='@gmail.com' />
                </div>
             <div className='input-group mb-5'>
                <label  className='input-group-text'>Contact No</label>

                  <input  className='form-control col-sm-6' type="text" name="contact"  onChange={handleChange} placeholder='only 10 digits'/>
                </div>
          <div className='input-group mb-5'>
                <label  className='input-group-text'>Date</label>

                  <input className='form-control col-sm-6' type="date" name="date"  value={date} onChange={handleChange}/>
                </div>
            <div className='input-group mb-5'>
                <label  className='input-group-text'>No Of Item</label>
                  <input className='form-control col-sm-6' type="text" name="noitems" onChange={handleChange} />
                </div>
            <div className='input-group mb-5'>
                  <label  className='input-group-text'>Item Name</label>
      
                
                    <select  className='form-control col-sm-6' name="product" value={selectedItem} onChange={handleChange}>
                      {itemStock.map((item) => (
                        <option key={item.item_id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                <div className='input-group mb-5'>
                <label  className='input-group-text'>Price</label>
                  <input className='form-control col-sm-6' type="text" name="price"  onChange={handleChange}/>
                </div>
            
      </form>
    </div>
    <button onClick={handleSubmit} className="button1" type="submit">
      Submit
    </button>



    
  </div>
  
  )
}export default Venderadd;
