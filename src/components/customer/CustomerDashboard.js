import React from 'react'
import SubNav from '../../utils/SubNav'
import CustomerSidebar from './CustomerSidebar'

function CustomerDashboard() {
  return (
    <div className='home-body'>
        <div className='left-body'>
            <CustomerSidebar dash='1'></CustomerSidebar>
        </div>
        <div className='right-body'>
            <SubNav heading='Dashboard'></SubNav>
        </div>
    </div>
  )
}

export default CustomerDashboard