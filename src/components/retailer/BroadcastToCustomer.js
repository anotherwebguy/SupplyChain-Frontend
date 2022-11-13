import React from 'react'
import SubNav from '../../utils/SubNav'
import RetailerSidebar from './RetailerSidebar'

function BroadcastToCustomer() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <RetailerSidebar broadcastToCustomer='1'></RetailerSidebar>
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
                                    <select id="processor_keys" name="retailer" class="form-select form-select-lg mb-3" >
                                        <option selected>Select Processor Keys</option>
                                        <option value="Sandy">Maize</option>
                                        <option value="Loamy">Chana</option>
                                        <option value="Black">Jowar</option>
                                        <option value="Red">Wheat</option>
                                        <option value="Clayey">Paddy</option>
                                    </select>
                                    <select id="produce" name="retailer" class="form-select form-select-lg mb-3" >
                                        <option selected>Select Produce</option>
                                        <option value="Sandy">Maize</option>
                                        <option value="Loamy">Chana</option>
                                        <option value="Black">Jowar</option>
                                        <option value="Red">Wheat</option>
                                        <option value="Clayey">Paddy</option>
                                    </select>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="K" name="K" class="form-control" placeholder='Quantity' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" class="form-control" placeholder='Price for each unit (in ₹)' />
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" name="broadcastCrop"
                                            class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Broadcast</button>
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

export default BroadcastToCustomer