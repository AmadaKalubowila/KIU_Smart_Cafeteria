import React, { useState, useEffect } from 'react';
import './orderpart3.css';
import { useNavigate } from 'react-router-dom';
import OrderService from '../OrderService/OrderService';

export default function Orderpart3() {
   const navigate = useNavigate();
    const userID = 1; 
    const [ordersID, setOrderId] = useState(null); 
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        
        const fetchOrderId = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/order/getLatestOrderIdForUser/${userID}`); 
                if (!response.ok) {
                    throw new Error('Failed to fetch order ID');
                }
                const data = await response.json();
                setOrderId(data.id); 
            } catch (error) {
                console.error('Error fetching order ID:', error);
               
            }
        };

        fetchOrderId();
    }, []);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsDisabled(true);
        },10000);
        return () => clearTimeout(timer);
    },[]);
    const handleEditClick = () => {
        navigate(`/edit_onlineorder/${ordersID}`);
    };

    const handleDeleteClick = () => {
        const confirmed = window.confirm("Do you want to delete?");
        if (confirmed) {
            OrderService.deleteOrderById(ordersID)
                .then(() => {
                    console.log("Order deleted");
                    navigate('/Ordersucsses'); 
                })
                .catch((error) => {
                    console.error('There was an error deleting the order!', error);
                });
        } else {
            console.log("Order not deleted");
        }
    };

    const handleDoneClick = () => {
        
    };

    return (
        <div>
            <div className="Box3">
                <div className="Box4">
                    <p className="heading2">You have submitted your Order Successfully!</p>
                    <table className="tablestructure" >
                        <tbody>
                            <tr>
                                <td>
                                    <button onClick={handleEditClick} className="button2" type="button" disabled={isDisabled}>Edit<br></br> Order</button>
                                </td>
                                <td>
                                    <button onClick={handleDeleteClick} className="button2" type="button" disabled={isDisabled}>Delete <br></br>Order</button>
                                </td>
                                
                                 <td>
                                    <button  onClick={handleDoneClick} className="button2" type="button">Done</button>
                                    </td>   
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
