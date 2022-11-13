import React from 'react'

function TransactionCard(props) {

    const { lotId, processor, price, quantity} = props

    return (
        <div className="col-3 mb-xl-5 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">

                    <div className="text-end pt-1">
                        <p className="display-7 mb-0 text-capitalize font-weight-bolder">Lot ID : {lotId}</p>
                    </div>
                </div>
                {/* <hr className="dark horizontal my-0"></hr> */}
                <div className="row">
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Processor :</span>&nbsp;&nbsp;{processor}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Quantity sold :</span>&nbsp;&nbsp;{quantity}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Quoted Price :</span>&nbsp;&nbsp;₹{price}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard