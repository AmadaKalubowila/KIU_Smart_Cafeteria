import React from 'react'
import './orderpart1.css';

export default function () {
  return (
    <div>
    <div className="Box1">
      <h1 className="heading"> Vendor Registeration</h1>
      <form >
        <table className="Structure">
          <tbody>
            <tr>
              <td>
                <label className="label_structure">Name</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="id" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Address</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="id" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">NIC</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="cname"  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Gender</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="id" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Email</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="id" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Contact No</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="id" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="label_structure">Date</label>
              </td>
              
            </tr>
            <tr>
              <td>
                <label className="label_structure">No Of Item</label>
              </td>
              <td>
                <div className="field_structure">
                  <input type="text" name="id" />
                </div>
              </td>
            </tr>
            
            
              
            
          </tbody>
        </table>
      </form>
    </div>
    <button   className="button1" type="submit">
      Submit
    </button>
  </div>
  )
}
