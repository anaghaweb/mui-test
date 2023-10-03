import * as React from 'react'
import Paper from '@mui/material/Paper'
import baseNavbarTheme from '../CustomNavbars/baseNavbar/baseNavbarTheme';
import theme from '../ThemeRegistry/theme';
import { StyledPaper } from '../Components/styledboxes';
import { Divider } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import B2BTemplate from '../CustomNavbars/B2BBNavbar/b2bNavbar';
import SimpleBottomNavigation from '../Components/MuiCoreComponents/BasicAccordian/basicAccordion';
import SearchAppBar from '../Components/MuiCoreComponents/AppBarSearchField/searchAppBar';
import ResponsiveAppBar from '../Components/MuiCoreComponents/ResponsiveNavBar/responsiveNavBar';
import PrimarySearchAppBar from '../Components/MuiCoreComponents/FullAppbar/fullappbar';
import BaseNavbarTemplate from '../CustomNavbars/baseNavbar/baseNavbar';

const SecondPage = () => {



    return <Paper sx={{ height: 'auto', padding: '4' }}>
        <StyledPaper>
            <ThemeProvider theme={baseNavbarTheme}>
                < BaseNavbarTemplate />
            </ThemeProvider>

        </StyledPaper>


    </Paper>

}

export default SecondPage;