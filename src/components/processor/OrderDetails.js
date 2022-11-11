import React from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorSidebar from './ProcessorSidebar'

function OrderDetails() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <ProcessorSidebar orderDetails='1'></ProcessorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Order Details'></SubNav>
            </div>
        </div>
    )
}

export default OrderDetails