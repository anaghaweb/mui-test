'use client'

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'

export const TitleStyled = styled(Typography)(({ theme }) => ({
   
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 500,
    color: 'inherit',
    textDecoration: 'none',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.h6,  
        padding: '0',
    },
       
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
    display: 'flex' ,
    [theme.breakpoints.down('sm')]: {
        display:'none'
    },
    [theme.breakpoints.down('md')]: {
        height:'3rem'
    }
}))