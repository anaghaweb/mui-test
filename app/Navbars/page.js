import * as React from 'react'
import Paper from '@mui/material/Paper'
import baseNavbarTheme from '../CustomNavbars/baseNavbar/baseNavbarTheme';
import theme from '../ThemeRegistry/theme';
import { StyledPaper } from '../Components/styledboxes';
import Divider from '@mui/material/Divider';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import SearchAppBar from '../Components/MuiCoreComponents/AppBarSearchField/searchAppBar';
import ResponsiveAppBar from '../Components/MuiCoreComponents/ResponsiveNavBar/responsiveNavBar';
import PrimarySearchAppBar from '../Components/MuiCoreComponents/FullAppbar/fullappbar';
import ReharvestnavbarTheme from '../CustomNavbars/ReharvestNavbar/reharvestnavbartheme';
import ReharvestNavbarTemplate from '../CustomNavbars/ReharvestNavbar/reharvestNavbar';


const SecondPage = () => {

    return <Paper >
        <StyledPaper>
        <ResponsiveAppBar />
        <Divider />
        <ReharvestNavbarTemplate />
        </StyledPaper>




    </Paper >

}

export default SecondPage;