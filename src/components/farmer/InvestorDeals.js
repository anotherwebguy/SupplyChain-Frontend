import React from 'react'
import SubNav from '../../utils/SubNav'
import InvestmentDealCard from './InvestmentDealCard'
import Sidebar from './Sidebar'

function InvestorDeals() {
  return (
    <div className='home-body'>
        <div className='left-body'>
            <Sidebar investor='1'></Sidebar>
        </div>
        <div className='right-body'>
            <SubNav heading='Investor Deals'></SubNav>
            <div className='broadcast-body'>
                <h3>Investor Deals</h3>
                <div className='container-fluid py-4'>
                    <div className='row'>
                        <InvestmentDealCard farmer='Mohit' crop='Bajra' location='Bihar' quantity={10} price={2000} date='19-01-2023' amount={3000} share={2} />
                        <InvestmentDealCard farmer='Mohit' crop='Bajra' location='Bihar' quantity={10} price={2000} date='19-01-2023' amount={3000} share={2} />
                        <InvestmentDealCard farmer='Mohit' crop='Bajra' location='Bihar' quantity={10} price={2000} date='19-01-2023' amount={3000} share={2} />
                        <InvestmentDealCard farmer='Mohit' crop='Bajra' location='Bihar' quantity={10} price={2000} date='19-01-2023' amount={3000} share={2} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvestorDeals