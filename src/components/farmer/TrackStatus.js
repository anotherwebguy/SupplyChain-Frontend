import React from 'react'
import SubNav from '../../utils/SubNav'
import Sidebar from './Sidebar'
import '../../css/bootstrap.css'

function TrackStatus() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar status='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Track Status'></SubNav>
                <div className='broadcast-body'>
                    <h3>Batch Report</h3>
                    
                </div>
            </div>
        </div>
    )
}

export default TrackStatus