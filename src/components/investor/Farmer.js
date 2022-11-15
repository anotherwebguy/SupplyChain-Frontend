import React, { useState } from 'react'
import block from '../../images/logo-ct.png'
import SubNav from '../../utils/SubNav'
import InvestorSidebar from './InvestorSidebar'
import qr from '../../images/qr.png'
import '../../css/farmer.css'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'

function Farmer(props) {

    const navigate = useNavigate()

    const changeView = () => {
        navigate('/investor/farmstatus')
    }

    return (
        <div className='home-body'>
            <div className='left-body'>
                <InvestorSidebar farmb='1'></InvestorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Farmer'></SubNav>
                <div className='broadcast-body'>
                    <Modal></Modal>
                    <div className='farmer-table'>
                        <table className='table table-striped data-table' cellSpacing={0} cellPadding={0}>
                            <thead>
                                <tr>
                                    <th>Product Id</th>
                                    <th>QR-Code</th>
                                    <th>Broadcast</th>
                                    <th>Farm Inspection</th>
                                    <th>Processor</th>
                                    <th>Retailer</th>
                                    <th>Consumer</th>
                                    <th className="disabled-sorting text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>0x793c095009deb92846f15745043f5420cabf97ab</td>
                                    <td className='farmer-row'><img src={qr} className="chota-hoja" /></td>
                                    <td className='farmer-row'><span className="badge bg-success">Completed</span></td>
                                    <td className='farmer-row'><span className="badge bg-success">Completed</span></td>
                                    <td className='farmer-row'><span className="badge bg-warning">Processing</span></td>
                                    <td className='farmer-row'><span className="badge bg-danger">UnAvailable</span></td>
                                    <td className='farmer-row'><span className="badge bg-danger">Unavailable</span></td>
                                    <td className="text-center">
                                        <button onClick={changeView} className="btn btn-simple btn-info btn-icon like"><i className="material-icons">visibility</i></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Farmer