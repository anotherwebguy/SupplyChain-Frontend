import React from 'react'
import SubNav from '../../utils/SubNav'
import Gainers from './Gainers'
import Sidebar from './Sidebar'

function FarmerBroadcast() {

    const farmer = [{
        item: 'item1',
        price: 200,
        quantity: 20
    },
    {
        item: 'item2',
        price: 400,
        quantity: 10
    },
    {
        item: 'item3',
        price: 700,
        quantity: 100
    }
]

    const list = farmer.map((element) => {
        return (
            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <i className="material-icons opacity-10">grass</i>
                        </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="d-flex flex-column justify-content-center">
                            <h5 className="mb-0 text-sm">{element.item}</h5>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">₹ {element.price}</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <h6 className="mb-0 text-sm">{element.quantity}</h6>
                </td>
            </tr>
        );
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar farmbroad='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Farmer Broadcasts'></SubNav>
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
                                                            Crop Name</th>
                                                        <th
                                                            className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                            Expected Price</th>
                                                        <th
                                                            className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            Quantity</th>
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

export default FarmerBroadcast