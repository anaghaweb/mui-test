import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { StyledPaper } from './Components/styledboxes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import baseNavbarTheme from './CustomNavbars/baseNavbar/baseNavbarTheme';
import EcoboNavbar from './CustomNavbars/EcoboNavBar/ecobonavbar';
import EcoboNavbarTheme from './CustomNavbars/EcoboNavBar/ecobonavbartheme';

import BasicTable from './Components/MuiCoreComponents/fillertables/fillertables';
import BasicAccordion from './Components/MuiCoreComponents/fillerAccordian/accordian';
import DiscreteSliderSteps from './Components/MuiCoreComponents/sliders/slider';
import GroupOrientation from './Components/MuiCoreComponents/buttonGroup/buttonGroup';
import OutlinedCard from './Components/MuiCoreComponents/outlinedCard/outlinedCard';

import ReharvestNavbar from './CustomNavbars/ReharvestNavbar/reharvestNavbar';
import ReharvestnavbarTheme from './CustomNavbars/ReharvestNavbar/reharvestnavbartheme';
import BaseNavbar from './CustomNavbars/baseNavbar/baseNavbar';
import StatFullTemplate from './CustomComponents/MuiStatTemplate';
import b2bTheme from './CustomNavbars/B2BBNavbar/b2bTheme';
import B2BNavbar from './CustomNavbars/B2BBNavbar/b2bNavbar';
import B2BDarkNavbar from './CustomNavbars/B2BBNavbar/b2bNavbarDark';
import ModernPinkTemplate from './CustomNavbars/ModernGradientnavbar/gradientNavbarPink';
import gradientTheme from './CustomNavbars/ModernGradientnavbar/gradientThemes';
import ModernBlueTemplate from './CustomNavbars/ModernGradientnavbar/gradientThemeBlue';
import ModernPurpleTemplate from './CustomNavbars/ModernGradientnavbar/gradientNavbarPurple';


export default function Home() {
  return (
    <><main >

      <Divider />
      <ThemeProvider theme={baseNavbarTheme} >
        <StyledPaper>
          <BaseNavbar />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>

        </StyledPaper>
      </ThemeProvider>
      <Divider />


      <ThemeProvider theme={EcoboNavbarTheme} >
        <StyledPaper>
          <EcoboNavbar />

          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>
        </StyledPaper>
      </ThemeProvider>
      <Divider />


      <ThemeProvider theme={ReharvestnavbarTheme} >
        <StyledPaper>
          <ReharvestNavbar />

          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>
        </StyledPaper>
      </ThemeProvider>
      <Divider />

      <ThemeProvider theme={b2bTheme} >
        <StyledPaper>
          <B2BNavbar />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>
        </StyledPaper>
      </ThemeProvider>
      <Divider />

      <ThemeProvider theme={b2bTheme} >
        <StyledPaper>
          <B2BDarkNavbar />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>
        </StyledPaper>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <StyledPaper>
          <ModernPinkTemplate />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>
        </StyledPaper>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <StyledPaper>
          <ModernBlueTemplate />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>
        </StyledPaper>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <StyledPaper>
          <ModernPurpleTemplate />
          < BasicTable />
          < BasicAccordion />
          <DiscreteSliderSteps />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-around', height: 'auto', margin: '1rem', padding: '2rem', width: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <StatFullTemplate value={5.1} unit="GHz" variant="outlined"></StatFullTemplate>
            <StatFullTemplate value={3.8} unit="GHz" ></StatFullTemplate>
            <OutlinedCard />
            <GroupOrientation />
          </Stack>
        </StyledPaper>
      </ThemeProvider>
    </main >
    </>
  )
}
