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
                        <Box sx={{ display: { xs: 'none', md: 'inline-block' }, width: '1rem', height: '100%', alignItem: 'center' }}>
                            <InsertPhotoSharpIcon sx={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Stack>

                    <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} color="text.primary">
                        Reharvest
                    </Typography>

                    <Stack direction='row' spacing={2} sx={{}}>
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