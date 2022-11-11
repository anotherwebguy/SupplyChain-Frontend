import React from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorSidebar from './ProcessorSidebar'

function ProcessorDashboard() {
  return (
    <div className='home-body'>
      <div className='left-body'>
        <ProcessorSidebar dash='1'></ProcessorSidebar>
      </div>
      <div className='right-body'>
        <SubNav heading='Dashboard'></SubNav>
      </div>
    </div>
  )
}

export default ProcessorDashboard