import React from 'react'
import '../css/left-timeline.css'
import logo from '../images/verified.jpg'

function LeftTimelineCard(props) {

    const {title, admin, transaction, farmer, farm, exporter}=props

    return (
        <div className='timeline overflow-auto'>
            <div className='container-left'>
                <div className='card-container-left'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='heading-row-left'>
                                <div className='heading-container-left'>
                                    <div>
                                        <h3>{title}</h3>
                                        <div className='d-flex'>
                                            <i className='material-icons pt-0.5 mr-1'>person</i>
                                            <span>Admin ({admin})</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img className='header-image-left' src='https://www.imgonline.com.ua/examples/qr-code-url.png'></img>
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <p>Transaction ID : {transaction}<i className='fa fa-check pl-2'></i></p>
                                    <hr />
                                    <p>Farmer Name : {farmer}<i className='fa fa-check pl-2'></i></p>
                                    <hr />
                                    <p>Farm Address : {farm}<i className='fa fa-check pl-2'></i></p>
                                    <hr />
                                    <p>Exporter Name : {exporter}<i className='fa fa-check pl-2'></i></p>
                                    <img className='header-image2-left' src={logo}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='left-icon' src='https://cdn-icons-png.flaticon.com/512/7595/7595571.png' height={80}></img>
            </div>
        </div>
    )
}

export default LeftTimelineCard