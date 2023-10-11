import Divider from '@mui/material/Divider';
import { PaperStyled } from './CustomComponents/layoutContainerStyles';
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

      {/* <Divider />
      <ThemeProvider theme={baseNavbarTheme} >
        <PaperStyled>
          <BaseNavbar />


        </PaperStyled>
      </ThemeProvider>
      <Divider />


      <ThemeProvider theme={EcoboNavbarTheme} >
        <PaperStyled>
          <EcoboNavbar />


        </PaperStyled>
      </ThemeProvider>
      <Divider />


      <ThemeProvider theme={ReharvestnavbarTheme} >
        <PaperStyled>
          <ReharvestNavbar />


        </PaperStyled>
      </ThemeProvider>
      <Divider />

      <ThemeProvider theme={b2bTheme} >
        <PaperStyled>
          <B2BNavbar />

        </PaperStyled>
      </ThemeProvider>
      <Divider />

      <ThemeProvider theme={b2bTheme} >
        <PaperStyled>
          <B2BDarkNavbar />


        </PaperStyled>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <PaperStyled>
          <ModernPinkTemplate />


        </PaperStyled>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <PaperStyled>
          <ModernBlueTemplate />


        </PaperStyled>
      </ThemeProvider>

      <Divider />
      <ThemeProvider theme={gradientTheme} >
        <PaperStyled>
          <ModernPurpleTemplate />


        </PaperStyled>
      </ThemeProvider> */}


    </main >
    </>
  )
}
