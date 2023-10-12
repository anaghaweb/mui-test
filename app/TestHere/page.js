import * as React from 'react'
import Paper from '@mui/material/Paper'
import { PaperStyled } from '../CustomComponents/layoutContainerStyles';
import Divider from '@mui/material/Divider';
import ModernPinkNavbar from '../Components/Navbar/ModernPink';
import ModernBlueNavbar from '../Components/Navbar/ModernBlue';
import ModernPurpleNavbar from '../Components/Navbar/ModernPurple';
import B2BDarkNavbar from '../Components/Navbar/B2bNavbarDarkBlue'
import B2BLightNavbar from '../Components/Navbar/B2bNavbarLightBlue';
import BaseNavbar from '../Components/Navbar/BaseNavbar';
import EcoboNavbar from '../Components/Navbar/EcoboNavbar';
import ReharvestNavbar from '../Components/Navbar/ReharvestNavbar';

const TestPage = () => {

    return <Paper sx={{ height: '100vh' }}>
        <PaperStyled >
            <ReharvestNavbar />
            <ModernPinkNavbar />
            <ModernBlueNavbar />
            <ModernPurpleNavbar />
            {/* <B2BDarkNavbar />
            <BaseNavbar />
            <EcoboNavbar />
            <B2BLightNavbar /> */}
        </PaperStyled>

        {/* <Divider />
        <BasicNavbar />
        <EcoboNavbar />
        <Divider />
        <ResponsiveB2BDarkBlue />
        <Divider />
        < ResponsiveReharvest />
        <Divider />
        <ResponsiveB2BLightBlue />
        <Divider />
        <ModernBlue />
        <Divider />
        <ModernPink />
        <Divider />
        <ModernPurple /> */}

    </Paper >
}
export default TestPage;


