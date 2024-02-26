import React from 'react'
import { Link } from 'react-router-dom'

const LabReports = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid', width: '60%',  gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Average Waiting Time
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Biochemistry Data Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'/labtatreport'} className='lnk' >
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Lab TAT Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Lab Test Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Lab Test Report New
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Lab Test Wise Count
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'/labtestwisecountnew'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br />Lab Test Wise Count New
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Microbiology Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Microbiology- Bacteriology Data
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Pathology Report - Numeric
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Pathology Report - Textual
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Serology Data Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Specimen Rejection Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Top 10 LAB Orders Report
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LabReports