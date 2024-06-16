import React from 'react'
import './orderpart1.css' 
import { useNavigate } from 'react-router-dom'

export default function Orderpart2() {
    const navigate= useNavigate();
    
  return (
    <div>
        <div class="Box1">
        <h1 class="heading">Update Online Order</h1>
        <form>
            <table className="Structure">
                <tr>
                    <td>
                        <label className="label_structure">Index No</label>
                    </td>
                    <td>
                      <div className="field_structure"><input type="text" ></input> </div>  
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label_structure">Customer Name</label>
                    </td>
                    <td>
                    <div className="field_structure"> <input type="text" ></input></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label_structure">Batch no</label>
                    </td>
                    <td>
                    <div className="field_structure"><input type="number" ></input></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label_structure">Item Name</label>
                    </td>
                    <td>
                    <div className="field_structure"><input type="text" ></input></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label_structure">Quantity</label>
                    </td>
                    <td>
                    <div className="field_structure"> <input type="number" ></input></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="label_structure">Date</label>
                    </td>
                    <td>
                    <div className="field_structure"><input type="date" ></input></div>
                    </td>
                </tr>

            </table>
        </form>
        </div>
        <button onClick={() => navigate("/order_sucsses")} className="button1" type="Submit">Submit</button>
    </div>
  )
}
