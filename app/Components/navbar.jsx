'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { Box } from '@mui/material';
import { Content } from 'next/font/google';





function Navbar() {
  

  return (
    
    <AppBar >
      <Toolbar sx={{display: 'flex', justifyContent:'space-between'}}>
        <Box sx={{position:'relative', width:'100px', height:'100px'}}><Image src="https://res.cloudinary.com/dixkqgqsi/image/upload/v1695237732/wolfgang-hasselmann-cS8Hc3n3bdM-unsplash_ukbqm7.jpg" alt="placeholder" fill style={{ objectFit: 'contain' }}></Image></Box>
        <Box>
        <Typography component={Button} color={'white'} variant="h4">Home</Typography>
        <Button sx={{ color: "white" }}>Contacts</Button>
        <Button sx={{ color: "white" }}>Gallery</Button>
          <Button sx={{ color: "white" }}>Users</Button>
          </Box>
      </Toolbar>
   </AppBar>
  );
}

export default Navbar;
