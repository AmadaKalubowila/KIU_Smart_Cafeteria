import React, { useState, useEffect } from 'react';
import './orderpart3.css';
import { useNavigate } from 'react-router-dom';


export default function Orderadmin() {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        const tomorrowState='Yes';
        navigate(`/onlineorder`);

       
    };
  return (
    <div>
    <div className="Box5">
        <div className="Box6">
            <p className="heading2">Are you going to accept orders tomorrow?</p>
            <table className="tablestructure" >
                <tbody>
                    <tr>
                        <td>
                            <button  className="button3" type="button">Yes</button>
                        </td>
                        <td>
                            <button onClick={handleClick}  className="button4" type="button" >No</button>
                        </td>
                        
                          
                        
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
