import React from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorSidebar from './ProcessorSidebar'
import ReportCard from './ReportCard'

function AddReport() {

    const data = [
        { address: 21312312, lotId: 1222202, rquantity: 20 },
        { address: 21312312, lotId: 1222202, rquantity: 20 },
        { address: 21312312, lotId: 1222202, rquantity: 20 },
        { address: 21312312, lotId: 1222202, rquantity: 20 },
        { address: 21312312, lotId: 1222202, rquantity: 20 },
        { address: 21312312, lotId: 1222202, rquantity: 20 },
        { address: 21312312, lotId: 1222202, rquantity: 20 },
        { address: 21312312, lotId: 1222202, rquantity: 20 },
    ]

    const list = data.map((d) => {
        return (
            <ReportCard farmerKey={d.address} lotId={d.lotId} requestedQuantity={d.rquantity}></ReportCard>
        );
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <ProcessorSidebar addreport='1'></ProcessorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Add Report'></SubNav>
                <div className='broadcast-body'>
                    <h3>Add Report</h3>
                    <div className="container-fluid py-4">
                        <div className="row">
                            {list}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReport