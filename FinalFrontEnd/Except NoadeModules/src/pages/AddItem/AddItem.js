import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddItem = () => {

    let navigate= useNavigate();


    const [Item, setItems] = useState({
        name: '',
        description: '',
        price: '',
        quantity:'',
        image: null // initialize image as null
    });

    const handleInputChange = (e) => {
        setItems({...Item, [e.target.name]: e.target.value});
    }

    const handleFileChange = (e) => {
        setItems({...Item, image: e.target.files[0]});
    }

    const saveItem = async (e) => {
        e.preventDefault(); // prevent default form submission

        // FormData for handling multipart/form-data
        const formData = new FormData();
        formData.append('name', Item.name);
        formData.append('description', Item.description);
        formData.append('price', Item.price);
        formData.append('quantity', Item.quantity);
        formData.append('image', Item.image);

        try {
            const response = await axios.post("http://localhost:8080/api/v/Item/saveItem", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); // log response if needed
        } catch (error) {
            console.error('Error saving item:', error);
        }
        navigate("/ItemTable")
    }

    const { name, description, price,quantity } = Item;

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <form onSubmit={saveItem}>
                <h1>Item Registration</h1>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='name'>Name</label>
                    <input className='form-control col-sm-6' type='text' name='name' id='name' required value={name} onChange={handleInputChange}/>
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='image'>Image</label>
                    <input className='form-control col-sm-6' type='file' name='image' id='image' onChange={handleFileChange}/>
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='description'>Description</label>
                    <input className='form-control col-sm-6' type='text' name='description' id='description' value={description} onChange={handleInputChange}/>
                </div>
                <div className='input-group mb-5'>     
                    <label className='input-group-text' htmlFor='price'>Price</label>
                    <input className='form-control col-sm-6' type='text' name='price' id='price' required value={price} onChange={handleInputChange}/>
                </div>
                <div className='input-group mb-5'>     
                    <label className='input-group-text' htmlFor='quantity'>Quantity</label>
                    <input className='form-control col-sm-6' type='text' name='quantity' id='quantity' required value={quantity} onChange={handleInputChange}/>
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-2'>
                        <button type='submit' className='btn btn-outline-success btn-lg'  onClick={() => saveItem()}>Save</button>
                    </div>
    
                    <div className='col-sm-5'>
                        <Link to='/ItemTable' className='btn btn-outline-warning btn-lg'>Cancel</Link>
                    </div>
                </div>
                
            </form> 
        </div>
    );
}

export default AddItem;
