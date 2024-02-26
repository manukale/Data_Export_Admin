import React from 'react'
import Dashboard from '../pages/Dashboard'
import Header from '../pages/Header'
import { Link } from 'react-router-dom'

const IpdReport = () => {
  return (
    <>


      <div style={{ display: 'flex' }}>
        <div style={{ display: 'grid', width: '60%',  gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>


          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Admission Conversion Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Cancel Orders Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Company wise Inpatient list
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Daily Occupancy Report (MIS)
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Daily Occupancy Report (MIS) Old
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Day Wise Occupancy Summary Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/daywiseoccupancydetail'} className='lnk'>
              {/* src\assets\images\report_icon.jpg  <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Revenue IP Report */}
              <img src='src/assets/images/report_icon.jpg' className='img' alt={'OPD Report'} /><br /><br />Day Wise Occupancy Detail
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Deceased Patient List
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/dischargeipreport'} className='lnk' >
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br />  Discharge IP Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Discharge IP Report (Covid - 19)
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/dischargetatreport'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Discharge TAT Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Doctor Wise IP Admission
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Form Certificate Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Form Template Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />IP Occupancy Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/ipoccupancyreport'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />IP Occupancy Report Static
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/ipregistration'} className='lnk' >
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Billing Report'} /><br /><br /> IP Registration
            </Link>
          </div>
          <div className='paper'>
            <Link to={'/iputilization'} className='lnk' >
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />IP Utilization
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> In Patient Expenses
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Length Of Stay
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />New Born Details
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Visit Statistics Report
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Ward Transfer
            </Link>
          </div>
          <div className='paper'>
            <Link to={'#'} className='lnk'>
              <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Vacant bed
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default IpdReport