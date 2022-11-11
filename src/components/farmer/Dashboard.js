import React, { useEffect, useState } from 'react'
import '../../css/homestyle.css'
import '../../css/nucleo-icons.css'
import '../../css/nucleo-svg.css'
import '../../css/bootstrap.css'
import '../../css/material-dashboard.css'
import logo from '../../images/logo-ct.png'
import Recommendation from './Recommendation'
import Prediction from './Prediction'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import SubNav from '../../utils/SubNav'

function Dashboard() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar dash="1"></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Dashboard'></SubNav>
            </div>
        </div>
    )
}

export default Dashboard