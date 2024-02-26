import React from 'react'
import { Link } from 'react-router-dom'

const OperationReport = () => {
  return (

    <div style={{ display: 'flex' }}>
      <div style={{ display: 'grid', width: '60%', gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />ALOS & ARPOB Report
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />CM Dashboard Report
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Feedback Form Report IP
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Feedback Form Report IP With Score
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Feedback Form Report OP
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Feedback Form Report OP With Score
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Feedback Statistics Report
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Feedback Statistics Report IP
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Feedback Statistics Report OP
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Monthly Revenue Report
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />OP Census By Department
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />OP Census By Doctor
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Order Count By Department
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Package Revenue Detail Report By Payor Group
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Patient & Collection Summary
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Patient Ledger Report
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Revenue Report
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Revenue Report By Category
                    </Link>
                </div>
      <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Revenue Report By Department
                    </Link>
                </div>
        <div className='paper'>
          <Link to={'/visitstatisticsreport'} className='lnk'>
            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />   Visit Statistics Report
          </Link>
        </div>
        <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Visit and Collection Summary
                    </Link>
                </div>

      </div>
    </div>

  )
}

export default OperationReport