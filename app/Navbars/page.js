import * as React from 'react'
import Paper from '@mui/material/Paper'
import Navbar from '../Components/Navbar/navbar';
const items = ['System', 'Brightness', 'Config', 'tools']; //Settings Menu
const mobilemenu = ['Products', 'About Us', 'For Businesses', 'Cart', 'Offers']; // Mobile menu
import HeaderComponent from '../Components/Headers';

const SecondPage = () => {


    return (
        <div >
            <HeaderComponent />
        </div>
    )
}
export default SecondPage;