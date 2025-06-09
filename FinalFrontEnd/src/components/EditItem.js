import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditItem = () => {
    
    const{ itemId } =useParams();
    let navigate = useNavigate();
    console.log(itemId)
    const [item, setItem] = useState({
        name: '',
        description: '',
        price: '',
        quantity:'',
        type:'',
        image: null 
    });

   
    const loadItem = async () => {
        
            const response = await axios.get(`http://localhost:8080/api/v/Item/getItemById/${itemId}`);
            console.log('Item loaded:', response.data); 
            setItem(response.data); 
        
    };

    
    useEffect(() => {
        
        if (itemId) {
            loadItem();
        } else {
            console.error('No ID provided in the URL');
        }
        
    }, [itemId]);

    
    const handleInputChange = (itemId) => {
        setItem({ ...item, [itemId.target.name]: itemId.target.value });
    };

   
    

  
    const updateItem = async (event) => {
        event.preventDefault(); 

       
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price',price);
        formData.append('quantity', quantity);
        formData.append('type', type);
       

        
            const response = await axios.put(`http://localhost:8080/api/v/Item/updateItem/${itemId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Item updated:', response.data);
            navigate("/AdminItem");
       
        
    };
    const { name, description, price, quantity, type} = item;
 
    console.log()

    console.log('Current Item state:', item); 

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <form onSubmit={updateItem}>
                <h1>Edit Item</h1>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='name'>Name</label>
                    <input className='form-control col-sm-6' type='text' name='name' id='name' defaultValue={item.name} onChange={handleInputChange} />
                </div>
                <div className='input-group mb-5'>     
                    <label className='input-group-text' htmlFor='type'>Type</label>
                    <div className='form-control col-sm-6'>
                    <select type='text' name='type' id='type' required value={type} onChange={handleInputChange}>
                      <option value="Friedrice">Fried Rice</option>
                      <option value="Riceandcurry">Rice And Curry</option>
                      <option value="Kottu">Kottu</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='description'>Description</label>
                    <input className='form-control col-sm-6' type='text' name='description' id='description' defaultValue={item.description} onChange={handleInputChange} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='price'>Price</label>
                    <input className='form-control col-sm-6' type='text' name='price' id='price' defaultValue={item.price} onChange={handleInputChange} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='quantity'>Quantity</label>
                    <input className='form-control col-sm-6' type='text' name='quantity' id='quantity' defaultValue={item.quantity} onChange={handleInputChange} />
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-2'>
                        <button type='submit' className='btn btn-outline-success btn-lg'>Save</button>
                    </div>
    
                    <div className='col-sm-5'>
                        <Link to='/ItemTable' className='btn btn-outline-warning btn-lg'>Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditItem;
