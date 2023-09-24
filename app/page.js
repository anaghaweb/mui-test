import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { StyledBox, StyledPaper } from './Components/styledboxes';
import BaseNavbar from './CustomNavbars/baseNavbar/baseNavbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import baseNavbarTheme from './CustomNavbars/baseNavbar/baseNavbarTheme';
import BasicTable from './fillertables/fillertables';
import BasicAccordion from './fillerAccordian/accordian';
import BackgroundLetterAvatars from './Components/Avatars/avatars';
import SimpleBottomNavigation from './Components/BottomNavigation/bottomNavigation';
import DiscreteSliderSteps from './Components/sliders/slider';
import EcoboNavbarTheme from './CustomNavbars/EcoboNavBar/ecobonavbartheme';
import EcoboNavbar from './CustomNavbars/EcoboNavBar/ecobonavbar';
import ReharvestNavbar from './CustomNavbars/ReharvestNavbar/reharvestNavbar';
import ReharvestnavbarTheme from './CustomNavbars/ReharvestNavbar/reharvestnavbarthehe';

export default function Home() {
  return (
    <><main >
      <Divider />
      <ThemeProvider theme={baseNavbarTheme} >
        <StyledPaper>
          <BaseNavbar color="secondary" />
          <BackgroundLetterAvatars />
          <BasicTable />
          <BasicAccordion />
          <StyledBox>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis cupiditate fugit vitae consequuntur voluptas atque assumenda delectus non eum dolorum, soluta, temporibus commodi distinctio quod cum iusto facere accusantium.
            </Typography >
            <DiscreteSliderSteps />
          </StyledBox>
          <SimpleBottomNavigation sx={{ width: { xs: '100%' } }} />
        </StyledPaper>
      </ThemeProvider>
      <Divider />

      <ThemeProvider theme={EcoboNavbarTheme}>
        <StyledPaper>
          <EcoboNavbar color="secondary" />
          <BackgroundLetterAvatars />
          <BasicTable />
          <BasicAccordion />
          <StyledBox>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis cupiditate fugit vitae consequuntur voluptas atque assumenda delectus non eum dolorum, soluta, temporibus commodi distinctio quod cum iusto facere accusantium.
            </Typography >
            <DiscreteSliderSteps />
          </StyledBox>
          <SimpleBottomNavigation />
        </StyledPaper>
      </ThemeProvider>
      <Divider />
      {/* <ThemeProvider theme={ReharvestnavbarTheme}>
        <StyledPaper>
          <ReharvestNavbar color="secondary" />
          <BackgroundLetterAvatars />
          <BasicTable />
          <BasicAccordion />
          <StyledBox>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis cupiditate fugit vitae consequuntur voluptas atque assumenda delectus non eum dolorum, soluta, temporibus commodi distinctio quod cum iusto facere accusantium.
            </Typography >
            <DiscreteSliderSteps />
          </StyledBox>
          <SimpleBottomNavigation />
        </StyledPaper>
      </ThemeProvider>
      <Divider /> */}
    </main >
    </>
  )
}
