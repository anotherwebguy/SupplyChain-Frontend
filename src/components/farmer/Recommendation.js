import React, { useState } from 'react'
import '../../css/nucleo-icons.css'
import '../../css/nucleo-svg.css'
import '../../css/bootstrap.css'
import '../../css/material-dashboard.css'
import Sidebar from './Sidebar'
import '../../css/recommendation.css'
import Result from './Result'
import { useNavigate } from 'react-router-dom'

function Recommendation() {

    const navigate = useNavigate()

    const resultPage = ()=>{
        navigate('/recommendations/result');
    }

    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar rec="1"></Sidebar>
            </div>
            <div className='right-body'>
                <div className='nav-recom'>
                    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-1 shadow-none border-radius-xl" id="navbarBlur"
                        navbar-scroll="true">
                        <div class="container-fluid py-1 px-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a>
                                    </li>
                                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Recommendations</li>
                                </ol>
                                <h6 class="font-weight-bolder mb-0">Recommendations</h6>
                            </nav>
                        </div>
                    </nav>
                </div>


                {/* Crop Recommendation Form */}

                <div className='recommendationform-body'>
                    <div className='left-container'>
                        <div class="card">
                            <div class="card-header p-3 pt-2">
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                    <i class="material-icons opacity-10">question_answer</i>
                                </div>
                                <div class="text-end pt-1">
                                    <h4 class="mb-0 text-info">Crop Recommender</h4>
                                </div>
                            </div>
                            <div className='crop-body'>
                                <form role="form" action="" method="POST" name="form">
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="N" name="N" class="form-control" placeholder='Amount of Nitrogen in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="P" name="P" class="form-control" placeholder='Amount of Phosphorous in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="K" name="K" class="form-control" placeholder='Amount of Postassium in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" class="form-control" placeholder='Temperature (in Celcius)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="humidity" name="humidity" class="form-control" placeholder='Humidity (in %)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="ph" name="ph" class="form-control" placeholder='pH value of Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="rainfall" name="rainfall" class="form-control" placeholder='Rainfall (in mm)' />
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" name="broadcastCrop" onClick={resultPage}
                                            class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Predict Crop</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Fertiliser Recommendation Form */}

                    <div className='right-container'>
                        <div class='card'>
                            <div class="card-header p-3 pt-2">
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                    <i class="material-icons opacity-10">question_answer</i>
                                </div>
                                <div class="text-end pt-1">
                                    <h4 class="mb-0 text-info">Fertilizer Recommender</h4>
                                </div>
                            </div>
                            <div className='fertiliser-body'>
                                <form role="form" action="" method="POST" name="form">
                                    {/* {% csrf_token %} */}
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Nitrogen" name="Nitrogen" class="form-control" placeholder='Amount of Nitrogen in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Potassium" name="Potassium" class="form-control" placeholder='Amount of Postassium in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Phosphorous" name="Phosphorous" class="form-control" placeholder='Amount of Phosphorous in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Temparature" name="Temparature" class="form-control" placeholder='Temperature (in Celcius)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Humidity" name="Humidity" class="form-control" placeholder='Humidity (in %)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3 ">
                                        <input type="text" id="Moisture" name="Moisture" class="form-control" placeholder='Moisture in Soil' />
                                    </div>
                                    <select id="soil_type" name="soil_type" class="form-select form-select-lg mb-3" >
                                        <option selected>Select Soil Type</option>
                                        <option value="Sandy">Sandy</option>
                                        <option value="Loamy">Loamy</option>
                                        <option value="Black">Black</option>
                                        <option value="Red">Red</option>
                                        <option value="Clayey">Clayey</option>
                                    </select>
                                    <select id="crop_type" name="crop_type" class="form-select form-select-lg mb-3 " >
                                        <option selected>Select Crop Type</option>
                                        <option value="Maize">Maize</option>
                                        <option value="Sugarcane">Sugarcane</option>
                                        <option value="Cotton">Cotton</option>
                                        <option value="Tobacco">Tobacco</option>
                                        <option value="Paddy">Paddy</option>
                                        <option value="Barley">Barley</option>
                                        <option value="Wheat">Wheat</option>
                                        <option value="Millets">Millets</option>
                                        <option value="Oil seeds">Oil seeds</option>
                                        <option value="Pulses">Pulses</option>
                                        <option value="Ground Nuts">Ground Nuts</option>
                                    </select>
                                    <div class="text-center">
                                        <button type="submit" name="broadcastFertilizer" onClick={resultPage}
                                            class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Predict
                                            Fertilizer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default Recommendation