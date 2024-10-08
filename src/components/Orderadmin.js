import React, { useState, useEffect } from 'react';
import './orderpart3.css';
import { useNavigate } from 'react-router-dom';
import AdminOrderService from '../OrderService/AdminOrderService';


export default function Orderadmin() {
    const navigate = useNavigate();
    const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    


    const handleSubmit = (status) => {
        const orderData = {
          status:status,
          date: datetime,
          dates: date,
          
        };
        AdminOrderService.submitOrder(orderData)
          .then(() => {
            alert("Successfull.");
            navigate(`/Admin`);
            console.log(orderData);
          })
          .catch((error) => {
            console.error('There was an error submitting the status!', error);
            alert("Invalid status");
          });
      };


  return (
    <div>
    <div>
        <div className="Box6">
            <p className="heading2">Are you going to accept orders tomorrow?</p>
            <table className="tablestructure" >
                <tbody>
                    <tr>
                        <td>
                            <button  className="button3" type="button" onClick={() => handleSubmit(1)}>Yes</button>
                        </td>
                        <td>
                            <button onClick={() => handleSubmit(0)} className="button4" type="button" >No</button>
                        </td>
                        
                          
                        
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
