import React from "react";
import "./CustomerTable.css";

const CustomerTable = () => {
  const rows = 10;

  return (
    <div className="customer-table-container">
      <h1>Bill Records</h1>
      <h2>Customer/Profitable</h2>
      <table>
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Cash</th>
            <th>Change</th>
            <th>Order ID</th>
            <th>Item ID</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th><button>edit</button><br/><button>Delete</button></th>
              
            </tr>


          ))}
        </tbody>
      </table>
      <label for="name"><b>Received Total Amount:</b></label>
      <input type="text"
      class="styled-textbox"
      placeholder="amount"></input>


      <h1>Bill Records</h1>
      <h2>Vendor/Costs</h2>
      <table>
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Cash</th>
            <th>Change</th>
            <th>Order ID</th>
            <th>Item ID</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th><button>edit</button><br/><button>Delete</button></th>
              
            </tr>

            
          ))}
        </tbody>
      </table>
      <label for="name"><b>Received Total Amount:</b></label>
      <input type="text"
      class="styled-textbox"
      placeholder="amount"></input>
       
       <br></br>

<label for="name"><b>Received Total Amount:</b></label>
      <input type="text"
      class="styled-textbox"
      placeholder="amount"></input>
       
       <br></br>

       <button type="submit" className="submit-button">Submit</button>
       
    </div>
  );
};

export default CustomerTable;
