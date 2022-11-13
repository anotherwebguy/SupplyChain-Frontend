import React from 'react'
import '../../css/farmerbroadcast.css'

function FarmerBroadcastCard(props) {

    const {crop, name, price, quantity} = props;

    return (
        <div className="col-xl-3 col-sm-6 mb-xl-5 mb-4">
            <div className="card">
                <div className="card-header p-3 pt-2">
                    <div
                        className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        <i className="material-icons opacity-10">grass</i>
                    </div>
                    <div className="text-end pt-1">
                        <p className="text-md mb-0 text-capitalize">{crop}</p>
                        <h4 className="mb-0">{name}</h4>
                    </div>
                </div>
                <hr className="dark horizontal my-0"></hr>
                <div className="row">
                    <div className="card-footer p-2" >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Expected Price :</span>&nbsp;&nbsp;₹{price}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="card-footer p-2"  >
                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Available :</span>&nbsp;&nbsp;{quantity}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </div>
                <div className='farmerproduct-body'>
                    <form role="form" action="" method="POST" name="form">
                        <div class="input-group input-group-outline mb-3">
                            <input type="text" id="N" name="N" class="form-control" placeholder='Quantity Required' />
                        </div>
                        <div class="input-group input-group-outline mb-3">
                            <input type="text" id="P" name="P" class="form-control" placeholder='Price Quoted' />
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

export default FarmerBroadcastCard