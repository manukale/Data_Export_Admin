import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, Grid, Toolbar, Typography } from '@mui/material'
import { Logout, ExpandMore } from '@mui/icons-material'
import React, { useState } from 'react'
import Report from '../components/Report';

const Dashboard = () => {
    const [comp, setComp] = useState();
    return (
        <>
            <Box>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar sx={{ backgroundColor: '#177bad' }}>
                        <Toolbar >
                            <Typography variant="h6" component={'div'} sx={{ flexGrow: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                                    {/* <Avatar sx={{ width: 56, height: 56 }} /> */}
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <div className='head' style={{ fontFamily: 'Arial Narrow' }}>
                                            Manasi Kale
                                            {/* {user.name} */}
                                        </div>

                                    </div>
                                </div>
                            </Typography>
                            <div>
                                <Button color="inherit" >
                                    LOGOUT &nbsp;
                                    <Logout />
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box>X
                <Grid item xs={2}>

                    <Card elevation={12}>
                        <CardContent sx={{ height: '700px' }}>
                            <Accordion >
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <b>Reports</b>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={comp === "report"} onclick={() => setComp("report")}>
                                        <b>Standard Report</b>
                                    </Box>
                                    <Box sx={comp === "leave_report"} onClick={() => setComp("leave_report")}>
                                        <b>Leave Report</b>
                                    </Box>
                                    <Box sx={comp === "access_rights"} onClick={() => setComp("access_rights")}>
                                        <b>Access Rights</b>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>
                    </Card>
                </Grid>
                </Box>
                <Box>
                    <Grid>
                        {
                            {
                                report: <Report />,
                            }[comp]
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Dashboard