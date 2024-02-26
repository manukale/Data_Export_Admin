import React from 'react'
import { Link } from 'react-router-dom'

const BloodBank = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid', width: '60%',  gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

                    <div className='paper' >
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Blood Bank TAT report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Blood Component Stock List - Detailed and summary
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Blood Donor Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Blood Sample Collection
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Blood tests & Lab Tests Related to Blood safety
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Blood/Blood Components Received From Other Blood Banks
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'}className='lnk' >
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Blood/Blood Components Sent To Other Blood Banks
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Dispensed and Tainted Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Dispensed and Tainted Report New
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Disposed Blood Component Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Donated Blood Derivatives Report

                        </Link>
                    </div>


                </div>
            </div>
        </>
    )
}

export default BloodBank