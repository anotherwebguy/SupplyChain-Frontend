import React from 'react'
import '../css/Registration.css'

function Registration() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand text-white" href="#">
                    Registration
                </a>
            </nav>
            <div className="countainer">
                <div className='card'>
                    <div className="card-header p-3 pt-2">
                        <div
                            className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                            <i className="material-icons opacity-10">question_answer</i>
                        </div>
                        <div className="text-end pt-1">
                            <h4 className="mb-0 text-info">Registration</h4>
                        </div>
                    </div>
                    <div className='fertiliser-body'>
                        <form action="" method="POST" name="form">
                            <label className={"label-r"}> Account Address:</label>
                            <div className="input-group input-group-outline mb-3">
                                <input type="text" id="Acc-address" name="Account Address"  className="form-control" placeholder='0x237FFFe1beBA4Cd88E6b6e8f2b7aA55DC0556A21' />
                            </div>
                            <label className={"label-r"}> Name:</label>
                            <div className="input-group input-group-outline mb-3">
                                <input type="text" id="name" name="name" className="form-control" placeholder='Mohit' />
                            </div>
                            <label className={"label-r"}> Contact No:</label>
                            <div className="input-group input-group-outline mb-3 ">
                                <input type="text" id="contact" name="contact" className="form-control" placeholder='9823456732' />
                            </div>
                            <label className={"label-r"}> Address:</label>
                            <div className="input-group input-group-outline mb-3">
                                <textarea id="address" name="address" className="form-control" placeholder='Enter your address here' />
                            </div>
                            <p className="note">
                                <span style={{ color: "tomato" }}> Note: </span>
                                <br /> Make sure your account address and Phone number are
                                correct. <br /> Admin might not approve your account if the
                                provided Phone number nub does not matches the account
                                address registered in admins catalogue.
                            </p>
                        </form>
                        <button type="submit"
                            className="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
