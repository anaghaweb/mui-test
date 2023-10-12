'use client'
import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from "@mui/material/Link";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button'

export const StyledAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
    height:'3rem',
    [theme.breakpoints.up('md')]: {
        height:'5rem'
    },    
     '*:visited':{
    color: 'inherit',
    }, 
     
}));

export const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
    backgroundColor: '#DAE8FC',
    color: '#3399FF',
    position: "relative",
    height: 'inherit',
    padding: theme.spacing(1),    
    '*':{
    textDecoration: 'none',
    boxSizing: 'border-box', 
    },
}));

export const StyledTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
    fontFamily: "inherit",
    fontWeight: 500,
    color: "inherit",
    textDecoration: "none",
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        ...theme.typography.h6,
        padding: "0",
    },
}))as typeof Link;

export const LogoTitleWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexGrow: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'inherit',
    backgroundColor: 'inherit'
}))

export const LogoWrapper = styled(IconButton)(({ theme }: { theme: Theme }) => ({  
    height: '100%',
    width: '5rem',
    display: 'flex',
    color:'inherit',
      [theme.breakpoints.down('md')]: {
        height: '3rem',
        width: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
        display:'none'
    }
}))

// BUTTONS CART, LOGIN STYLING
export const StyledButton = styled('button')
    (({ theme }: { theme: Theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '6rem',
        height: '2rem',
        minWidth: 'fit-content',
        textTransform: 'capitalize',
        backgroundColor: '#ffffff',
        color: '#3399FF',
        borderRadius: '0.2rem',
        border: 'none',
        gap: theme.spacing(0.5),
        
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f1f1f1',
        },
        '&.stl-btn':{
            [theme.breakpoints.down('md')]:
            {
                color:'#3399FF',
                backgroundColor: 'transparent',
                width: 'fit-content',
            },
        },
        '.cart-btn': {
            ...theme.typography.body1,
            [theme.breakpoints.up('md')]: {
                ...theme.typography.subtitle1,
            },
            [theme.breakpoints.down('sm')]:
            {
                display: 'none',
            }
        },       
    }));

   export const StyledLinks = styled(Link)
    (({ theme }: { theme: Theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.typography.h5,
        gap: theme.spacing(1),
        color:'inherit',
    }));

export const ButtonWrapper = styled(Box)(({ theme }:{theme:Theme}) => ({
    display: 'flex',
    flexGrow: 2,
    justifyContent: 'flex-end',
    gap:'0.4rem',
    [theme.breakpoints.up('sm')]: {
        gap:'1rem', 
    },   
}))

export const StyledMenu = styled(Box)(({ theme }: { theme: Theme }) => ({
      display: 'flex',
    flexGrow: 3,
     justifyContent: 'flex-end',
    color: 'inherit',
    gap: '0.4rem',
    [theme.breakpoints.down('lg')]: {
        display:'none'
    }
}))

export const LargeMenuButtonWrapper = styled(Button)(({ theme }: { theme: Theme }) => ({      
color: 'inherit',
justifyContent: 'center',
alignItems: 'center',
width: '6.5rem',
gap: '0.5rem',
minWidth: 'fit-content',
textTransform: 'capitalize',
}))




