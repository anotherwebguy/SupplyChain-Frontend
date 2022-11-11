import React from 'react'
import '../../css/nucleo-icons.css'
import '../../css/nucleo-svg.css'
import '../../css/bootstrap.css'
import '../../css/material-dashboard.css'
import Sidebar from './Sidebar'
import '../../css/broadcast.css'
import SubNav from '../../utils/SubNav'


function Broadcast() {
    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar broad='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Broadcast'></SubNav>
                <div className='broadcast-body'>
                    <h3>Add a new Broadcast!</h3>
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
                                        <input type="text" id="N" name="N" class="form-control" placeholder='Enter your name' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="P" name="P" class="form-control" placeholder='Enter crop name' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="K" name="K" class="form-control" placeholder='Quantity' />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="text" id="temperature" name="temperature" class="form-control" placeholder='Expected Price (in ₹)' />
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" name="broadcastCrop"
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

export default Broadcast