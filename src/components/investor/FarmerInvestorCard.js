import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import '../../css/investor.css'
import Farmer from './Farmer';

function FarmerInvestorCard() {

  const navigate = useNavigate()

  const setview = () =>{
    navigate('/investor/farmer')
  }

  return (
    <div className="col-sm-3 mb-4">
      <div className="card investor-card" onClick={setview}>
        <div className="card-header p-3 pt-2">
          <div className="text-end pt-1">
            <p className="display-7 mb-0 text-capitalize font-weight-bolder">0eZiuWO022Zf4Ft14H9d7</p>
          </div>
        </div>
        {/* <hr className="dark horizontal my-0"></hr> */}
        <div className="row">
        <div className="card-footer p-2" >
            <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Yield ID : </span>&nbsp;&nbsp;NGuBk3p500en1yIzQZq&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div className="card-footer p-2" >
            <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Farmer Name : </span>&nbsp;&nbsp;Mohit&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div className="card-footer p-2"  >
            <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Crop Name : </span>&nbsp;&nbsp;Bajra&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div className="card-footer p-2" >
            <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Location : </span>&nbsp;&nbsp;Mumbai&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div className="card-footer p-2" >
            <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Quantity : </span>&nbsp;&nbsp;100&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div className="card-footer p-2" >
            <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Expected Price : </span>&nbsp;&nbsp;₹200&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmerInvestorCard