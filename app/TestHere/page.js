import * as React from 'react'
import { PaperStyled } from '../CustomComponents/layoutContainerStyles';
import MuiReview from '../Components/Review/MuiRating'
import HeaderComponent from '../Components/Headers';
import BaseNavbar from '../Components/Navbar/BaseNavbar'
import { Divider } from '@mui/material';
import Flexnavbar from '../CustomComponents/flexnavbar';


const items = ['System', 'Brightness', 'Config', 'tools']  //Settings Menu
const mobilemenu = ['Products', 'About Us', 'For Businesses', 'Cart', 'Offers']; // Mobile menu

const imageURL = '/mui-test/public/SampleImage2.jpg'

const TestPage = () => {
    return (< React.Fragment >
        {/* <Navbar variant="b2bdark" settings={items} mobilemenulist={mobilemenu} /> */}
        {/* <MuiReview variant="red" /> */}
        <Flexnavbar btncolor='#FF7043' />
        <HeaderComponent
            variant="header1"
            title=" Be Free in a MultiApp Universe"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse ipsam dolores? Quaerat aliquid cumque recusandae sint consequuntur expedita unde.'
            caption="Caption Here Lorem ipsum"
        />

        <Flexnavbar btncolor='#1976D2' />
        <HeaderComponent
            variant="header2"
            title=" Be Free in a MultiApp Universe"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse ipsam dolores? Quaerat aliquid cumque recusandae sint consequuntur expedita unde. '
            caption="Caption Here Lorem ipsum"
        />

        <Flexnavbar btncolor="#00AD6F" />
        <HeaderComponent
            variant="header3"
            title=" Be Free in a MultiApp Universe"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse ipsam dolores? Quaerat aliquid cumque recusandae sint consequuntur expedita unde. '
            caption="Caption Here Lorem ipsum"

        />

    </React.Fragment >
    )
}
export default TestPage;




