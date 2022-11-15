import React from 'react'
import Sidebar from './Sidebar'
import SubNav from '../../utils/SubNav'
import AcceptedDealCard from './AcceptedDealCard'


function AcceptedDeals() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar accepted='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Accepted Deals'></SubNav>
                <div className='broadcast-body'>
                    <h3>Accepted Deals</h3>
                    <div className='container-fluid py-4'>
                        <div className='row'></div>
                        <AcceptedDealCard farmer='Mohit' crop='Bajra' location='Bihar' quantity={10} price={2000} date='19-01-2023' amount={3000} share={2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcceptedDeals