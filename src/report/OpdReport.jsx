import React from 'react'
import Header from '../pages/Header'
import Dashboard from '../pages/Dashboard'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const OpdReport = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'grid', width: '60%', gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src='src/assets/images/report_icon.jpg' className='img' alt={'OPD Report'} /><br /><br />Cancel Appointment List
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src='src/assets/images/report_icon.jpg' className='img' alt={'OPD Report'} /><br /><br /> Daily Patient Registration By Department
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src='src/assets/images/report_icon.jpg' className='img' alt={'OPD Report'} /><br /><br />  Form Report
            </Link>
          </div>         
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src='src/assets/images/report_icon.jpg' className='img' alt={'OPD Report'} /><br /><br /> Patient Merge
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/oppatientwaitingtime'} className='lnk'>
              <img src='src/assets/images/report_icon.jpg' className='img' alt={'OPD Report'} /><br /><br />OP Patient Waiting Time
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/outpatientreport'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br /> Outpatient report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/tokendetails'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Token Details
            </Link>
          </div>

        </div>

      </div>
    </>
  )
}

export default OpdReport