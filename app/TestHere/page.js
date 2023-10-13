import * as React from 'react'
import { PaperStyled } from '../CustomComponents/layoutContainerStyles';
import Navbar from '../Components/Navbar/navbar';

const items = ['System', 'Brightness', 'Config', 'tools']; //Settings Menu
const mobilemenu = ['Products', 'About Us', 'For Businesses', 'Cart', 'Offers']; // Mobile menu

const TestPage = () => {

    return (
        <PaperStyled >
            <Navbar variant="b2bdark" settings={items} mobilemenulist={mobilemenu} />
        </PaperStyled>
    )
}
export default TestPage;


