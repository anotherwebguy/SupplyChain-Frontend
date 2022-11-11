import React from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorSidebar from './ProcessorSidebar'

function YourBroadcast() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <ProcessorSidebar ybroad></ProcessorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Your Broadcasts'></SubNav>
            </div>
        </div>
    )
}

export default YourBroadcast