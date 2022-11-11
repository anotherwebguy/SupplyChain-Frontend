import React from 'react'
import '../../css/nucleo-icons.css'
import '../../css/nucleo-svg.css'
import '../../css/bootstrap.css'
import '../../css/material-dashboard.css'
import '../../css/result.css'
import Sidebar from './Sidebar'
import SubNav from '../../utils/SubNav'

function Result() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Result'></SubNav>
                <div className="container-fluid py-4">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10"><span className="material-icons">
                                            analytics
                                        </span></i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <h4 className="mb-0 text-info">Results</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                                <img src="{{result_data.1}}" className="rounded-3 result-img" />
                                <div className='result--body'>
                                    <h5>Prediction Result: Anjeer</h5>
                                    <p>Description: very good</p>
                                    <h6>Accuracy: 100%</h6>
                                </div>
                            </div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
}

export default Result