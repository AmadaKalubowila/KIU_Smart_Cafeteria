import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ItemTable = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const result = await axios.get("http://localhost:8080/api/v/Item/getItem", {
            validateStatus: () => {
                return true;
            },
        });
        if (result.status === 200) {
            setItem(result.data);
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/v/Item/deleteItem/${id}`);
        loadItems();
    };
    

    return (
        <section>
            
            <h1>Item Stock</h1>
            <Link to={"/AddItem"} className="btn btn-dark" type="add">AddItem</Link>
            <table className='table table-bordered table-hover shadow'>
                <thead>
                    <tr className="ItemTableHeader">
                        <th>Item Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.itemId}>
                            <th scope='row'>{item.itemId}</th>
                            <td>{item.name}</td>
                            <td><img src={`data:image/jpeg;base64,${item.image}`} alt={item.name} style={{ maxWidth: '100px' }} /></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={`/EditItems/${item.itemId}`} className="ItemBtnEdit"  ><FaEdit /></Link>
                            </td>
                            <td>
                                <Link className="ItemBtnDelete" onClick={() => handleDelete(item.itemId)}><FaTrash /></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ItemTable;
