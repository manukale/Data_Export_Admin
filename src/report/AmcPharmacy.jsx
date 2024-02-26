import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AmcPharmacy = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid', width: '60%',  gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px' ,marginLeft:'30px'}}>

                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'GRN Summary Report New'} /><br /><br />GRN Summary Report New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Goods Receive Statistic Report New'} /><br /><br /> Goods Receive Statistic Report New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Pharmacy order details Report'} /><br /><br />  Pharmacy order details Report
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Purchase Order Detail Report New'} /><br /><br /> Purchase Order Detail Report New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Purchase Order Detail Report New'} /><br /><br /> Stock Consumption_New Report
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Stock Dispose Report New'} /><br /><br /> Stock Dispose Report New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Stock Issue Statistic_New Report'} /><br /><br />Stock Issue Statistic_New Report
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Stock Ledger New'} /><br /><br /> Stock Ledger New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Stock Movement Report New'} /><br /><br />Stock Movement Report New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Stock Request Statistic Report New'} /><br /><br /> Stock Request Statistic Report New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Stock Transfer Statistic_New Report'} /><br /><br /> Stock Transfer Statistic_New Report
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Supplier Wise Vendor Return Report'} /><br /><br />Supplier Wise Vendor Return Report
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br />Supplier wise GRN New
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br />Supplier wise PO Report
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br /> Total Stock Count
                        </Link>
                    </div>
                    <div className='paper'>
                         <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br /> Vendor Return Stats Report
                        </Link>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default AmcPharmacy