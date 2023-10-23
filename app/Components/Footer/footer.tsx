import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FooterNavigation from './footer-navigation'
import FooterSocialLinks from './footer-social-links'
import Copyright from './copyright'
import CustomizedInputsStyled from './subscribe'




const Footer: FC = () => {
    const backdark = 'linear-gradient(to right,#0E1B30, #0E1B30, #19243A)' 
  
  return (
    
    <Box
      component="footer"
      sx={{ background: backdark , py: { xs: 6, md: 10 } }}
    >
      <Container>
        <Grid container spacing={1} columns={16}>
          <Grid item xs={16} md={8}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight:'600', color:'#fafafa' }}>
                Keep up to date
              </Typography>
              <Box sx={{mb:2}}>
                <CustomizedInputsStyled />
                </Box>
              <Typography variant="body1" sx={{ letterSpacing: 1, mb: 2 , color:"#B0B8C4"}}>
                Join our newsletter for regular updates. No spam ever.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
      
      <Copyright sx={{mt:2, color:'#B0B8C4'}} />
      </Box>
      
  )
}

export default Footer
