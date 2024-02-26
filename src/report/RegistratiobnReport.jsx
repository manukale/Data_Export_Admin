import React from 'react'
import { Link } from 'react-router-dom'

const RegistratiobnReport = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'grid', width: '60%',  gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

                <div className='paper'>
                    <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Doctor Order Sheet
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'/newregisteredpatient'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />New Registered Patients
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Package Item Details
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'/patientdemographicreport'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Patient Demographic Report
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Patient Demographic Report IP
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'#'} className='lnk' >
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br />Patient Demographic Report Op &ER
                        </Link>
                </div>
                

            </div>
        </div>
    )
}

export default RegistratiobnReport