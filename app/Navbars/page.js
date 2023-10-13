import * as React from 'react'
import Paper from '@mui/material/Paper'
import Navbar from '../Components/Navbar/navbar';
const items = ['System', 'Brightness', 'Config', 'tools']; //Settings Menu
const mobilemenu = ['Products', 'About Us', 'For Businesses', 'Cart', 'Offers']; // Mobile menu


const SecondPage = () => {


    return (
        <div >
            <Navbar variant="b2bdark" settings={items} mobilemenulist={mobilemenu} />
        </div>
    )
}
export default SecondPage;