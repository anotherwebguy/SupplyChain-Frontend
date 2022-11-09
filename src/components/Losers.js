import React from 'react'
import '../css/nucleo-icons.css'
import '../css/nucleo-svg.css'
import '../css/bootstrap.css'
import '../css/material-dashboard.css'
import '../css/gainers.css'
import loss from '../images/loss-icon.png'

function Losers() {
  return (
    <div className='losers-body'>
            <div className="container-fluid py-0">
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Top Losers(Current trends)</h6>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Item Name</th>
                                                <th
                                                    className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Price (per Qtl.)</th>
                                                <th
                                                    className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {% for item in top5 %} */}
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2 py-1">
                                                        <div>
                                                            <i className="material-icons opacity-10">agriculture</i>
                                                        </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h5 className="mb-0 text-sm">item-1</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-xs font-weight-bold mb-0">₹500</p>
                                                </td>
                                                <td className="align-middle text-center text-sm">
                                                    <h6 className="mb-0 text-sm">2% <img
                                                        src={loss} height="25" width="25" /></h6>
                                                </td>
                                            </tr>
                                            {/* {% endfor %} */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Losers