import React, { useState } from 'react'
import '../../css/nucleo-icons.css'
import '../../css/nucleo-svg.css'
import '../../css/bootstrap.css'
import '../../css/material-dashboard.css'
import Sidebar from './Sidebar'
import '../../css/recommendation.css'
import Result from './Result'
import { useNavigate } from 'react-router-dom'
import axios from '../../django-ML-Api/axios'
import requests from '../../django-ML-Api/requests'
import SubNav from '../../utils/SubNav'

function Recommendation() {

    const [form1Data, setForm1Data] = useState({
        N:"",
        P:"",
        K:"",
        temperature:"",
        humidity:"",
        ph:"",
        rainfall:""
    })

    const [form2Data, setForm2Data] = useState({
        Temperature:"",
        Humidity:"",
        Moisture:"",
        soil_type:"select",
        crop_type:"select",
        Nitrogen:"",
        Potassium:"",
        Phosphorous:"",
    })

    const arr = [];

    const [predictionData, setPredictionData] = useState([])

    const [loadingStatus, setLoadingStatus] = useState(false)

    const soilTypes = ['Sandy', 'Loamy', 'Black', 'Red', 'Clayey']
    const cropTypes = ['Maize', 'Sugarcane', 'Cotton', 'Tobacco', 'Paddy', 'Barley', 'Wheat', 'Millets', 'Oil seeds', 'Pulses', 'Ground Nuts']

    const handleChange1 = (e, changeKey=undefined) => {
        // console.log(changeKey, e.target.value)
        let newData = {...form1Data}
        newData[e.target.id] = e.target.value
        console.log(newData)
        setForm1Data(newData)
    }

    const handleChange2 = (e, changeKey=undefined) => {
        // console.log(changeKey, e.target.value)
        let newData = {...form2Data}
        if(changeKey) {
            newData[changeKey] = e.target.value
        }
        else newData[e.target.id] = e.target.value
        console.log(newData)
        setForm2Data(newData)
    }

    const handleClick1 = async () => {

        setLoadingStatus(true)
        
        const request = new FormData()

        for(let key in form1Data) {
            console.log(key, form1Data[key])
            request.append(key, form1Data[key])
        }
        console.log(request)
        console.log(requests.cropApi)
        const response = await axios.post(
            requests.cropApi,
            request
        )
        console.log(response)
        const responseData = response.data
        console.log(responseData)
        console.log("idr dhyan de")
        arr = []
        arr.push(responseData[0])
        arr.push(responseData[1])
        arr.push(responseData[2])
        console.log(arr)
        setLoadingStatus(false)
        resultPage()
    }

    const handleClick2 = async () => {

        setLoadingStatus(true)
        
        const request = new FormData()

        for(let key in form2Data) {
            request.append(key, form2Data[key])
        }

        const response = await axios.post(
            requests.fertilizerAPi,
            request
        )
        
        const responseData = response.data
        arr = []
        arr.push(responseData[0])
        arr.push(responseData[1])
        arr.push(responseData[2])
        setLoadingStatus(false)
    }

    const handleBackClick = () => {
        setPredictionData({
            crop_name: "",
            image_url: "",
            crop_details: "",
        })
    }

    const navigate = useNavigate()

    const resultPage = ()=>{
        navigate('/recommendations/result',{state:{data:arr}});
    }
    
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar rec="1"></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Recommendations'></SubNav>


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
                                        <input type="text" id="N" name="N" key="N" onChange={(e) => handleChange1(e)} class="form-control" placeholder='Amount of Nitrogen in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="P" name="P" key="P" onChange={(e) => handleChange1(e)} class="form-control" placeholder='Amount of Phosphorous in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="K" name="K" key="K" onChange={(e) => handleChange1(e)} class="form-control" placeholder='Amount of Postassium in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" key="temperature" onChange={(e) => handleChange1(e)}  class="form-control" placeholder='Temperature (in Celcius)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="humidity" name="humidity" key="humidity" onChange={(e) => handleChange1(e)}  class="form-control" placeholder='Humidity (in %)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="ph" name="ph" key="ph" onChange={(e) => handleChange1(e)}  class="form-control" placeholder='pH value of Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="rainfall" key="rainfall" onChange={(e) => handleChange1(e)}  name="rainfall" class="form-control" placeholder='Rainfall (in mm)' />
                                    </div>
                                    <div class="text-center">
                                        <button type="button" name="broadcastCrop" onClick={()=>handleClick1()}
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
                                        <input type="text" id="Nitrogen" name="Nitrogen" key="Nitrogen" onChange={(e) => handleChange2(e)} class="form-control" placeholder='Amount of Nitrogen in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Potassium" name="Potassium" key="Potassium" onChange={(e) => handleChange2(e)}  class="form-control" placeholder='Amount of Postassium in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Phosphorous" name="Phosphorous" key="Phosphorous" onChange={(e) => handleChange2(e)}  class="form-control" placeholder='Amount of Phosphorous in Soil' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Temperature" name="Temperature" key="Temperature" onChange={(e) => handleChange2(e)}  class="form-control" placeholder='Temperature (in Celcius)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="Humidity" name="Humidity" key="Humidity" onChange={(e) => handleChange2(e)}  class="form-control" placeholder='Humidity (in %)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3 ">
                                        <input type="text" id="Moisture" name="Moisture" key="Moisture" onChange={(e) => handleChange2(e)}   class="form-control" placeholder='Moisture in Soil' />
                                    </div>
                                    <select id="soil_type" name="soil_type" onChange={(e) => handleChange2(e, "soil_type")} class="form-select form-select-lg mb-3" >
                                        <option selected>Select Soil Type</option>
                                        <option value="Sandy">Sandy</option>
                                        <option value="Loamy">Loamy</option>
                                        <option value="Black">Black</option>
                                        <option value="Red">Red</option>
                                        <option value="Clayey">Clayey</option>
                                    </select>
                                    <select id="crop_type" name="crop_type" onChange={(e) => handleChange2(e, "crop_type")} class="form-select form-select-lg mb-3 " >
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
                                        <button type="submit" name="broadcastFertilizer" onClick={handleClick2}
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