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
import { darkTheme, lightTheme } from './CustomComponents/themeToggler';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';




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
    width:'100vw',
    gap: theme.spacing(0.5),
    padding: '2rem 0.5rem 0.5rem 1rem',
    color: '#ffffff',
    backgroundColor: 'inherit',
    
    '&:visited':{
        color: 'inherit'
    },

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
        color: 'inherit',
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
    width: {xs:'100vw', sm:'15rem'},
    height: 'auto',
    backgroundColor: '#3399ff',
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

  
   const [menu, showMenu] = React.useState(false);
    
 
  
    return (
        
            <AppBar           
                position="sticky"
            >
                <Toolbar
                    position="relative"
                    sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', backgroundColor: '#fafafa', color:'#717171' }}>
        
                    <NavMenuIcon
                        onClick={() => showMenu(!menu)}
                        className="base-mobile-menu"
                        sx={{
                            position: 'absolute',
                            top: '0', bottom: '0', left: '0.5rem', margin: 'auto',
                            color:'#000000'
                        }}

                    />
            <StyledMobileMenu sx={menu ? open : close} className="base-menu-list">
                    <StyledBox
                        sx={{color:'inherit'}}
                    >
                    <Link href="/"><Typography variant="h5" component="div">
                        Home
                    </Typography></Link>
                    <Divider orientation="vertical" flexItem />
                    <Button variant="filled" onClick={() => showMenu(!menu)}>Close</Button>
                </StyledBox>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}
                        sx={{color:'inherit'}}
                    >
                    <Link href="/Navbars">Navbars</Link></Box>
                        <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                            <Link href="/TestHere">Playground</Link></Box>
                        <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                            <Link href="#">Profile</Link></Box>
                        <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                            <Link href="#">About Us</Link></Box>
                        <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                            <Link href="#">For Businesses</Link></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                            <Link href="#">Logout</Link></Box>
                </StyledMobileMenu>
                <Box
                    sx={{display:'flex', justifyContent: 'center', flexGrow: 1, color:'inherit'}}
                ><Typography variant="h6" sx={{fontFamily:'monospace'}} >Testing Components</Typography></Box>
                 <Box sx={{textTransform:'capitalize'}}>
                
                <Button variant="outlined" color="primary"
                     sx={{"&:hover": {bgcolor:green[600]}, display:{xs:'none', md:'inline-block'}}}
                    ><Link href="/" style={{ color: '#717171' }}>
                            Home
                        </Link>
                </Button>                    
           
            <Button variant="outlined" color="primary"
                sx={{"&:hover": {bgcolor:green[600]}, display:{xs:'none', md:'inline-block'}}}
                    ><Link href="/Navbars" style={{ color: '#717171' }}>
                            Navbars
                        </Link>
                    </Button>
                    <Button variant="outlined" color="primary"
                sx={{"&:hover": {bgcolor:green[600]}, display:{xs:'none', md:'inline-block'}}}
                    ><Link href="/TestHere" style={{ color: '#717171' }}>
                            Playground
                        </Link>
            </Button>
                        
                    <Switch defaultChecked={false} name='dark' color='default' />
            </Box>
                                     
          
        </Toolbar>
        </AppBar>
           
        
        
    
      
  );

 
}

