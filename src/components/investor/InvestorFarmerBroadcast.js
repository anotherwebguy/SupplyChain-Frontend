import React from 'react'
import SubNav from '../../utils/SubNav'
import FarmerInvestorCard from './FarmerInvestorCard'
import InvestorSidebar from './InvestorSidebar'

function InvestorFarmerBroadcast() {
  return (
    <div className='home-body'>
        <div className='left-body'>
            <InvestorSidebar farmb='1'></InvestorSidebar>
        </div>
        <div className='right-body'>
            <SubNav heading='Farmer Broadcast'></SubNav>
            <div className='broadcast-body'>
                <h3>Farmer Broadcasts!</h3>
                <div className='container-fluid py-4'>
                    <div className='row'>
                        <FarmerInvestorCard></FarmerInvestorCard>
                        <FarmerInvestorCard></FarmerInvestorCard>
                        <FarmerInvestorCard></FarmerInvestorCard>
                        <FarmerInvestorCard></FarmerInvestorCard>
                        <FarmerInvestorCard></FarmerInvestorCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvestorFarmerBroadcast