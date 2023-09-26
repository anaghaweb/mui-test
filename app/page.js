import Divider from '@mui/material/Divider';
import { StyledPaper } from './Components/styledboxes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import baseNavbarTheme from './CustomNavbars/baseNavbar/baseNavbarTheme';
import BasicNavbar from './CustomComponents/MuiBasicNavbarTemplate';

export default function Home() {
  return (
    <><main >
      <Divider />
      <ThemeProvider theme={baseNavbarTheme} >
        <StyledPaper>
          <BasicNavbar title="Test NavBar" variant="blue" />
          <BasicNavbar title="Test NavBar" variant="ochre" />
          <BasicNavbar title="Test NavBar" variant="violet" />
        </StyledPaper>
      </ThemeProvider>
      <Divider />
    </main >
    </>
  )
}
