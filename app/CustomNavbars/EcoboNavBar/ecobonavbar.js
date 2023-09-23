import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { IconButton, Typography, Stack } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';


const EcoboNavbar = ({ props }) => {
    return (
        <>
            {/* <ThemeProvider theme={EcoboNavbarTheme}> */}

            <AppBar position="relative" className="base">
                <Toolbar>
                    <Stack direction='row' spacing={1}>
                        <IconButton size='large' edge='end' color='inherit'>
                            <MenuIcon />
                        </IconButton>
                    </Stack>

                    <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} color="text.primary">
                        Ecobo
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
            {/* </ThemeProvider > */}
        </>
    )
}

export default EcoboNavbar;