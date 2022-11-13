import React from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorSidebar from './ProcessorSidebar'
import ReportsWithPaymentCard from './ReportsWithPaymentCard'

function ReportsWithPayment() {

  const data = [
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
    { farmer: 'Mohit', quantity: 10 },
  ]

  const list = data.map((d) => {
    return (
      <tr>
        <td>
          <div className="d-flex px-2 py-1">
            <div>
              <i className="material-icons opacity-10">grass</i>
            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="d-flex flex-column justify-content-center">
              <h5 className="mb-0 text-sm">{d.farmer}</h5>
            </div>
          </div>
        </td>
        <td className="align-middle text-center text-sm">
          <h6 className="mb-0 text-sm">{d.quantity}</h6>
        </td>
      </tr>
    )
  })

  return (
    <div className='home-body'>
      <div className='left-body'>
        <ProcessorSidebar reportpayment='1'></ProcessorSidebar>
      </div>
      <div className='right-body'>
        <SubNav heading='Reports with Payment'></SubNav>
        <br></br>
        <div className='gainers-body'>
          <div className="container-fluid py-0">
            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-danger shadow-success border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">Reports with Payment Done!</h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th
                              className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Farmer Name</th>
                            <th
                              className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Quantity Requested</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            list
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportsWithPayment