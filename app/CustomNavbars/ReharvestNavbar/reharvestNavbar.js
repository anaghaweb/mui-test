import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { IconButton, Typography, Stack, Box } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import BasicTextFields from '@/app/Components/BasicInputField/basicInputField';
const ReharvestNavbar = ({ props }) => {
    return (
        <>
            {/* <ThemeProvider theme={ReharvestNavbarTheme}> */}

            <AppBar position="relative" className="base">
                <Toolbar>
                    <Stack direction='row' spacing={2}>
                        <IconButton size='large' edge='end' color='inherit'>
                            <MenuIcon />

                        </IconButton>
                        <IconButton edge='end' color='inherit' sx={{ width: '5rem', height: '5rem' }}>
                            <InsertPhotoSharpIcon sx={{ width: 'auto', height: 'auto' }} /></IconButton>
                    </Stack>

                    <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} color="text.primary">
                        Reharvest
                    </Typography>
                    <Box><BasicTextFields /></Box>
                    <Stack direction='row' spacing={2}>
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

export default ReharvestNavbar;