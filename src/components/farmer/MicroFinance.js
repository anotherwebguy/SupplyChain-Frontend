import React from 'react'
import SubNav from '../../utils/SubNav'
import Sidebar from './Sidebar'

function MicroFinance() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar micro='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Micro Finance'></SubNav>
                <div className='broadcast-body'>
                    <h3>Broadcast for Micro Finance!</h3>
                    <div className='broadcast-form'>
                        <div class="card">
                            <div class="card-header p-3 pt-2">
                                <div
                                    class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                    <i class="material-icons opacity-10">question_answer</i>
                                </div>
                                <div class="text-end pt-1">
                                    <h4 class="mb-0 text-info">Details</h4>
                                </div>
                            </div>
                            <div className='crop-body'>
                                <form role="form" action="" method="POST" name="form">
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="N" name="N" class="form-control" placeholder='Yield ID' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="P" name="P" class="form-control" placeholder='Farmer Name' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="K" name="K" class="form-control" placeholder='Crop Name' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" class="form-control" placeholder='Location' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" class="form-control" placeholder='Quantity' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" class="form-control" placeholder='Expected Price (in ₹)' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" class="form-control" placeholder='Expected Date of Yield Produce' />
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" name="broadcastCrop"
                                            class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Submit</button>
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

export default MicroFinance