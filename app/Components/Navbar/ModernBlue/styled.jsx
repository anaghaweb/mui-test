'use client'
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'

export const TitleStyled = styled(Typography)(({ theme }) => ({
   
    mr: 0.5,
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 500,
    color: '#fafafa',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.h6,
        
    }
    
}));

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    color: '#000000',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0,1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
     height: '39px',
    '& .MuiInputBase-input': {
       
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50ch',

        },
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

export const CancelButtonWrapper = styled(Button)(({ theme }) => ({
    
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    height: '39px',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0.15rem',
    zIndex: '99',
}))

export const SearchButtonWrapper = styled(Button)(({ theme }) => ({
        
    display:'flex',
    flexGrow: 1,
    minWidth: 'fit-content',
    color: 'inherit',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('lg')]:{
        display: 'none' 
    },
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