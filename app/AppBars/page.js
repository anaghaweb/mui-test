import * as React from 'react'
import Paper from '@mui/material/Paper'
import Navbar from '../Components/Navbar/navbar';
const items = ['System', 'Brightness', 'Config', 'tools']; //Settings Menu
const mobilemenu = ['Products', 'About Us', 'For Businesses', 'Cart', 'Offers']; // Mobile menu
import Flexnavbar from '../CustomComponents/flexnavbar'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Page = () => {


    return (
        <Container maxWidth="xl">
            <Stack rowGap="2rem" marginTop="2rem" marginBottom="2rem">
                < Navbar variant="basic" />
                < Navbar variant="b2blight" />
                < Navbar variant="b2bdark" />
                < Navbar variant="ecobo" />
                < Navbar variant="reharvest" />
                < Navbar variant="modernpink" />
                < Navbar variant="modernblue" />
                < Navbar variant="modernpurple" />
            </Stack>
        </Container>
    )
}
export default Page;