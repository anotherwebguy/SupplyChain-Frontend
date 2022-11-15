import React from 'react'

function VerificationList() {
  return (
    <div>
      <div
          className="container-list attention"
        >
          <table>
            <tr>
              <th>Account address</th>
              <td>0x237FFFe1beBA4Cd88E6b6e8f2b7aA55DC0556A21</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>Mohit</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>9323456732</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>Udr se left lekr right jaoge to idr se udr pohuchoge fir waha se right lelo</td>
            </tr>
            <tr>
              <th>Authorized</th>
              <td>True</td>
            </tr>
          </table>
          <div style={{}}>
            <button
              className="btn-verification approve"
            >
              Approve
            </button>
          </div>
        </div>
    </div>
  )
}

export default VerificationList
