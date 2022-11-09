import React from 'react'
import '../css/nucleo-icons.css'
import '../css/nucleo-svg.css'
import '../css/bootstrap.css'
import '../css/material-dashboard.css'
import '../css/prediction.css'
import Commodity from './Commodity'
import PredictedValues from './PredictedValues'
import Gainers from './Gainers'
import Losers from './Losers'
import Sidebar from './Sidebar'

function Prediction() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar pred="1"></Sidebar>
            </div>
            <div className='right-body'>
                <div className='nav-body'>
                    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-1 shadow-none border-radius-xl" id="navbarBlur"
                        navbar-scroll="true">
                        <div class="container-fluid py-1 px-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a>
                                    </li>
                                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Crop Price Predictor</li>
                                </ol>
                                <h6 class="font-weight-bolder mb-0">Crop Price Predictor</h6>
                            </nav>
                        </div>
                    </nav>
                </div>

                {/* Prediction values for next months */}

                <PredictedValues></PredictedValues>

                {/* Top Gainers */}

                <Gainers></Gainers>

                {/* Top Losers */}

                <Losers></Losers>

                {/* Commodity section */}

                <div className='bottom-body'>
                    <Commodity></Commodity>
                </div>

            </div>
        </div>
    )
}

export default Prediction