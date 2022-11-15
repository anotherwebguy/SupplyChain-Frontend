import React, { useState } from 'react'
import ReactModal from 'react-modal'

function Modal() {

    const [open, setopen] = useState(false)

    return (
        <div>
            <div className='d-flex top-header'>
                <h3 className='h3f'>Credibility score : 12</h3>
                <button onClick={()=> setopen(true)} className='btn btn-simple btn-info mr-4'>Make a Deal</button>
            </div>
            <ReactModal isOpen={open}>
                <h2 className='text-center mb-5'>Deal</h2>
                <form>
                    <div class="input-group input-group-outline mb-3">
                        <input type="text" id="amount" name="amount" class="form-control" placeholder='Enter Amount in ₹' />
                    </div>
                    <div class="input-group input-group-outline mb-4">
                        <input type="text" id="share" name="share" class="form-control" placeholder='Holding %' />
                    </div>
                </form>
                <div className='text-center'>
                <button className='btn btn-simple btn-success'>Invest</button>
                <button className='btn btn-simple btn-danger ml-2' onClick={() => setopen(false)}>Close</button>
                </div>
            </ReactModal>
        </div>
    )
}

export default Modal