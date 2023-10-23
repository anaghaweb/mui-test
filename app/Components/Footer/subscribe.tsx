'use client'
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CustomizedInputsStyled() {
  return (
    <Box component="form" 
          sx={{
              display: 'flex',
              flexDirection: { sm:'row' },
               alignItems: 'center', 
                justifyContent:'flex-start',
                '.MuiInputBase-input': {
               background: '#e3f2fd',
               borderRadius: '5px 5px 5px 5px',              
            },
    'label': {
        color:'#000'
    },
  '& .Mui-focused':{
     color: '#000'
    },
}}
      noValidate
      autoComplete="off">
         
          
        <TextField
              sx={{ width:"27ch", mr:1}} 
        // id="filled-hidden-label-small"
        label="Email id"
        variant="filled"
        size='small'
              />
             
          
        <Button type="submit" variant="outlined" sx={{ textTransform:'none', padding:'0.8em 1em'}}>
               Subscribe   
        </Button>
      
    </Box>
  );
}