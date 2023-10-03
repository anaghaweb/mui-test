'use client'
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { IconButton, Typography, Stack, Box, Button, Divider, Container } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Link from '@mui/material/Link';
import LightModeIcon from '@mui/icons-material/LightMode';


//NAVROOT
const NavRoot = styled('div')
    (({ theme }) => ({
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        backgroundColor: '#FFF2CC',
        color: '#6A9153',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
            padding: theme.spacing(1),
            height: '3rem'
        },
    }));


//NAVBAR TITLE 
const NavTitle = styled('div')
    (({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        ...theme.typography.h3,
        verticalAlign: 'center',
        color: 'inherit',
        '&:hover': {
            cursor: 'pointer',
        },

        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }));


//SETTINGS ICON WRAPPER
const IconWrapper = styled('div')(({ theme }) => ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',
    color: 'inherit',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'inherit',
        borderRadius: '50%',
        border: '1px solid #787878'
    },
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(1),
    },
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(0.5),
    },
}))

// HAMBURGER ICON STYLING
const NavMenuIcon = styled(MenuIcon)(({ theme }) =>
({
    position: 'absolute',
    color: '#000000',
    left: '1rem',
    height: '1.5rem',
    width: '1.5rem',

    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
    [theme.breakpoints.down('lg')]: {
        display: 'inline-block',
    },
    '&:hover': {
        cursor: 'pointer',
    },

}))

//IMAGE ICON STYLING
const NavImageIcon = styled(InsertPhotoSharpIcon)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        gap: theme.spacing(1),
        width: '4rem',
        height: '4rem',
    },
    [theme.breakpoints.down('md')]: {
        width: '3rem',
        height: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}))

// MOBILE MENU
const StyledMobileMenu = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    padding: '2rem 0.5rem 0.5rem 1rem',
    color: 'inherit',

    '&.mobile-menu': {
        [theme.breakpoints.down('md')]: {
            jusitfyContent: 'flex-end',
            gap: theme.spacing(1),
        },
    },
    '&.mob-title-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}))

//MOBILE MENU OPEN / CLOSE STYLING
const open = {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '50vw',
    height: 'auto',
    backgroundColor: 'inherit',
    zIndex: '1',
    transition: 'left 0.5s ease',
    display: 'flex',
    justifyContent: 'start',

};
const close = {
    display: 'none',
    position: 'absolute',
    top: '144px',
    left: '-100%'
};
//MOBILE MENU WRAPPER
const StyledBox = styled(Box)
    (({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        color: 'inherit',
        textTransform: 'capitalize',
        ...theme.typography.subtitle1,
    }));

//NAVBAR INNER MENU STYLING
const StyledNavStack = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '3rem',
    width: 'auto',
    [theme.breakpoints.up('lg')]: { gap: theme.spacing(2), },
    [theme.breakpoints.down('sm')]: { gap: theme.spacing(0.5) },

    '&.b2blight-middle':
    {
        justifyContent: 'flex-end',
        flexGrow: '3',
        gap: theme.spacing(2),
        [theme.breakpoints.down('lg')]:
        {
            gap: theme.spacing(2),
        }
    },
    '&.b2blight-left': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            margin: '0 0 0 2rem',
            gap: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            gap: '0.5rem',
        },

    },

    '&.b2blight-right': {
        width: 'auto',
        flexShrink: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        gap: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(1),
        },

    }
}))

//SEARCH FIELD WRAPPER
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    border: `${{ backgroundColor: '#fffff' } ? '0.1px solid #9e9e9e' : ''
        }`,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    marginLeft: 10,
    width: '100%',

    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

// SEARCH ICON WRAPPER
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

//TEXT FIELD WRAPPER
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));

export default function ReharvestNavbarTemplate() {

    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot className="reharvest" >
            <NavMenuIcon onClick={() => showMenu(!menu)} className="mobile-menu" />
            <StyledMobileMenu sx={menu ? open : close} className="mobile-menu">
                <StyledBox >
                    <Typography variant="h5" component="div">
                        Reharvest
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Button variant="outlined" onClick={() => showMenu(!menu)}>Close</Button>
                </StyledBox>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Products</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Services</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Profile</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">About Us</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">For Businesses</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Logout</a></Box>
            </StyledMobileMenu>

            <StyledNavStack className="b2blight-left">
                {/* NAVBAR LOGO / IMAGE */}
                <NavImageIcon />

                {/* NAVBAR TITLE */}
                <NavTitle>
                    <Typography variant="h4" component="div" >
                        Reharvest
                    </Typography>
                </NavTitle>
            </StyledNavStack>
            {/* DESKTOP MENU LINKS / ICONS */}
            <StyledNavStack className="b2blight-middle">
                <Box >
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search for Products…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
            </StyledNavStack>

            {/* SETTING ICONS */}
            <StyledNavStack direction="row" className="b2blight-right">

                <IconWrapper><BrightnessLowIcon sx={{ color: '#787878' }} /></IconWrapper>
                <IconWrapper><LanguageOutlinedIcon sx={{ color: '#787878' }} /></IconWrapper>
                <IconWrapper><PeopleIcon sx={{ color: '#787878' }} /></IconWrapper>
            </StyledNavStack>
        </NavRoot >

    </>


}
