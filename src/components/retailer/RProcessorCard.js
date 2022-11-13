import React from 'react'

function RProcessorCard(props) {

    const {product, price, available}=props;

    return (
        <div className="col-3 mb-xl-5 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">

                    <div className="text-end pt-1">
                        <p className="display-7 mb-0 text-capitalize font-weight-bolder">{product}</p>
                    </div>
                </div>
                {/* <hr className="dark horizontal my-0"></hr> */}
                <div className="row">
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Price :</span>&nbsp;&nbsp;₹ {price}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Available :</span>&nbsp;&nbsp;{available}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </div>
                <div className='farmerproduct-body mt-1'>
                    <form role="form" action="" method="POST" name="form">
                        <div class="input-group input-group-outline mb-3">
                            <input type="text" name='retail-quantity' class="form-control" placeholder='Quantity Required' />
                        </div>
                        
                        <div class="text-center">
                            <button type="submit" name="broadcastCrop"
                                class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Accept</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RProcessorCard