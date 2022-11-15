import React, { useState } from 'react'
import block from '../../images/logo-ct.png'
import qr from '../../images/qr.png'
import '../../css/investor.css'
import ReactModal from 'react-modal'
import FarmerInvestorCard from './FarmerInvestorCard'
import SubNav from '../../utils/SubNav'
import InvestorSidebar from './InvestorSidebar'

function InvestorHome() {

    return (
        <div className='home-body'>
            <div className='left-body'>
                <InvestorSidebar dash='1'></InvestorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Dashboard'></SubNav>
            </div>
        </div>
    )
}

export default InvestorHome