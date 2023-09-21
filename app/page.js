import React from 'react';
import Navbar from './Components/navbar';
import { StyledBox, StyledPaper } from './Components/styledboxes';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { lightTheme } from './ThemeRegistry/theme';
import ThemeProvider from '@mui/system/ThemeProvider';
import Divider from '@mui/material/Divider';
import Image from 'next/image';






export default function Home() {
  return (
    <><main >
      <ThemeProvider theme={lightTheme}>
        <Navbar />

        <StyledPaper elevation={2} varient="nextVarient" >
          <Box sx={{ position: 'relative', width: '20rem', height: '20rem' }}>

            <Image src="https://res.cloudinary.com/dixkqgqsi/image/upload/v1695237732/wolfgang-hasselmann-cS8Hc3n3bdM-unsplash_ukbqm7.jpg" alt="placeholder" fill style={{ objectFit: 'contain' }}></Image></Box>
          <Box>
            <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quibusdam amet hic suscipit dolorem ut nam, quaerat, facilis illo et fugiat quisquam eius quae ea dolor repudiandae cumque accusantium voluptatibus?
            </Typography>
          </Box>



        </StyledPaper>
        <Divider />
        <StyledPaper>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis cupiditate fugit vitae consequuntur voluptas atque assumenda delectus non eum dolorum, soluta, temporibus commodi distinctio quod cum iusto facere accusantium.
          </Typography>
        </StyledPaper>
        <Divider />
        <StyledPaper>
          <Box >
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem fuga officia minus ratione enim qui deserunt tempore praesentium! Vero nesciunt sequi sed eos consectetur quia est odio nihil placeat!</Typography>
          </Box>
        </StyledPaper>
        <Divider />
        <StyledPaper>
          <Box  >
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem fuga officia minus ratione enim qui deserunt tempore praesentium! Vero nesciunt sequi sed eos consectetur quia est odio nihil placeat!</Typography>
          </Box>
        </StyledPaper>
        <Divider />
      </ThemeProvider>
    </main >
    </>


  )
}
