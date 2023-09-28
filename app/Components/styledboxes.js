'use client'
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export const StyledBox = styled(Box)(({ theme }) => ({
    height: '300px',
    width: '100%',
    display: 'flex',
    color: 'black',
    padding: '2rem',
    fontSize: '1rem',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    margin: '5rem auto',
    padding: 2,
    gap: 5,
}));




