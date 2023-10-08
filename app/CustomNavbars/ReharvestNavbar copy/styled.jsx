'use client'
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const TitleStyled = styled(Typography)(({ theme }) => ({
   
    mr: 0.5,
    display: 'flex',
    fontSize: '1rem',
    fontFamily: 'inherit',
    fontWeight: 500,
    color: 'inherit',
    textDecoration: 'none',
    
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
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

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
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
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