import React from 'react'
import SubNav from '../../utils/SubNav'
import Sidebar from './Sidebar'
import TransactionCard from './TransactionCard'

function Transaction() {

    const data = [
        {
            lotId: 123424,
            processor: 'sdlf12',
            quantity: 10,
            price: 1000
        },
        {
            lotId: 123424,
            processor: 'sdlf12',
            quantity: 10,
            price: 1000
        },{
            lotId: 123424,
            processor: 'sdlf12',
            quantity: 10,
            price: 1000
        },{
            lotId: 123424,
            processor: 'sdlf12',
            quantity: 10,
            price: 1000
        },{
            lotId: 123424,
            processor: 'sdlf12',
            quantity: 10,
            price: 1000
        },
    ]

    const list = data.map((d) => {
        return (
            <TransactionCard lotId={d.lotId} processor={d.processor} quantity={d.quantity} price={d.price}></TransactionCard>
        )
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar trans='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Transactions'></SubNav>
                <div className='broadcast-body'>
                    <h3>List of Transactions</h3>
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

export default Transaction