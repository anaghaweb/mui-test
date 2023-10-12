import * as React from 'react'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider';
import ResponsiveReharvest from '../Components/Navbar/ReharvestNavbar';
import ModernBlue from '../Components/Navbar/ModernBlue';
import ModernPink from '../Components/Navbar/ModernPink';
import ModernPurple from '../Components/Navbar/ModernPurple';
import ResponsiveB2BDarkBlue from '../Components/Navbar/B2bNavbarDarkBlue';
import ResponsiveB2BLightBlue from '../Components/Navbar/B2bNavbarLightBlue';
import BasicNavbar from '../Components/Navbar/BaseNavbar';
import EcoboNavbar from '../Components/Navbar/EcoboNavbar';


const SecondPage = () => {


    return (
        <div >
            <ModernPurple />
            <ModernBlue />
            <ModernPink />
            <ResponsiveReharvest />
            <ResponsiveB2BDarkBlue />
            <ResponsiveB2BLightBlue />
            <EcoboNavbar />
            <BasicNavbar />
        </div>
    )
}
export default SecondPage;