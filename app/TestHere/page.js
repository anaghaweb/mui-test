import * as React from 'react'
import { PaperStyled } from '../CustomComponents/layoutContainerStyles';
import MuiReview from '../Components/Review/MuiRating'
import HeaderComponent from '../Components/Headers';
import BaseNavbar from '../Components/Navbar/BaseNavbar'
import { Divider } from '@mui/material';
const items = ['System', 'Brightness', 'Config', 'tools']  //Settings Menu
const mobilemenu = ['Products', 'About Us', 'For Businesses', 'Cart', 'Offers']; // Mobile menu

const imageURL = '/mui-test/public/SampleImage2.jpg'

const TestPage = () => {
    return (< div >
        {/* <Navbar variant="b2bdark" settings={items} mobilemenulist={mobilemenu} /> */}
        {/* <MuiReview variant="red" /> */}
        <HeaderComponent
            variant="header1"
            title=" Be Free in a MultiApp Universe"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse ipsam dolores? Quaerat aliquid cumque recusandae sint consequuntur expedita unde.'
            caption="Caption Here Lorem ipsum"
        />
        <Divider />
        <HeaderComponent
            variant="header2"
            title=" Be Free in a MultiApp Universe"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse ipsam dolores? Quaerat aliquid cumque recusandae sint consequuntur expedita unde. '
            caption="Caption Here Lorem ipsum"
        />
        <Divider />
        <HeaderComponent
            variant="header3"
            title=" Be Free in a MultiApp Universe"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse ipsam dolores? Quaerat aliquid cumque recusandae sint consequuntur expedita unde. '
            caption="Caption Here Lorem ipsum"

        />
        <Divider />
    </div >
    )
}
export default TestPage;




