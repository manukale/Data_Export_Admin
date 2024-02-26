import React from 'react'
import { Link } from 'react-router-dom'

const labReport = () => {
  return (
    <>
    <div style={{display:'flex' ,gap:50}}>

    <div  className='paper'>
        <Link to={'#'} >
            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br/><br/>New Registered Patients
        </Link>
    </div>
    <div className='paper'>
        <Link to={'#'} >
            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br/><br/>Patient Demographic Report
        </Link>
    </div>
    
</div>
</>
  )
}

export default labReport