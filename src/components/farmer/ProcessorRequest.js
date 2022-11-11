import React from 'react'
import SubNav from '../../utils/SubNav'
import Sidebar from './Sidebar'

function ProcessorRequest() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar proreq='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Processor Request'></SubNav>
            </div>
        </div>
    )
}

export default ProcessorRequest