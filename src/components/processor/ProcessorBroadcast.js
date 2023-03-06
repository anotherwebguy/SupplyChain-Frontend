import React, { useState } from 'react'
import SubNav from '../../utils/SubNav'
import ProcessorSidebar from './ProcessorSidebar'

function ProcessorBroadcast() {

    const[product, setProduct] = useState("")
    const[quantity, setQuantity] = useState("")
    const[price, setPrice] = useState("")
    const[crop, setCrop] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(product+" "+quantity+" "+price+" "+crop);
    }

    return (
        <div className='home-body'>
            <div className='left-body'>
                <ProcessorSidebar pbroad='1'></ProcessorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Broadcast'></SubNav>
                <div className='broadcast-body'>
                    <h3>Add a new Broadcast!</h3>
                    <div className='broadcast-form'>
                        <div class="card">
                            <div class="card-header p-3 pt-2">
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-danger shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                    <i class="material-icons opacity-10">question_answer</i>
                                </div>
                                <div class="text-end pt-1">
                                    <h4 class="mb-0 text-info">Details</h4>
                                </div>
                            </div>
                            <div className='crop-body'>
                                <form role="form" action="" method="POST" name="form">
                                <select id="available_crop" name="crops" onChange={e => setCrop(e.target.value)} class="form-select form-select-lg mb-3" >
                                        <option selected>Select available crops</option>
                                        <option value="Maize">Maize</option>
                                        <option value="Chana">Chana</option>
                                        <option value="Jowar">Jowar</option>
                                        <option value="Wheat">Wheat</option>
                                        <option value="Paddy">Paddy</option>
                                    </select>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="P" name="P" class="form-control" onChange={e => setProduct(e.target.value)} placeholder='Enter crop name' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" onChange={e => setQuantity(e.target.value)} id="K" name="K" class="form-control" placeholder='Quantity' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" onChange={e => setPrice(e.target.value)} class="form-control" placeholder='Expected Price (in ₹)' />
                                    </div>
                                    <div class="text-center">
                                        <button name="broadcastCrop" onClick={e => handleSubmit(e)}
                                            class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessorBroadcast