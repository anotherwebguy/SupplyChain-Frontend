import React from 'react'

function ReportsWithPaymentCard(props) {

    const {name, quantity} = props
    
  return (
    <div className="col-3 mb-xl-5 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">
                   
                    <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize font-weight-bolder">Info</p>
                    </div>
                </div>
                {/* <hr className="dark horizontal my-0"></hr> */}
                <div className="row">
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Name: </span>&nbsp;&nbsp;{name}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Quantity: </span>&nbsp;&nbsp;{quantity}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ReportsWithPaymentCard