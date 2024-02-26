import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, AppBar, Toolbar, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Avatar,  Popover} from "@mui/material";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AccountCircle, AdminPanelSettings, AssignmentLate, ExpandMore, Handyman, Home, Logout, } from "@mui/icons-material";
import Header from '../pages/Header'

import Report from "../components/Report";
import OpdReport from "../report/OpdReport";
import IpdReport from "../report/IpdReport";
import BillingReport from "../report/BillingReport";
import RegistratiobnReport from "../report/RegistratiobnReport";
import LabReports from "../report/LabReports";
import MrReport from "../report/MrReport";
import OperationReport from "../report/OperationReport";
import AmcPharmacy from "../report/AmcPharmacy";
import BloodBank from "../report/BloodBank";
import CSSD from "../report/CSSD";
import Nutrition from "../report/Nutrition";
import OrReport from "../report/OrReport";
import Pharmacy from "../report/Pharmacy";
import Radiology from "../report/Radiology";
import Inventory from "../report/Inventory";


const selected = {
    display: 'block',
    flexGrow: 1,
    color: "white",
    backgroundColor: "#177bad",
    p: "5px",
    cursor: "pointer",
    width: "100%",
    borderRadius: "5px",
};
const unSelected = { color: "#177bad", p: "5px", cursor: "pointer" };
const Dashboard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const location = useLocation()
    const [comp, setComp] = useState(location.state);
    
    const navigate = useNavigate();
   
    const handleClick = () => {
        dispatch({ type: "LOGOUT" });
        vendors.dispatch({ type: "VENDOR_LOGOUT" })
        navigate("/");
    };
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const opeen = Boolean(anchorEl);
    return (
        <>
            
                <>
                    <Box >
                        {/* <Header /> */}
                        
                        <Box>
                            <AppBar position="static">
                                <Toolbar sx={{ backgroundColor: '#177bad' }}>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>                                          
                                            <Avatar src={'#'} sx={{ width: 56, height: 56 }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px' }}>
                                                
                                                <div style={{ fontSize: '14px' }}>{}</div>
                                                <div className='head'>
                                                    {'Manasi Kale'}
                                                </div>
                                                <div className='tagline'>
                                                    <Typography
                                                        aria-owns={opeen ? 'mouse-over-popover' : undefined}
                                                        aria-haspopup="true"
                                                        onMouseEnter={handlePopoverOpen}
                                                        onMouseLeave={handlePopoverClose}
                                                    >
                                                      
                                                    </Typography>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                  
                                    <Button color="inherit" onClick={handleClick} startIcon={<Logout />}>LOGOUT</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <Grid item xs={2}>
                                <Card sx={{ height: '1000px' }} elevation={12} >

                                    <CardContent sx={{ height: '700px' }}>
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMore />}>
                                                <b><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '20px', color: '#177bad' }}>&nbsp; HIS Report</div></b>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Box sx={comp === "amcpharmacy" ? selected : unSelected} onClick={() => setComp("amcpharmacy")}>
                                                    <b>   AMC Pharmacy </b>
                                                </Box>

                                                <Box sx={comp === "billing" ? selected : unSelected} onClick={() => setComp("billing")}>
                                                    <b> Billing  </b>
                                                </Box>

                                                <Box sx={comp === "bloodbank" ? selected : unSelected} onClick={() => setComp("bloodbank")}>
                                                    <b>   Blood Bank </b>
                                                </Box>

                                                <Box sx={comp === "cssd" ? selected : unSelected} onClick={() => setComp("cssd")}>
                                                    <b> CSSD </b>
                                                </Box>

                                                <Box sx={comp === "doctor" ? selected : unSelected} onClick={() => setComp("doctor")}>
                                                    <b> Doctor </b>
                                                </Box>

                                                <Box sx={comp === "ipdreports" ? selected : unSelected} onClick={() => setComp("ipdreports")}>
                                                    <b> IPD  </b>
                                                </Box>

                                                <Box sx={comp === "inventory" ? selected : unSelected} onClick={() => setComp("inventory")}>
                                                    <b> Inventory  </b>
                                                </Box>

                                                <Box sx={comp === "lab" ? selected : unSelected} onClick={() => setComp("lab")}>
                                                    <b> Lab  </b>
                                                </Box>

                                                <Box sx={comp === "mr" ? selected : unSelected} onClick={() => setComp("mr")}>
                                                    <b> MR  </b>
                                                </Box>

                                                <Box sx={comp === "nutrition" ? selected : unSelected} onClick={() => setComp("nutrition")}>
                                                    <b>  Nutrition  </b>
                                                </Box>

                                                <Box sx={comp === "opdreports" ? selected : unSelected} onClick={() => setComp("opdreports")}>
                                                    <b> OPD  </b>
                                                </Box>

                                                <Box sx={comp === "or" ? selected : unSelected} onClick={() => setComp("or")}>
                                                    <b> OR  </b>
                                                </Box>
                                                
                                                <Box sx={comp === "operation" ? selected : unSelected} onClick={() => setComp("operation")}>
                                                    <b> Operations  </b>
                                                </Box>

                                                <Box sx={comp === "pharmacy" ? selected : unSelected} onClick={() => setComp("pharmacy")}>
                                                    <b> Pharmacy  </b>
                                                </Box>

                                                <Box sx={comp === "radiology" ? selected : unSelected} onClick={() => setComp("radiology")}>
                                                    <b> Radiology  </b>
                                                </Box>

                                                <Box sx={comp === "registration" ? selected : unSelected} onClick={() => setComp("registration")}>
                                                    <b> Ragistration  </b>
                                                </Box>
                                                <br />
                                            </AccordionDetails>
                                        </Accordion>
                                        {/* <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMore />}>
                                                <b><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '20px', color: '#177bad' }}><Handyman sx={{ color: "#177bad" }} /> &nbsp;Manage</div></b>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Box sx={comp === "Vacancy" ? selected : unSelected} onClick={() => setComp("Vacancy")}>
                                                    <b> Bed Master </b>
                                                </Box>

                                                <Box sx={comp === "Designations" ? selected : unSelected} onClick={() => setComp("Designations")}>
                                                    <b> Ward Master </b>
                                                </Box>
                                                <Box sx={comp === "Manage_Profile" ? selected : unSelected} onClick={() => setComp("Manage_Profile")} >
                                                    <b>Patient Data Upload</b>
                                                </Box>
                                                <Box sx={comp === "AddVendor" ? selected : unSelected} onClick={() => setComp("AddVendor")}>
                                                    <b> Agency Master</b>
                                                </Box>
                                                <Box sx={comp === "AddRoster" ? selected : unSelected} onClick={() => setComp("AddRoster")}>
                                                    <b> Complain Master </b>
                                                </Box>
                                                <Box sx={comp === "specility" ? selected : unSelected} onClick={() => setComp("specility")}>
                                                    <b> Specility Master </b>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion> */}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10}>
                                <Box>
                                    <br />
                                    {
                                        {
                                            standardreports: <Report />,
                                            opdreports:<OpdReport/>,
                                            ipdreports:<IpdReport />,
                                            billing:<BillingReport />,
                                            registration:<RegistratiobnReport />,
                                            lab:<LabReports/>,
                                            mr:<MrReport/>,
                                            operation:<OperationReport/>,
                                            amcpharmacy:<AmcPharmacy/>,
                                            bloodbank:<BloodBank/>,
                                            cssd:<CSSD/>,
                                            nutrition:<Nutrition/>,
                                            or:<OrReport/>,
                                            pharmacy:<Pharmacy/>,
                                            radiology:<Radiology/>,
                                            inventory:<Inventory/>
                                           

                                        }[comp]
                                    }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            {/* )} */}
        </>
    );
};

export default Dashboard;
