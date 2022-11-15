import React from 'react'
import '../css/bootstrap.css'
import '../css/verification.css'

function VerificationList() {
  return (
    <div>
      <div className="card sizi">
        <div className="card-header">
          <table>
            <tr>
              <th>Account address:</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>0x12345678902712478t2718t</td>
            </tr>
          </table> 
        </div>
        <div className="card-body">
          <table>
            <tr>
              <th>Name:</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>John</td>
            </tr>
            <tr>
              <th>Contact No:</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>1234567890</td>
            </tr>
            <tr>
              <th>Address:</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>1234 Main St, New York, NY 10001</td>
            </tr>
            <tr>
              <th>Role:</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Farmer</td>
            </tr>
          </table>
        </div>
        <div className="card-footer text-muted text-center">
          <button type="button " className="btn btn-success siza">Approve</button>
        </div>
      </div>
    </div>
  )
}

export default VerificationList
