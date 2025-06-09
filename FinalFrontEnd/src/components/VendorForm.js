import React, { useState, useEffect } from 'react';
import './orderpart1.css';
import { useNavigate } from 'react-router-dom';
import VendorBillService from '../OrderService/VendorBillService';

function VendorForm() {
  const userID = "14633";
  const navigate = useNavigate();
  const [vendor, setVendor] = useState({});
  const [product, setProduct] = useState(null);
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));
  const [totalAmount, setTotalAmount] = useState(0);
  const [payAmount, setPayAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [VendorID, setVendorID] = useState('');
  const [itemNames, setItemNames] = useState('');
  const [quantity, setQuantity] = useState('');
  const [itemStock, setItemStock] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

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

  useEffect(() => {
    if (quantity && vendor.price) {
      setTotalAmount(quantity * vendor.price);
    }
  }, [quantity, vendor.price]);

  const calc2 = () => {
    const payAmountValue = parseFloat(payAmount);
    const totalAmountValue = parseFloat(totalAmount);
    if (!isNaN(payAmountValue) && !isNaN(totalAmountValue)) {
      return (payAmountValue - totalAmountValue).toFixed(2);
    }
    return 0;
  };

  const handlePayAmountChange = (event) => {
    setPayAmount(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'vendornic') {
      setVendorID(value);
    }
    if (name === 'product') {
      setSelectedItem(value);
    }
    if (name === 'qty') {
      setQuantity(value);
    }
  };

  const handleEnterClick = async (VendorID, itemNames) => {
    console.log(VendorID)
    console.log(selectedItem)
    if (VendorID && selectedItem) {
      try {
        const vendorResponse = await fetch(`http://localhost:8080/api/vendor/getVendorByVendorNic/${VendorID}/${selectedItem}`);
        if (!vendorResponse.ok) {
          throw new Error('Failed to fetch Vendor data');
        }
        const vendorData = await vendorResponse.json();
        setVendor(vendorData);
      
        if (selectedItem) {
          const productResponse = await fetch(`http://localhost:8080/api/v/Item/getProductByName/${selectedItem}`);
          if (!productResponse.ok) {
            throw new Error('Failed to fetch Item data');
          }
          const productData = await productResponse.json();
          console.log(productData)
          setProduct(productData);
          console.log(setProduct)
        }
      } catch (error) {
  
        console.error('Error fetching data:', error);
      }
    }
  };
console.log(product)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!product) {
      console.error('Product data is not available.');
      return;
    }

    const billData = {
      vendorId: vendor.v_id,
      vendornic: VendorID,
      price: vendor.price,
      vendorName: vendor.vendorName,
      itemId:product.itemId,
      email: vendor.email,
      itemName: selectedItem,
      quantity: quantity,
      dates: datetime,
      totalAmount: totalAmount,
      cash: payAmount,
      date:date,
      balance: calc2(),
    };
    console.log(billData);
    VendorBillService.submitVBill(billData)
      .then(() => {
        alert("Successfully submitted the vender bill.");
        navigate('/Bills');
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
      
      });
  };
console.log(setProduct.itemId)
  return (
    <div >
      
      <div className='col-sm-8 py-2 px-5 offset-2'>
        
        <h1 className="heading">Billing Form Vendor</h1>
        <form onSubmit={handleSubmit}>
         <div className='input-group mb-5'>
                  <label className='input-group-text'>Vendor NIC</label>
              
                    <input className='form-control col-sm-6' type="text" name="vendornic" id="vendornic" value={VendorID} onChange={handleChange} />
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Item</label>
             
                  
                  <select className='form-control col-sm-6' name="product" value={selectedItem} onChange={handleChange}>
                      {itemStock.map((item) => (
                        <option key={item.item_id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                
              
              
                
                  <button type="button" className='password2' onClick={() => handleEnterClick(VendorID, itemNames)}>Enter</button>
               </div>
               <div className='input-group mb-5'>
                  <label className='input-group-text'>Vendor Name</label>

                    <input className='form-control col-sm-6'  type="text" name="vendorname" defaultValue={vendor.vendorName || ''} readOnly />
                  </div>
                <div className='input-group mb-5'>
                  <label className='input-group-text'>Item No</label>

                    <input className='form-control col-sm-6' type="text" name="itemno" defaultValue={product ? product.itemId : ''} readOnly />
                  </div>
              <div className='input-group mb-5'>
                  <label className='input-group-text'>Item Price</label>
          
                    <input className='form-control col-sm-6' type="text" name="price" defaultValue={vendor.price || ''} readOnly />
                  </div>
            <div className='input-group mb-5'>
                  <label className='input-group-text'>Quantity</label>
                
                    <input className='form-control col-sm-6' type="text" name="qty" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                  </div>
             <div className='input-group mb-5'>
                  <label className='input-group-text'>Total Amount</label>
                
                    <input className='form-control col-sm-6' type="text" name="tamount" value={totalAmount} readOnly />
                  </div>
               <div className='input-group mb-5'>
                  <label className='input-group-text'>Pay Amount</label>
                
                    <input className='form-control col-sm-6' type="text" name="pamount" id="pamount" value={payAmount} onChange={handlePayAmountChange} />
                  </div>
               <div className='input-group mb-5'>
                  <label className='input-group-text'>Balance</label>
                
                    <input className='form-control col-sm-6' type="text" name="bamount" value={calc2()} readOnly />
                  </div>
                
          <button className="button1" type="submit">
            Submit
          </button>
        </form>
      </div>
      </div>
    
  );
}

export default VendorForm;
