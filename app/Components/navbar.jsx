'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box  from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { darkTheme, lightTheme } from './themeToggler';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const themeContext = React.createContext();


// HAMBURGER ICON STYLING
const NavMenuIcon = styled(MenuIcon)(({ theme }) =>
({
    position: 'absolute',
    color: '#000000',
    left: '1rem',
    height: '1.5rem',
    width: '1.5rem',

    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
    [theme.breakpoints.down('lg')]: {
        display: 'inline-block',
    },
    '&:hover': {
        cursor: 'pointer',
    },

}))

// MOBILE MENU
const StyledMobileMenu = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    padding: '2rem 0.5rem 0.5rem 1rem',
    color: 'inherit',

    '&.mob-title-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}))

//MOBILE MENU WRAPPER
const StyledBox = styled(Box)
    (({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        color: '#3399FF',
        textTransform: 'capitalize',
        ...theme.typography.subtitle1,
    }));

//MOBILE MENU OPEN / CLOSE STYLING
const open = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '100%',
    left: '0.15rem',
    width: '50vw',
    height: 'auto',
    backgroundColor: 'inherit',
    zIndex: '99',
    transition: 'left 0.5s ease',
};
const close = {
    display: 'none',
    position: 'absolute',
    top: '144px',
    left: '-100%'
};


export default function Navbar() {

  const [mode, setMode] = React.useState(lightTheme);
   const [menu, showMenu] = React.useState(false);

  function handlechange (){
        setMode(prev => prev === lightTheme ? darkTheme : lightTheme )
  }
  
    return (
    
      <ThemeProvider theme={mode}>
        
      <AppBar position="sticky">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        
        <NavMenuIcon onClick={() => showMenu(!menu)} className="base-mobile-menu" />
            <StyledMobileMenu sx={menu ? open : close} className="base-menu-list">
                <StyledBox >
                    <Typography variant="h5" component="div">
                        Mui Test
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Button variant="outlined" onClick={() => showMenu(!menu)}>Close</Button>
                </StyledBox>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                    <a href="/Navbars">Navbars</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Services</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Profile</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">About Us</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">For Businesses</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                    <a href="#">Logout</a></Box>
            </StyledMobileMenu>
                  <Box>
                <Switch defaultChecked={false} onChange={() => handlechange()} name='dark' color='default' />

                <Button variant="outlined" color="primary"
                sx={{"&:hover": {bgcolor:green[600]}, display:{xs:'none', md:'inline-block'}}}
              ><Link href="/" style={{color:'#ffffff'}}>Home</Link></Button>                    
           
            <Button variant="outlined" color="primary"
                sx={{"&:hover": {bgcolor:green[600]}, display:{xs:'none', md:'inline-block'}}}
              ><Link href="/Navbars" style={{color:'#ffffff'}}>Navbars</Link></Button>
            </Box>
                                     
          
        </Toolbar>
        </AppBar>
            
        
        </ThemeProvider>
    
      
  );

 
}

