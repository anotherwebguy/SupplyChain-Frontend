import React from 'react'
import ProcessorSidebar from './ProcessorSidebar'
import SubNav from '../../utils/SubNav'
import NALeftCard from '../../utils/NALeftCard'
import NARightCard from '../../utils/NARightCard'
import LeftTimelineCard from '../../utils/LeftTimelineCard'
import RightTimelineCard from '../../utils/RightTimelineCard'

function ProcessorTracking() {

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
                <LeftTimelineCard admin={d.admin} title={d.title}transaction={d.transaction} farmer={d.farmer} farm={d.farm} exporter={d.exporter}></LeftTimelineCard>
            )
        }
        i++;
        return(
            <RightTimelineCard admin={d.admin} title={d.title}transaction={d.transaction} farmer={d.farmer} farm={d.farm} exporter={d.exporter}></RightTimelineCard>
        )
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <ProcessorSidebar status='1'></ProcessorSidebar>
            </div>
            <div className='right-body'>
                <SubNav heading='Track Status'></SubNav>
                <div className='broadcast-body'>
                    <h3>Batch Report</h3>
                    {list}
                    <NALeftCard />
                    <NARightCard />
                </div>
            </div>
        </div>
    )
}

export default ProcessorTracking