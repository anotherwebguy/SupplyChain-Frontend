import React from 'react'

function PaymentCard(props) {

    const { name, eprice, requestedQuantity, qprice, lotId } = props

    return (
        <div className="col-3 mb-xl-5 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">
                    <div className="text-end pt-1">
                        <p className="display-7 mb-0 text-capitalize font-weight-bolder">{name}</p>
                    </div>
                </div>
                {/* <hr className="dark horizontal my-0"></hr> */}
                <div className="row">
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Lot ID :</span>&nbsp;&nbsp;{lotId}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Expected Price :</span>&nbsp;&nbsp;₹{eprice}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Quantity :</span>&nbsp;&nbsp;{requestedQuantity}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Quoted Price :</span>&nbsp;&nbsp;₹{qprice}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div class="text-center mb-1">
                        <button type="submit" name="broadcastCrop"
                            class="btn btn-lg bg-gradient-success btn-lg w-100 mt-4 mb-0">Pay ₹{qprice}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard