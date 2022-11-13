import React from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorBroadcastCard from './YourBroadcastCard'
import ProcessorSidebar from './ProcessorSidebar'
import YourBroadcastCard from './YourBroadcastCard'

function YourBroadcast() {

    const data = [
        {name:'Chana', quantity:10, available:10, price:2000},
        {name:'Chana', quantity:10, available:10, price:2000},
        {name:'Chana', quantity:10, available:10, price:2000},
        {name:'Chana', quantity:10, available:10, price:2000},
        {name:'Chana', quantity:10, available:10, price:2000},
        {name:'Chana', quantity:10, available:10, price:2000},
    ]

    const list = data.map((d)=>{
        return(
            <YourBroadcastCard name={d.name} quantity={d.quantity} available={d.available} price={d.price}></YourBroadcastCard>
        )
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <ProcessorSidebar ybroad></ProcessorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Your Broadcasts'></SubNav>
                <div className='broadcast-body'>
                    <h3>Your Broadcasts!</h3>
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

export default YourBroadcast