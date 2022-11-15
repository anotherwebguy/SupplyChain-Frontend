import React from 'react'
import InvestorSidebar from './InvestorSidebar'
import SubNav from '../../utils/SubNav'
import InvestmentCard from './InvestmentCard'


function Investments() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <InvestorSidebar investments='1'></InvestorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Investments'></SubNav>
                <div className='broadcast-body'>
                    <h3>Investments</h3>
                    <div className='container-fluid py-4'>
                        <div className='row'>
                            <InvestmentCard farmerId='0xA9859aD4A9d4EcE7617C8D2ab8940E983ebd309C' farmer='Mohit' crop='Bajra' amount={1000} share={5} yieldId='jdfkajdka111' location='Mumbai'></InvestmentCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investments