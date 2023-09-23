'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Box  from '@mui/material/Box';
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { useTheme, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import Paper from '@mui/material/Paper';

const ColorModeContext = React.createContext({ handlechange: () => { } });

function Navbar() {

  const [mode, setMode] = React.useState(false);
   const colorMode = React.useMemo(
    ()=> ({
      handlechange: () => {
        setMode(prev => !prev )
      }
    }), [])

  const theme = React.useMemo(() =>
            createTheme({
                palette: {
                    mode: mode ? 'dark' : 'light',
                },
            }),
        [mode],)

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
    <AppBar position="sticky">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: "center", width: "300px", gap: "1rem" }}>
          <Box sx={{ position: 'relative', width: '100px', height: '100px' }}>
                   
            <Image src="https://res.cloudinary.com/dixkqgqsi/image/upload/v1695237732/wolfgang-hasselmann-cS8Hc3n3bdM-unsplash_ukbqm7.jpg" alt="placeholder" fill style={{ objectFit: 'contain' }}></Image></Box>
          <MenuIcon size='large'color='inherit' /> 
          
          </Box>
        <Box>
          
            <Switch defaultChecked={false} onChange={()=>colorMode.handlechange()} name='dark' color='default' />
           
              <Button variant="contained" color="primary"
                sx={{"&:hover": {bgcolor:green[600]}}}
              ><Link href="/" style={{color:'#ffffff'}}>Home</Link></Button>
                    
          </Box>
        </Toolbar>
        
          </AppBar>
          
        </ThemeProvider>
     </ColorModeContext.Provider>
      
  );
}

export default Navbar;
