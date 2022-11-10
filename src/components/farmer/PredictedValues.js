import React from 'react'
import '../../css/predictedvalues.css';
import gain from '../../images/gain-icon.png';
import loss from '../../images/loss-icon.png';
import '../../css/nucleo-icons.css'
import '../../css/nucleo-svg.css'
import '../../css/bootstrap.css'
import '../../css/material-dashboard.css'

function PredictedValues() {
    return (
        <div className='value-body'>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div
                                    className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">agriculture</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 className="mb-0">200</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0"></hr>
                            <div className="row">
                                <div className="card-footer p-3" >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Hello :</span>&nbsp;&nbsp;₹500&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >rainy<img src={gain} height="25" width="25" /></span></p>
                                </div>
                                <div className="card-footer p-3"  >
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder" >Hello :</span>&nbsp;&nbsp;₹500&nbsp;&nbsp;&nbsp;&nbsp;<span className="valign-wrapper right" >rainy<img
                                        src={loss} height="25" width="25" /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-header p-3 pt-2">
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                    <i class="material-icons opacity-10">agriculture</i>
                                </div>
                                <div class="text-end pt-1">
                                    <p class="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 class="mb-0">500</h4>
                                </div>
                            </div>
                            <hr class="dark horizontal my-0" />
                            <div class="row">
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder" >Hello :</span>&nbsp;&nbsp;₹500&nbsp;&nbsp;&nbsp;&nbsp;<span class="valign-wrapper right">500<img
                                        src={gain} height="25" width="25" /></span></p>
                                </div>
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">Hello :</span>&nbsp;&nbsp;₹500&nbsp;&nbsp;&nbsp;&nbsp;<span class="valign-wrapper right" >500<img
                                        src={loss} height="25" width="25" /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-header p-3 pt-2">
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                    <i class="material-icons opacity-10">agriculture</i>
                                </div>
                                <div class="text-end pt-1">
                                    <p class="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 class="mb-0">smthng</h4>
                                </div>
                            </div>
                            <hr class="dark horizontal my-0" />
                            <div class="row">
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder" >Hello :</span>&nbsp;&nbsp;₹500&nbsp;&nbsp;&nbsp;&nbsp;<span class="valign-wrapper right" >rainy<img
                                        src={gain} height="25" width="25" /></span></p>
                                </div>
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder" >Hello :</span>&nbsp;&nbsp;₹500&nbsp;&nbsp;&nbsp;&nbsp;<span class="valign-wrapper right">Hello<img
                                        src={loss} height="25" width="25" /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-header p-3 pt-2">
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                    <i class="material-icons opacity-10">agriculture</i>
                                </div>
                                <div class="text-end pt-1">
                                    <p class="text-sm mb-0 text-capitalize">predictions</p>
                                    <h4 class="mb-0">dec 2022</h4>
                                </div>
                            </div>
                            <hr class="dark horizontal my-0"/>
                                <div class="row">
                                    <div class="card-footer p-3">
                                        <p class="mb-0"><span class="text-success text-sm font-weight-bolder" >hello :</span>&nbsp;&nbsp;₹500&nbsp;&nbsp;&nbsp;&nbsp;<span class="valign-wrapper right" >rainy<img
                                            src={gain} height="25" width="25" /></span></p>
                                    </div>
                                    <div class="card-footer p-3">
                                        <p class="mb-0"><span class="text-success text-sm font-weight-bolder" >hello :</span>&nbsp;&nbsp;₹500 &nbsp;&nbsp;&nbsp;&nbsp;<span class="valign-wrapper right">hello<img
                                            src={loss} height="25" width="25" /></span></p>
                                    </div>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PredictedValues