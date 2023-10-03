'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Box  from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { darkTheme, lightTheme } from './themeToggler';

export const themeContext = React.createContext();

export default function Navbar() {

  const [mode, setMode] = React.useState(lightTheme);
  const [anchor, setAnchor] = React.useState(false);




  function handlechange (){
        setMode(prev => prev === lightTheme ? darkTheme : lightTheme )
  }
  

    return (
      
      <ThemeProvider theme={mode}>
        
    <AppBar position="sticky">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: "center", width: "300px", gap: "1rem" }}>
          <Box sx={{ position: 'relative', width: '100px', height: '100px' }}>
                   
            <Image src="https://res.cloudinary.com/dixkqgqsi/image/upload/v1695237732/wolfgang-hasselmann-cS8Hc3n3bdM-unsplash_ukbqm7.jpg" alt="placeholder" fill style={{ objectFit: 'contain' }}></Image></Box>
            <IconButton size='large' color='inherit' sx={{display:{xs: 'block', md:'none'}}} >
                <MenuIcon className="mobile-menu"  />                 
              </IconButton>
          </Box>
                  <Box>
                <Switch defaultChecked={false} onChange={() => handlechange()} name='dark' color='default' />

                <Button variant="outlined" color="primary"
                sx={{"&:hover": {bgcolor:green[600]}, display:{xs:'none', md:'inline-block'}}}
              ><Link href="/" style={{color:'#ffffff'}}>Home</Link></Button>                    
           
            <Button variant="outlined" color="primary"
                sx={{"&:hover": {bgcolor:green[600]}, display:{xs:'none', md:'inline-block'}}}
              ><Link href="/SecondPage" style={{color:'#ffffff'}}>Custom Components</Link></Button>
            </Box>
                                     
          
        </Toolbar>
        </AppBar>
            
        
        </ThemeProvider>
    
      
  );

 
}

