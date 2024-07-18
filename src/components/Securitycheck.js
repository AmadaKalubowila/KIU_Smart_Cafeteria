import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './orderstockstyle.css';



function Securitycheck() {
  const navigate = useNavigate(); 
  
  const handlecheck= ( id) => {
    console.log(id);
    if(id == "589HTC##$"){
        console.log("true");
    navigate(`/SecurityDetails`);}
  };
  
  return (
    <div>
    <div className='Boxs5'>
      <div className='Boxs6'>
        <label className='headings2'>Enter Password:</label>
        
        <input text="pasword" id="check1"></input>
        <br></br>
        <button  className="btns1"onClick={() =>  handlecheck(document.getElementById("check1").value)}>Submit</button>
    </div>
    </div>
</div>
  )
}
export default Securitycheck;
