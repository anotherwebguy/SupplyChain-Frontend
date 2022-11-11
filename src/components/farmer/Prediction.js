import React from 'react'
import '../../css/nucleo-icons.css'
import '../../css/nucleo-svg.css'
import '../../css/bootstrap.css'
import '../../css/material-dashboard.css'
import '../../css/prediction.css'
import Commodity from './Commodity'
import PredictedValues from './PredictedValues'
import Gainers from './Gainers'
import Losers from './Losers'
import Sidebar from './Sidebar'
import SubNav from '../../utils/SubNav'

function Prediction() {

    const object = [{
        item: 'item1',
        price: 100,
        change: 2
    },
    {
        item: 'item2',
        price: 200,
        change: 4
    }
    ]

    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar pred="1"></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Crop Price Predictor'></SubNav>

                {/* Prediction values for next months */}

                <PredictedValues></PredictedValues>

                {/* Top Gainers */}

                <Gainers obj={object}></Gainers>

                {/* Top Losers */}

                <Losers losers={object}></Losers>

                {/* Commodity section */}

                <div className='bottom-body'>
                    <Commodity></Commodity>
                </div>

            </div>
        </div>
    )
}

export default Prediction