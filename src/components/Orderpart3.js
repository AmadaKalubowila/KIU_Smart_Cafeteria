import React from 'react'
import './orderpart3.css' 
import { useNavigate } from 'react-router-dom'

function buttonclick(){
    const confirmed = window.confirm("Do you want to delete?");
    if (confirmed) {
        console.log("Order deleted");
        //  logic  delete 
    } else {
        console.log("Order not deleted");
    }
}
export default function Orderpart3() {
    const navigate= useNavigate();
  return (
    <div>
        <div className="Box3">
            <div className="Box4">
                <p className="heading2">You have submitted your Order Successfully!</p>
                <table  className="tablestructure">
                    <tr>
                        <td>
                        <button onClick={() => navigate("/edit_onlineorder")}  className="button2" type="submit" >Edit Order</button>
                        
                        </td>
                        <td>
                        <button onClick={buttonclick} className="button2" type="submit" >Delete Order</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
  )
}
