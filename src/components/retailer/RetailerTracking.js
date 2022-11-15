import React from 'react'
import RetailerSidebar from './RetailerSidebar';
import LeftTimelineCard from '../../utils/LeftTimelineCard';
import RightTimelineCard from '../../utils/RightTimelineCard';
import NALeftCard from '../../utils/NALeftCard';
import NARightCard from '../../utils/NARightCard';
import SubNav from '../../utils/SubNav';

function RetailerTracking() {
    const data = [
        { title: 'Farm-Inspector', admin: '3314c3158152d0b40DE2', farm: 'Nashik', farmer: 'Mohit', exporter: 'Sarvesh', transaction: '1234556' },
        { title: 'Farm-Inspector', admin: '3314c3158152d0b40DE2', farm: 'Nashik', farmer: 'Mohit', exporter: 'Sarvesh', transaction: '1234556' },
        { title: 'Farm-Inspector', admin: '3314c3158152d0b40DE2', farm: 'Nashik', farmer: 'Mohit', exporter: 'Sarvesh', transaction: '1234556' },
        { title: 'Farm-Inspector', admin: '3314c3158152d0b40DE2', farm: 'Nashik', farmer: 'Mohit', exporter: 'Sarvesh', transaction: '1234556' },
    ]

    let i = 0;

    const list = data.map((d) => {
        if (i % 2 === 0) {
            i++;
            return (
                <LeftTimelineCard admin={d.admin} title={d.title} transaction={d.transaction} farmer={d.farmer} farm={d.farm} exporter={d.exporter}></LeftTimelineCard>
            )
        }
        i++;
        return (
            <RightTimelineCard admin={d.admin} title={d.title} transaction={d.transaction} farmer={d.farmer} farm={d.farm} exporter={d.exporter}></RightTimelineCard>
        )
    })

    return (
        <div className='home-body'>
            <div className='left-body'>
                <RetailerSidebar status='1'></RetailerSidebar>
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

export default RetailerTracking