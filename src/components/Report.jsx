import { Box, Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../pages/Header';

const selected = {

    display: 'flex',
    // flexGrow: 4,
    color: "white",
    backgroundColor: "#177bad",
    p: "3px",
    cursor: "pointer",
    // alignItems: 'center',
    gap: 10,
    borderRadius: "100px",
    fontSize: '1.0rem',
    justifyContent: 'center',


};
const unSelected = { color: "#177bad", p: "5px", cursor: "pointer" };

const Report = () => {
    const [showData, setShowData] = useState(0);
    return (
        <>

            {/* <Grid container>
                <Grid item width={'100%'} > */}
                <div style={{display:'flex' ,gap:50}}>

                    <div  className='paper'>
                        <Link to={'/opdreport'} >
                            <img src={'https://act.campaign.gov.uk/wp-content/uploads/sites/25/2017/02/form_icon-1.jpg'} className='img' alt={'OPD Report'} /><br/><br/>OPD Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'/ipdreport'} >
                            <img src={'https://act.campaign.gov.uk/wp-content/uploads/sites/25/2017/02/form_icon-1.jpg'} className='img' alt={'IPD Report'} /><br/><br/>  IPD Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'/billingreport'} >
                            <img src={'https://act.campaign.gov.uk/wp-content/uploads/sites/25/2017/02/form_icon-1.jpg'} className='img' alt={'Billing Report'} /><br/><br/>  Billing Report
                        </Link>
                    </div>
                    <div className='paper'>
                        <Link to={'/registrationreport'} >
                            <img src={'https://act.campaign.gov.uk/wp-content/uploads/sites/25/2017/02/form_icon-1.jpg'} className='img' alt={'Registration Report'} /><br/><br/>Registration Report
                        </Link>
                    </div>
                </div>
                    {/* <Tabs
                    value={showData}
                    // onChange={chooseOption}
                    variant="fullWidth"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
                    
                    >
                    <Tab value="OPD" label="OPD"  onClick={() => setShowData(0)} sx={showData === 0 ? selected : unSelected} />
                    <Tab value="IPD" label="IPD" onClick={() => setShowData(1)} sx={showData === 1 ? selected : unSelected} />
                    <Tab value="Billing" label="Billing" onClick={() => setShowData(2)} sx={showData === 2 ? selected : unSelected} />
                    <Tab value="Registration" label="Registration" onClick={() => setShowData(3)} sx={showData === 3 ? selected : unSelected} />                    
                </Tabs> */}
                    <br></br>

                    {/* {showData === 0 && (
                    <Grid item>
                        <Department />
                        </Grid>
                        )}
                        
                        {showData === 1 && (
                            <Grid item >
                            <Designation />
                            </Grid>
                            )}
                            {showData === 2 && (
                                <Grid item>
                                <TrainingSubjects />
                                </Grid>
                                )}
                                {showData === 3 && (
                                    <Grid item>
                                    <AttendanceStatus />
                                    </Grid>
                                    )}
                                    {showData === 4 && (
                                        <Grid item>
                                        <Location />
                                        </Grid>
                                        )}
                                        {showData === 5 && (
                                            <Grid item>
                                            <Asset />
                                            </Grid>
                                            )}
                                            {showData === 6 && (
                                                <Grid item>
                                                <Agency />
                                                </Grid>
                                                )}
                                                {showData === 7 && (
                                                    <Grid item>
                                                    <Vendor />
                                                    </Grid>
                                                    )}
                                                    {showData === 8 && (
                                                        <Grid item>
                                                        <LeaveCreditDate />
                                                        </Grid>
                                                    )} */}
{/* 
                </Grid>
            </Grid> */}
        </>
    )
}

export default Report