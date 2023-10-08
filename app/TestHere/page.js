import * as React from 'react'
import Paper from '@mui/material/Paper'
import { StyledPaper } from '../Components/styledboxes';
import Divider from '@mui/material/Divider';
import ResponsiveModernPink from '../Components/MuiCoreComponents/ResponsiveNavBar/MuiModernPink';
import ResponsiveModernBlue from '../Components/MuiCoreComponents/ResponsiveNavBar/MuiModernBlue';
import ResponsiveModernPurple from '../Components/MuiCoreComponents/ResponsiveNavBar/MuiModernPurple';
import ResponsiveB2BLight from '../Components/MuiCoreComponents/ResponsiveNavBar/MuiB2BlightBlue';
import ResponsiveB2BDark from '../Components/MuiCoreComponents/ResponsiveNavBar/MuiB2BDarkBlue';
import ResponsiveBase from '../Components/MuiCoreComponents/ResponsiveNavBar/MuiBase';
import ResponsiveEcobo from '../Components/MuiCoreComponents/ResponsiveNavBar/MuiEcobo';
import ResponsiveReharvest from '../Components/Navbar/ReharvestNavbar/ReharvestNavbar';
import ResponsiveB2BNavbar from '../Components/Navbar/B2bNavbars/b2bnavbar';

const TesterPage = () => {

    return <Paper sx={{ height: 'auto' }}>
        <StyledPaper >

            <ResponsiveB2BNavbar variant="dark" />
            {/* <ResponsiveModernPink /> */}
            {/* <ResponsiveModernBlue /> */}
            {/* <ResponsiveModernPurple /> */}
            {/* < ResponsiveReharvest variant='modernPurple' /> */}
            {/* <ResponsiveB2BLight /> */}
            {/* <ResponsiveB2BDark /> */}
            {/* <ResponsiveBase /> */}
            {/* <ResponsiveEcobo /> */}
            <Divider />
        </StyledPaper>
    </Paper >
}
export default TesterPage;