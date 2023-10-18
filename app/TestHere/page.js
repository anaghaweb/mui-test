import * as React from 'react'
import { PaperStyled } from '../CustomComponents/layoutContainerStyles';
import MuiReview from '../Components/Review/MuiRating'
import HeaderComponent from '../Components/Headers';
const items = ['System', 'Brightness', 'Config', 'tools']  //Settings Menu
const mobilemenu = ['Products', 'About Us', 'For Businesses', 'Cart', 'Offers']; // Mobile menu

const TestPage = () => {
    return (< div >
        {/* <Navbar variant="b2bdark" settings={items} mobilemenulist={mobilemenu} /> */}
        {/* <MuiReview variant="red" /> */}
        <HeaderComponent
            variant="header1"
            title=" Be Free in a MultiApp Universe"
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi esse ipsam dolores? Quaerat aliquid cumque recusandae sint consequuntur expedita unde. Itaque impedit voluptate explicabo iure deserunt repellat nesciunt odio veritatis.'
            caption="Caption Here"
        />
    </div >
    )
}
export default TestPage;


