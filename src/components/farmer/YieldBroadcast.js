import React from 'react'
import SubNav from '../../utils/SubNav'
import Sidebar from './Sidebar'

function YieldBroadcast() {

    const yield_data = [{
        yield_id: '1234567890',
        farmer_name: 'Mohit',
        crop_name: 'item1',
        expected_price: 200,
        quantity: 20,
        expected_date: '2021-05-20'
    },
    {
        yield_id: '1234567890',
        farmer_name: 'Mohit',
        crop_name: 'item1',
        expected_price: 200,
        quantity: 20,
        expected_date: '2021-05-20'
    },
    {
        yield_id: '1234567890',
        farmer_name: 'Mohit',
        crop_name: 'item1',
        expected_price: 200,
        quantity: 20,
        expected_date: '2021-05-20'
    }
]

    const list = yield_data.map((element) => {
        return (
            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <i className="material-icons opacity-10">grass</i>
                        </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="d-flex flex-column justify-content-center">
                            <h5 className="mb-0 text-sm">{element.yield_id}</h5>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">₹ {element.farmer_name}</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <h6 className="mb-0 text-sm">{element.crop_name}</h6>
                </td>
                <td className="align-middle text-center text-sm">
                    <h6 className="mb-0 text-sm">{element.quantity}</h6>
                </td>
                <td className="align-middle text-center text-sm">
                    <h6 className="mb-0 text-sm">{element.expected_price}</h6>
                </td>
                <td className="align-middle text-center text-sm">
                    <h6 className="mb-0 text-sm">{element.expected_date}</h6>
                </td>
            </tr>
        );
    })

  return (
    <div className='home-body'>
            <div className='left-body'>
                <Sidebar ybroad='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Yield Broadcasts'></SubNav>
                <br></br>
                <div className='gainers-body'>
                    <div className="container-fluid py-0">
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">Your Broadcasts!</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Yield Id</th>
                                                        <th
                                                            className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            Farmer name</th>
                                                        <th
                                                            className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Crop name</th>
                                                        <th
                                                            className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Quantity</th>
                                                        <th
                                                            className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Expected price</th>
                                                        <th
                                                            className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Expected Date</th>
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

export default YieldBroadcast
