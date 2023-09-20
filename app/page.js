import React from 'react';
import Navbar from './Components/navbar';
import { StyledBox } from './Components/styledboxes';
import { Box, Typography } from '@mui/material';
import theme from './ThemeRegistry/theme';
import { ThemeProvider } from '@mui/system';



export default function Home() {
  return (
    <>
      <Navbar position="sticky" />
      <main>
        <StyledBox bg="skyblue">
          <div><h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quibusdam amet hic suscipit dolorem ut nam, quaerat, facilis illo et fugiat quisquam eius quae ea dolor repudiandae cumque accusantium voluptatibus?</h1></div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis cupiditate fugit vitae consequuntur voluptas atque assumenda delectus non eum dolorum, soluta, temporibus commodi distinctio quod cum iusto facere accusantium.</p>
          </div>
        </StyledBox>
        <ThemeProvider theme={theme}>
          <Box sx={{ padding: '2rem', backgroundColor: 'background.paper', height: '350px', width: '100%' }}>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem fuga officia minus ratione enim qui deserunt tempore praesentium! Vero nesciunt sequi sed eos consectetur quia est odio nihil placeat!</Typography>
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Box sx={{ padding: '2rem', backgroundColor: 'background.dark', height: '350px', width: '100%', text: 'text.primary' }}>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem fuga officia minus ratione enim qui deserunt tempore praesentium! Vero nesciunt sequi sed eos consectetur quia est odio nihil placeat!</Typography>
          </Box>
        </ThemeProvider>
      </main>
    </>


  )
}
