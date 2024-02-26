import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../pages/Header'

const BillingReport = () => {
    return (
        <>
            {/* <Header/> */}

            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid', width: '60%', gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto', gap: '60px' ,marginLeft:'30px'}}>

                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Account Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk' underline='none'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Advance Collection Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> All User Collection Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br /> Cancelled Bill Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />  Collection Details
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'/collectionreport'} className='lnk' >
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Collection Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Collection Report New
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />  Credit Note Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />   Daily collection Detail
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />   Daily collection Summary
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />    Deposit Adjust Report
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'/depositereceivedreport'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Deposit Received Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Discount Given Report IP
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Discount Given Report OP
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Due Bill IP Report
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'/itemwiseservicereport'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Item Wise Service Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Monthly Radiology Revenue Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Out Standing Bills
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Package Revenue Detail Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Package Revenue Detail Report By Group
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Payor Collection Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Refund Report IP
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Refund Report OP
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />Revenue Detail Report
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'/iprevenuereport'} className='lnk' >
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'OPD Report'} /><br /><br />Revenue IP Report
                    </Link>
                </div>
                <div className='paper'>
                    <Link to={'/oprevenuereport'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'IPD Report'} /><br /><br />  Revenue OP Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Revenue Report IP Breakup
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />  Statement of Account_Payor
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Unbilled Detail Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />  Unbilled Revenue Report IP Breakup
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Unbilled Summary Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Unconsumed Deposit Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> Unconsumed Deposit Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> User Wise Card Collection Report
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> User Wise Collection Report IP
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br /> User Wise Collection Report OP
                    </Link>
                </div>
                <div className='paper'>
                     <Link to={'#'} className='lnk'>
                        <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Registration Report'} /><br /><br />  Write Off Report
                    </Link>
                </div>
                {/* <div className='paper'>
                        <Link to={'/revenuedetailreport'} >
                            <img src={'src/assets/images/report_icon.jpg'} className='img' alt={'Billing Report'} /><br/><br/> Revenue Detail Report
                        </Link>
                    </div> */}
            </div>
            </div>
        </>
    )
}

export default BillingReport