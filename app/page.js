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
import LandingPage from './Components/InteramericaLandingPage';
import Flexnavbar from './CustomComponents/flexnavbar';

export default function Home() {
  return (
    <>
      <main
        style={{ padding: 0, margin: 'auto' }}
      >

        <LandingPage />
      </main>
    </>
  )
}
