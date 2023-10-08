import Divider from '@mui/material/Divider';
import { StyledPaper } from './Components/styledboxes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import baseNavbarTheme from './CustomNavbars/baseNavbar/baseNavbarTheme';
import EcoboNavbar from './CustomNavbars/EcoboNavBar/ecobonavbar';
import EcoboNavbarTheme from './CustomNavbars/EcoboNavBar/ecobonavbartheme';
import ReharvestNavbar from './CustomNavbars/ReharvestNavbar/reharvestNavbar';
import ReharvestnavbarTheme from './CustomNavbars/ReharvestNavbar/reharvestnavbartheme';
import BaseNavbar from './CustomNavbars/baseNavbar/baseNavbar';
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


        </StyledPaper>
      </ThemeProvider>
      <Divider />


      <ThemeProvider theme={EcoboNavbarTheme} >
        <StyledPaper>
          <EcoboNavbar />


        </StyledPaper>
      </ThemeProvider>
      <Divider />


      <ThemeProvider theme={ReharvestnavbarTheme} >
        <StyledPaper>
          <ReharvestNavbar />


        </StyledPaper>
      </ThemeProvider>
      <Divider />

      <ThemeProvider theme={b2bTheme} >
        <StyledPaper>
          <B2BNavbar />

        </StyledPaper>
      </ThemeProvider>
      <Divider />

      <ThemeProvider theme={b2bTheme} >
        <StyledPaper>
          <B2BDarkNavbar />


        </StyledPaper>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <StyledPaper>
          <ModernPinkTemplate />


        </StyledPaper>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <StyledPaper>
          <ModernBlueTemplate />


        </StyledPaper>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <StyledPaper>
          <ModernPurpleTemplate />


        </StyledPaper>
      </ThemeProvider>


    </main >
    </>
  )
}
