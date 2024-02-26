import { AppBar, Avatar, Box, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Logout } from "@mui/icons-material";

const Header = (props) => {
  return (
   <>
   
    <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static">
                                <Toolbar sx={{ backgroundColor: '#177bad' }}>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>

                                            {/* <Avatar src={axios.defaults.baseURL + user?.profile_photo} sx={{ width: 56, height: 56 }} /> */}
                                            <Avatar src={'#'} sx={{ width: 56, height: 56 }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px' }}>
                                                {/* <div style={{ fontSize: '14px' }}>{user?.company_name?.vendor_name}</div> */}
                                                <div style={{ fontSize: '14px' }}>{}</div>
                                                <div className='head'>
                                                    {'Manasi Kale'}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </Typography>
                                  
                                    <Button color="inherit"  startIcon={<Logout />}>LOGOUT</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
   </>
  )
}

export default Header