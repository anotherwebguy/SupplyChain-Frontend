import React from 'react'
import SubNav from '../../utils/SubNav'
import CustomerReportCard from './CustomerReportCard'
import CustomerSidebar from './CustomerSidebar'

function AddReportCustomer() {

  const data = [
    { product: 'Chana', lotId: '123louj', productId: '12j3h', quantity: 10 },
    { product: 'Bajra Roti', lotId: '123louj', productId: '12j3h', quantity: 10 },
    { product: 'Jowar Atta', lotId: '123louj', productId: '12j3h', quantity: 10 },
    { product: 'Chana', lotId: '123louj', productId: '12j3h', quantity: 10 },
  ]

  const list = data.map((d) => {
    return (
      <CustomerReportCard product={d.product} lotId={d.lotId} productId={d.productId} quantity={d.quantity}></CustomerReportCard>
    )
  })

  return (
    <div className='home-body'>
      <div className='left-body'>
        <CustomerSidebar addreport='1'></CustomerSidebar>
      </div>
      <div className='right-body'>
        <SubNav heading='Add Report'></SubNav>
        <div className='broadcast-body'>
          <h3>Add Report</h3>
          <div className='container-fluid py-4'>
            <div className='row'>
              {list}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddReportCustomer