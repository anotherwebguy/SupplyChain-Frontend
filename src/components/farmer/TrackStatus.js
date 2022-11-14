import React from 'react'
import SubNav from '../../utils/SubNav'
import Sidebar from './Sidebar'
import '../../css/bootstrap.css'
import LeftTimelineCard from './LeftTimelineCard'
import RightTimelineCard from './RightTimelineCard'

function TrackStatus() {

    const data = [
        {title:'Farm-Inspector', admin:'3314c3158152d0b40DE2', farm:'Nashik', farmer:'Mohit', exporter:'Sarvesh', transaction:'1234556'},
        {title:'Farm-Inspector', admin:'3314c3158152d0b40DE2', farm:'Nashik', farmer:'Mohit', exporter:'Sarvesh', transaction:'1234556'},
        {title:'Farm-Inspector', admin:'3314c3158152d0b40DE2', farm:'Nashik', farmer:'Mohit', exporter:'Sarvesh', transaction:'1234556'},
        {title:'Farm-Inspector', admin:'3314c3158152d0b40DE2', farm:'Nashik', farmer:'Mohit', exporter:'Sarvesh', transaction:'1234556'},
    ]

    let i=0;

    const list = data.map((d)=>{
        if(i%2 === 0){
            i++;
            return(
                <LeftTimelineCard admin={d.admin} transaction={d.transaction} farmer={d.farmer} farm={d.farm} exporter={d.exporter}></LeftTimelineCard>
            )
        }
        i++;
        return(
            <RightTimelineCard admin={d.admin} transaction={d.transaction} farmer={d.farmer} farm={d.farm} exporter={d.exporter}></RightTimelineCard>
        )
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <Sidebar status='1'></Sidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Track Status'></SubNav>
                <div className='broadcast-body'>
                    <h3>Batch Report</h3>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default TrackStatus