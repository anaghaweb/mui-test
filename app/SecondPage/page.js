import * as React from 'react'
import Paper from '@mui/material/Paper'
import baseNavbarTheme from '../CustomNavbars/baseNavbar/baseNavbarTheme';
import theme from '../ThemeRegistry/theme';
import { StyledPaper } from '../Components/styledboxes';
import { Divider } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import BaseNavbar from '../CustomNavbars/baseNavbar/baseNavbar';
import SimpleBottomNavigation from '../Components/MuiCoreComponents/BasicAccordian/basicAccordion';


const SecondPage = () => {



    return <Paper sx={{ height: 'auto', padding: '4' }}>
        <StyledPaper>
            <ThemeProvider theme={baseNavbarTheme}>
                <BaseNavbar />
                <SimpleBottomNavigation />
            </ThemeProvider>
            <Divider />
        </StyledPaper>
        <StyledPaper>
            <ThemeProvider theme={theme}>
                <BaseNavbar />
                <SimpleBottomNavigation />
            </ThemeProvider>
            <Divider />
        </StyledPaper>

    </Paper>

}

export default SecondPage;