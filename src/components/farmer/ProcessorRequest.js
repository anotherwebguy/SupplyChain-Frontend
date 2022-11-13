import React from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorRequestCard from './ProcessorRequestCard'
import Sidebar from './Sidebar'

function ProcessorRequest() {

    const data = [
        {crop:'wheat', processor:'Mohit', quantity:5, price: 1000},
        {crop:'wheat', processor:'Mohit', quantity:5, price: 1000},
        {crop:'wheat', processor:'Mohit', quantity:5, price: 1000},
        {crop:'wheat', processor:'Mohit', quantity:5, price: 1000},
        {crop:'wheat', processor:'Mohit', quantity:5, price: 1000},
    ]

    const list = data.map((d)=>{
        return(
            <ProcessorRequestCard crop={d.crop} processor={d.processor} rquantity={d.quantity} qprice={d.price}></ProcessorRequestCard>
        )
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar proreq='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Processor Request'></SubNav>
                <div className='broadcast-body'>
                    <h3>Your Processor Requests!</h3>
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

export default ProcessorRequest