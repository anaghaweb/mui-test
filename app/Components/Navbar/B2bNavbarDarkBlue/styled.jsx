'use client'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import AtlassianSVGLight from './LargeScreenMenu/AtlassianSVG/atlassianSVGLight';
import AtlassianDark from './LargeScreenMenu/AtlassianSVG/atlassianSVGdark';

export const TitleStyled = styled(Typography)(({ theme }) => ({
    mr: 0.5,
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 500,
    color: 'inherit',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.h6,      
    }
    
}));

export const LogoTitleWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexGrow: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'inherit',
    backgroundColor: 'inherit'
}))

export const LogoWrapper = styled(IconButton)(({ theme }) => ({
    height: '5rem',
    width: '5rem',
    display: 'flex',
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
    (({ theme, variantcolor }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '6rem',
        height: '2rem',
        minWidth: 'fit-content',
        textTransform: 'capitalize',
        backgroundColor: '#ffffff',
        borderRadius: '0.2rem',
        border: 'none',
        gap: theme.spacing(0.5),
        color: '#2A7FD4',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#ffffff',
        },
        '&.stl-btn': {
            [theme.breakpoints.down('md')]:
            {
                color: variantcolor === 'light' ?'#2A7FD4' : '#fafafa',
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
    (({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.typography.h5,
        gap: theme.spacing(1),
        color: 'inherit',
        '&:visited': {
            color: 'inherit',
        },
    }));

   export const AtlassianLightWrapper = styled(AtlassianSVGLight)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.2rem',
    height: '2.2rem',
   }))
   export const AtlassianDarkWrapper = styled(AtlassianDark)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.2rem',
    height: '2.2rem',
}))

export const ButtonWrapper = styled(Box)(({ theme }) => ({
      display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    gap:'0.4rem',
    [theme.breakpoints.up('sm')]: {
        gap:'1rem', 
    },   
}))
