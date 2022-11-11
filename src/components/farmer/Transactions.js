import React from 'react'
import SubNav from '../../utils/SubNav'
import Sidebar from './Sidebar'

function Transaction() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar trans='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Transactions'></SubNav>
            </div>
        </div>
    )
}

export default Transaction