import React from 'react'
import SubNav from '../../utils/SubNav'
import CustomerSidebar from './CustomerSidebar'
import RetailerCard from './RetailerCard'

function CustomerRetailerBroadcast() {

    const data = [
        {product:'Wheat', price:1000, retailer:'Mohit', quantity:10}
    ]

    const list = data.map((d)=>{
        return(
            <RetailerCard product={d.product} price={d.price} retailer={d.retailer} quantity={d.quantity}></RetailerCard>
        )
    })

  return (
    <div className='home-body'>
      <div className='left-body'>
        <CustomerSidebar retailer='1'></CustomerSidebar>
      </div>
      <div className='right-body'>
        <SubNav heading='Pending Payments'></SubNav>
        <div className='broadcast-body'>
          <h3>Retailer Broadcasts!</h3>
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

export default CustomerRetailerBroadcast