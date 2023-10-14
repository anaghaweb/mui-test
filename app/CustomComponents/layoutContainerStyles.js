'use client'
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export const BoxesStyled = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    color: 'black',
    padding: '2rem',
    fontSize: '1rem',
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    marginTop: '2rem',
    padding: 2,
    gap: 10,
    backgroundColor: "#ffffff"
}));




