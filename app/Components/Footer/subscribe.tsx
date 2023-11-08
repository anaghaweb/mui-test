'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export default function CustomizedInputsStyled() {
  const theme = useTheme();
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
              sx={{ width:"27ch",  mr:1}} 
        // id="filled-hidden-label-small"
        label="Email id"
        variant="filled"
        size='small'
      />  
      <Button type="submit" variant="outlined"
        sx={{
          textTransform: 'none', padding: '0.8em 1em',
          backgroundColor: theme.palette.mode === 'dark' ? "inherit" : theme.palette.primary.main,
          color: theme.palette.mode === 'dark' ? "#fff" : 'inherit'
        }}>
               Subscribe   
        </Button>
      
    </Box>
  );
}