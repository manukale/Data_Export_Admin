import React from 'react'
import { Link } from 'react-router-dom'

const MrReport = () => {
    return (

        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid', width: '60%', gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />ANC Visit Detail Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Diagnosis Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'/mlcpatientreport'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />   MLC Patient Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />MR Folder Outstanding
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Scanned Documents Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Top 10 Diagnosis Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Top Procedures report
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MrReport