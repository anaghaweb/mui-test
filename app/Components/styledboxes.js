'use client'
import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';
import { theme, lightTheme } from '../ThemeRegistry/theme';


export const StyledBox = styled(Box)((props) => ({
    height: '500px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    background: `${props.bg || '#CFE2F3'}`,
    color: 'black',
    padding: '2rem',
    fontSize: '1rem',


}));

export const StyledPaper = styled(Paper)(({ lightTheme }) => ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '20rem',
    margin: 'auto',
    padding: 2,



}));




