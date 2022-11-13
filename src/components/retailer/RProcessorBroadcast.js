import React from 'react'
import SubNav from '../../utils/SubNav'
import RetailerSidebar from './RetailerSidebar'
import RProcessorCard from './RProcessorCard'

function RProcessorBroadcast() {

  const data = [
    {product:'Chana', price:120, available:20},
    {product:'Chana', price:120, available:20},
    {product:'Chana', price:120, available:20},
    {product:'Chana', price:120, available:20},
  ]

  const list = data.map((d)=>{
    return(
      <RProcessorCard product={d.product} price={d.price} available={d.available}></RProcessorCard>
    )
  })

  return (
    <div className='home-body'>
      <div className='left-body'>
        <RetailerSidebar processorbroadcast='1'></RetailerSidebar>
      </div>
      <div className='right-body'>
        <SubNav heading='Processor Broadcast'></SubNav>
        <div className='broadcast-body'>
          <h3>Processor Broadcasts!</h3>
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

export default RProcessorBroadcast