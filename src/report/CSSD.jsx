import React from 'react'
import { Link } from 'react-router-dom'

const CSSD = () => {
    return (
        <>
            
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'grid', width: '60%', gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src='src/assets/images/report_icon.jpg' className='img' alt={'OPD Report'} /><br /><br />Autoclave Cycle report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br />CSSD Stock Movement Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Condemn And Missing Item List
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Item Tray Stock Movement Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Tray Issue Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Tray Master Detail Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Tray Master Summary Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Tray Request report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Tray Return Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Tray Return Summary Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Tray Stock Inside Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Tray Stock Outside Report
                            </Link>
                        </div>
                        <div className='paper'>
                            <Link to={'#'} className='lnk'>
                                <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Tray Stock Report
                            </Link>
                        </div>

                    </div>
                </div>
            
        </>
    )
}

export default CSSD