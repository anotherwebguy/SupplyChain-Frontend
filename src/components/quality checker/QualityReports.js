import React from 'react'
import QualitySidebar from './QualitySidebar'
import SubNav from '../../utils/SubNav'
import ReportCard from '../processor/ReportCard'
import QualityCard from './QualityCard'

function QualityReports() {

    const data=[
        {crop:'wheat', farmerId:190, lotId: 200, quantity: 100, processor:'19392hikk2'},
        {crop:'wheat', farmerId:190, lotId: 200, quantity: 100, processor:'19392hikk2'},
        {crop:'wheat', farmerId:190, lotId: 200, quantity: 100, processor:'19392hikk2'},
        {crop:'wheat', farmerId:190, lotId: 200, quantity: 100, processor:'19392hikk2'},
        {crop:'wheat', farmerId:190, lotId: 200, quantity: 100, processor:'19392hikk2'},
    ]

    const list = data.map((d)=>{
        return(
            <QualityCard crop={d.crop} farmerId={d.farmerId} lotId={d.lotId} quantity={d.quantity} processor={d.processor}/>
        )
    })

    return (
        <div className='home-body'>
            <div className='right-body'>
                
                <h3>Quality Reports!</h3>
                <div className="container-fluid py-4">
                    <div className="row">
                        {list}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualityReports