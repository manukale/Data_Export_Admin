import React from 'react'
import { Link } from 'react-router-dom'

const Inventory = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid', width: '60%',  gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px', marginLeft: '30px' }}>

                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Cost Of sales
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> GRN Approved Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> GRN Label
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> GRN Summary Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Goods Receive Statistic Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />INSPECTION REPORT
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />  Inspection Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Item Master Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />  Near Expiry Item
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> PR Pending PO Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Purchase Order Detail Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Stock Adjust Statistic Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />  Stock Balance
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Stock Balance Todate
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Stock Consumption Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Stock Dispose Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Stock Issue New Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Stock Issue Statistic Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Stock Ledger Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Stock Ledger Report_All Store
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Stock Movement Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Stock Nonmovement Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Stock Request Statistic Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Stock Transfer Statistic Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'#'} className='lnk'>
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Supplier wise GRN
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Inventory