import React from 'react'
import { Link } from 'react-router-dom'

const Nutrition = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'grid', width: '60%',  gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

                <div className='paper'>
                <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Diet Plan Report
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nutrition