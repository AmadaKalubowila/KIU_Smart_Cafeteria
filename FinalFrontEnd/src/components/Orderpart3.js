import React, { useState, useEffect } from 'react';
import './orderpart3.css';
import { useNavigate, useParams } from 'react-router-dom';
import OrderService from '../OrderService/OrderService';

export default function Orderpart3() {
   const navigate = useNavigate();
   const { userID } = useParams();
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
        navigate(`/edit_onlineorder/${userID}/${ordersID}`);
    };

    const handleDeleteClick = () => {
        const confirmed = window.confirm("Do you want to delete?");
        if (confirmed) {
            OrderService.deleteOrderById(ordersID)
                .then(() => {
                    console.log("Order deleted");
                    navigate(`/MainHome/${userID}`); 
                })
                .catch((error) => {
                    console.error('There was an error deleting the order!', error);
                });
        } else {
            console.log("Order not deleted");
        }
    };

    const handleDoneClick = () => {
        navigate(`/Email/${ordersID}/${userID}`)
    };

    return (
        <div>
            <div>
                <div className="Box4">
                    <p className="heading2">You have submitted your Order Successfully!</p>
                    
                    <div class="d-grid gap-2 col-6 mx-auto">
                         <button onClick={handleEditClick} class="btn btn-primary" type="button" disabled={isDisabled}>Edit Order</button>
                         <button onClick={handleDeleteClick} class="btn btn-danger" type="button" disabled={isDisabled}>Delete Order</button>
                         <button onClick={handleDoneClick} class="btn btn-success" type="button">Done Order</button>
                    </div>    
                </div>
            </div>
        </div>
    );
}
