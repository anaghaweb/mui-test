import Divider from '@mui/material/Divider';
import { StyledPaper } from './Components/styledboxes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import baseNavbarTheme from './CustomNavbars/baseNavbar/baseNavbarTheme';
import BasicNavbar from './CustomComponents/MuiBasicNavbarTemplate';
import EcoboNavbar from './CustomNavbars/EcoboNavBar/ecobonavbar';
import EcoboNavbarTheme from './CustomNavbars/EcoboNavBar/ecobonavbartheme';
import BackgroundLetterAvatars from './Components/Avatars/avatars';
import BasicTable from './fillertables/fillertables';
import BasicAccordion from './fillerAccordian/accordian';
import StatFullTemplate from './CustomComponents/MuiStatTemplate';
import SimpleBottomNavigation from './Components/BottomNavigation/bottomNavigation';
import DiscreteSliderSteps from './Components/sliders/slider';
import ReharvestNavbar from './CustomNavbars/ReharvestNavbar/reharvestNavbar';
import ReharvestnavbarTheme from './CustomNavbars/ReharvestNavbar/reharvestnavbarthehe';
import BaseNavbar from './CustomNavbars/baseNavbar/baseNavbar';
import { GraphicEqRounded } from '@mui/icons-material';

export default function Home() {
  return (
    <><main >
      <Divider />
      <ThemeProvider theme={baseNavbarTheme} >
        <StyledPaper>
          <GraphicEqRounded />
          <BaseNavbar />
          <BasicNavbar title="blue NavBar" variant="blue" />
          <BasicNavbar title="Ochre NavBar" variant="ochre" />
          <BasicNavbar title="Violet NavBar" variant="violet" />
          <BasicNavbar title="Blank NavBar" />

          <BackgroundLetterAvatars />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <StatFullTemplate />
          <SimpleBottomNavigation />
        </StyledPaper>
      </ThemeProvider>
      <Divider />
      <ThemeProvider theme={EcoboNavbarTheme} >
        <StyledPaper>
          <EcoboNavbar />
          <BackgroundLetterAvatars />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <StatFullTemplate />
          <SimpleBottomNavigation />
        </StyledPaper>
      </ThemeProvider>
      <Divider />
      <ThemeProvider theme={ReharvestnavbarTheme} >
        <StyledPaper>
          <ReharvestNavbar />
          <BackgroundLetterAvatars />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <StatFullTemplate />
          <SimpleBottomNavigation />
        </StyledPaper>
      </ThemeProvider>
      <Divider />
    </main >
    </>
  )
}
