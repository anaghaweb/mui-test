'use client'
import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)((props) => ({
    height: '350px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: `${props.bg || '#CFE2F3'}`,
    color: 'black',
    padding: '2rem',
    fontSize: '1rem',


}));





