import React from 'react'

function NALeftCard() {
  return (
    <div className='timeline overflow-auto'>
            <div className='container-left'>
                <div className='card-container-left'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='heading-row-left'>
                                <div className='heading-container-left'>
                                    <div>
                                        <h3>Retailer</h3>
                                        <div className='d-flex'>
                                            <i className='material-icons pt-0.5 mr-1'>person</i>
                                            <span>Sarvesh kale</span>
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
                <img className='left-icon' src='https://www.pngall.com/wp-content/uploads/2016/04/Red-Cross-Mark-PNG-File.png' height={80}></img>

            </div>
        </div>
  )
}

export default NALeftCard
