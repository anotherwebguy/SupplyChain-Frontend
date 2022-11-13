import React from 'react'
import SubNav from '../../utils/SubNav'
import FarmerBroadcastCard from './FarmerBroadcastCard'
import ProcessorSidebar from './ProcessorSidebar'

function FarmerProductBroadcast() {

  const details = [
    { crop: 'Bajra', name: 'Pranav', price: 500, available: 20 },
    { crop: 'Jowar', name: 'Sarvesh', price: 500, available: 20 },
    { crop: 'Paddy', name: 'Ajay', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
    { crop: 'Maize', name: 'Kaalu', price: 500, available: 20 },
  ]

  const list = details.map((d) => {
    return (
      <FarmerBroadcastCard crop={d.crop} name={d.name} price={d.price} quantity={d.available}></FarmerBroadcastCard>
    );
  })

  return (
    <div className='home-body'>
      <div className='left-body'>
        <ProcessorSidebar fbroad='1'></ProcessorSidebar>
      </div>
      <div className='right-body'>
        <SubNav heading='Farmer Broadcasts'></SubNav>
        <div className='broadcast-body'>
          <h3>Farmer Broadcasts!</h3>
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

export default FarmerProductBroadcast