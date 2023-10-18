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
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 4rem)',
    padding: '1rem',
    gap: '2rem',
    backgroundColor: "#ffffff",
    [theme.breakpoints.down('md')]: {
        height: 'auto',
    }

}));




