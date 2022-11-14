import React from 'react'
import '../../css/timeline.css'

function Timeline() {
    return (
        <div className='timeline'>
            <div className='container-left'>
                <div className='col-5 pt-5'>
                    <div className='left-icon'>
                        <img src='https://cdn-icons-png.flaticon.com/512/7595/7595571.png' height={80}></img>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='heading-row'>
                                <div className='heading-container'>
                                    <div>
                                        <h3>Cultivation</h3>
                                        <div className='d-flex'>
                                            <i className='material-icons pt-0.5 mr-1'>person</i>
                                            <span>Admin (0x125tg332)</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img className='header-image' src='https://www.imgonline.com.ua/examples/qr-code-url.png'></img>
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <p>Transaction ID: 12<i className='fa fa-check pl-2'></i></p>
                                    <hr />
                                    <p>Farmer Name: Mohit<i className='fa fa-check pl-2'></i></p>
                                    <hr />
                                    <p>Farm Address: UP<i className='fa fa-check pl-2'></i></p>
                                    <hr />
                                    <p>Exporter Name: Sarvesh<i className='fa fa-check pl-2'></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline