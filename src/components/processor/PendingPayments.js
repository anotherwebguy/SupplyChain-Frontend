import React from 'react'
import InterestCard from '../../utils/InterestCard'
import PaymentCard from './PaymentCard'
import SubNav from '../../utils/SubNav'
import ProcessorSidebar from './ProcessorSidebar'

function PendingPayments() {

  const data = [
    {name:'Mohit', eprice:2000, requestedQuantity:10, qprice:1000, lotId:'123hfk'},
    {name:'Mohit', eprice:2000, requestedQuantity:10, qprice:1000, lotId:'123hfk'},
    {name:'Mohit', eprice:2000, requestedQuantity:10, qprice:1000, lotId:'123hfk'},
    {name:'Mohit', eprice:2000, requestedQuantity:10, qprice:1000, lotId:'123hfk'},
    {name:'Mohit', eprice:2000, requestedQuantity:10, qprice:1000, lotId:'123hfk'},
  ]

  const list = data.map((d) => {
    return (
      <PaymentCard name={d.name} eprice={d.eprice} requestedQuantity={d.requestedQuantity} qprice={d.qprice} lotId={d.lotId}></PaymentCard>
    )
  })

  return (
    <div className='home-body'>
      <div className='left-body'>
        <ProcessorSidebar ppayment='1'></ProcessorSidebar>
      </div>
      <div className='right-body'>
        <SubNav heading='Pending Payments'></SubNav>
        <div className='broadcast-body'>
          <h3>Pending Payments</h3>
          <div className="container-fluid py-4">
            <div className="row">
              {list}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingPayments