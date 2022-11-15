import React from 'react'
import SubNav from '../../utils/SubNav'
import InvestorSidebar from './InvestorSidebar'
import RejectedCard from './RejectedCard'

function RejectedDeals() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <InvestorSidebar rejected='1'></InvestorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Rejected Deals'></SubNav>
                <div className='broadcast-body'>
                    <h3>Rejected Deals!</h3>
                    <div className='container-fluid py-4'>
                        <div className='row'></div>
                        <RejectedCard farmerId='0xA9859aD4A9d4EcE7617C8D2ab8940E983ebd309C' farmer='Mohit' crop='Bajra' amount={1000} share={5} yieldId='jdfkajdka111'></RejectedCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RejectedDeals