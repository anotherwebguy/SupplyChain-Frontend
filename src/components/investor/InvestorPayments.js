import React from 'react'
import SubNav from '../../utils/SubNav'
import InvestorPaymentCard from './InvestorPaymentCard'
import InvestorSidebar from './InvestorSidebar'

function InvestorPayments() {
  return (
    <div className='home-body'>
        <div className='left-body'>
            <InvestorSidebar payment='1'></InvestorSidebar>
        </div>
        <div className='right-body'>
            <SubNav heading='Pending Payments'></SubNav>
            <div className='broadcast-body'>
                <h3>Pending Payments!</h3>
                <div className='container-fluid py-4'>
                    <div className='row'>
                        <InvestorPaymentCard farmerId='0xA9859aD4A9d4EcE7617C8D2ab8940E983ebd309C' farmer='Mohit' crop='Bajra' amount={1000} share={5} yieldId='jdfkajdka111'></InvestorPaymentCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvestorPayments