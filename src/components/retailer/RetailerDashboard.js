import React from 'react'
import SubNav from '../../utils/SubNav'
import RetailerSidebar from './RetailerSidebar'

function RetailerDashboard() {
  return (
    <div className='home-body'>
        <div className='left-body'>
            <RetailerSidebar dash='1'></RetailerSidebar>
        </div>
        <div className='right-body'>
            <SubNav heading='Dashboard'></SubNav>
        </div>
    </div>
  )
}

export default RetailerDashboard