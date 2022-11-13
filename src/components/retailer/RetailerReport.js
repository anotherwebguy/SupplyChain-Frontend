import React from 'react'
import SubNav from '../../utils/SubNav'
import RetailerReportCard from './RetailerReportCard'
import RetailerSidebar from './RetailerSidebar'

function RetailerReport() {

    const data=[
        {product:'Chana', lotId:'123louj', productId:'12j3h', quantity:10},
        {product:'Bajra', lotId:'123louj', productId:'12j3h', quantity:10},
        {product:'Jowar', lotId:'123louj', productId:'12j3h', quantity:10},
        {product:'Chana', lotId:'123louj', productId:'12j3h', quantity:10},
    ]

    const list = data.map((d)=>{
        return(
            <RetailerReportCard product={d.product} lotId={d.lotId} productId={d.productId} quantity={d.quantity}></RetailerReportCard>
        )
    })


  return (
    <div className='home-body'>
        <div className='left-body'>
            <RetailerSidebar addreport='1'></RetailerSidebar>
        </div>
        <div className='right-body'>
            <SubNav heading='Add Report'></SubNav>
            <div className='broadcast-body'>
                <h3>Add Report</h3>
                <div className='container-fluid py-4'>
                    <div className='row'>
                        {list}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RetailerReport