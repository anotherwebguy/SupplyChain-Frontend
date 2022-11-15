import React from 'react'

function NARightCard() {
    return (
        <div className='timeline overflow-auto'>
            <div className='container-right'>
                <img className='right-icon' src='https://www.pngall.com/wp-content/uploads/2016/04/Red-Cross-Mark-PNG-File.png' height={80}></img>
                <div className='card-container-right'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='heading-row-right'>
                                <div className='heading-container-right'>
                                    <div>
                                        <h3>Consumer</h3>
                                        <div className='d-flex'>
                                            <i className='material-icons pt-0.5 mr-1'>person</i>
                                            <span >Sarvesh Dhage</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <table class="table activityData table-responsive">
                                        <tr>
                                            <td colspan="2"><p>Information Not Avilable</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NARightCard
