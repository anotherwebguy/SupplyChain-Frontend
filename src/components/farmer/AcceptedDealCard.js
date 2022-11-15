import React from 'react'

function AcceptedDealCard(props) {
    const { farmer, crop, location, quantity, share, amount, date, price } = props

    return (
        <div className="col-3 mb-xl-5 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">

                    <div className="text-end pt-1">
                        <p className="display-7 mb-0 text-capitalize font-weight-bolder">{farmer}</p>
                    </div>
                </div>
                {/* <hr className="dark horizontal my-0"></hr> */}
                <div className="row">
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Crop Name :</span>&nbsp;&nbsp;{crop}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">Location :</span>&nbsp;&nbsp;{location}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">Quantity :</span>&nbsp;&nbsp;{quantity}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Price :</span>&nbsp;&nbsp;₹ {price}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">Expiry Date :</span>&nbsp;&nbsp;{date}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">Received Amount :</span>&nbsp;&nbsp;₹ {amount}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">Holding % :</span>&nbsp;&nbsp;{share}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcceptedDealCard