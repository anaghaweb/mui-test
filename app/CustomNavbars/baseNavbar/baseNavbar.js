'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { IconButton, Typography, Stack, Box, Button } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useTheme } from '@mui/material/styles'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';



const BaseNavbar = ({ props }) => {

    const theme = useTheme();

    const [menu, setMenu] = React.useState(false);
    const open = {
        position: 'absolute', top: '100%', left: '0', width: '50%', height: '50vh', backgroundColor: '#ffffff', zIndex: '1', transition: 'left 0.5s ease',
    };
    const close = { display: 'none' };
    const closeIconClosed = {
        display: 'none',
    }
    const closeIconOpen = {
        display: 'block'
    }


    return (
        <>


            <AppBar position="relative" className="base">
                <Toolbar>
                    <Stack direction='row' spacing={2}>
                        <IconButton size='large' edge='end' color='inherit'
                            onClick={() => setMenu(!menu)}
                        >
                            <MenuIcon
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            />

                        </IconButton>
                    </Stack>

                    <Stack
                        spacing={1}
                        sx={menu ? open : close}>

                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => setMenu(!menu)}
                            sx={menu ? closeIconOpen : closeIconClosed}
                        >Close Menu</Button>

                        <IconButton size='large' edge='start' color='inherit' onClick={() => setMenu(!menu)} >

                            <BrightnessLowIcon />
                        </IconButton>
                        <IconButton size='large' edge='start' color='inherit' onClick={() => setMenu(!menu)} >
                            <LanguageOutlinedIcon />

                        </IconButton>
                        <IconButton size='large' edge='start' color='inherit' onClick={() => setMenu(!menu)} >
                            <PeopleIcon />
                        </IconButton>
                    </Stack>



                    <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} color="text.primary">
                        Base
                    </Typography>
                    <Stack direction='row' spacing={1}>
                        <IconButton size='large' edge='start' color='inherit' >
                            <BrightnessLowIcon />
                        </IconButton>
                        <IconButton size='large' edge='start' color='inherit' >
                            <LanguageOutlinedIcon />

                        </IconButton>
                        <IconButton size='large' edge='start' color='inherit' >
                            <PeopleIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default BaseNavbar;