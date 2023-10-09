'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { IconButton, Typography, Stack, Box, Button, Divider, Container } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import { styled, alpha } from '@mui/material/styles';
import { StyledBox } from '@/app/CustomComponents/styledboxes';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Link from '@mui/material/Link';
import AtlassianSVG from '@/public/SVGs/atlassian';
import StarSVG from '@/public/SVGs/starSVG';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';



const NavRoot = styled('div')
    (({ theme }) => ({

        display: 'flex',
        width: '100%',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(3),
        padding: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.main,

        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-evenly',
            padding: theme.spacing(1),
            height: '3rem'
        },

    }));


//NAVBAR TITLE 
const NavTitle = styled('div')
    (({ theme }) => ({
        fontSize: theme.typography.h3,

        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down('md')]: {

            gap: theme.spacing(1),
        },


        '&.cart-btn': {

        }
    }));


//THEME BRIGHTNESS ICON TOGGLE
const NavBrightnessIcon = styled(BrightnessLowIcon)(({ theme }) =>
({

    [theme.breakpoints.down('md')]: {

        gap: theme.spacing(1),

    },

}));

//PROFILE ICON STYLING
const NavPeopleIcon = styled(PeopleIcon, {
    name: 'MuiBasicNav',
    slot: 'icon_2',
})
    (({ theme }) => ({

        [theme.breakpoints.down('md')]: {

            gap: theme.spacing(1),

        },

    }));

// HAMBURGER ICON STYLING
const NavMenuIcon = styled(MenuIcon)(({ theme }) =>
({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    position: 'absolute',

    color: '#000000',
    left: '0.15rem',


}))

// LANGUAGE ICON STYLING
const NavLanguageIcon = styled(LanguageOutlinedIcon)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(1),
    },
}))

//NAVBAR INNER MENU STYLING
const StyledNavStack = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: theme.spacing(3),
    position: 'relative',

    [theme.breakpoints.down('md')]: {

        flexGrow: '2',
        jusitfyContent: 'flex-end',
        gap: theme.spacing(1),

    },
}))

//IMAGE ICON STYLING
const NavImageIcon = styled(InsertPhotoSharpIcon)(({ theme }) => ({


    width: '2rem',
    height: '2rem',
    [theme.breakpoints.up('md')]: {
        gap: theme.spacing(1),
        width: '4rem',
        height: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(1),
        display: 'none',
    },

}))

// MOBILE MENU
const StyledMobileMenu = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    padding: '2rem 0.5rem 0.5rem 1rem',
    color: theme.palette.text.primary,


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
    backgroundColor: '#ffffff',
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
    marginLeft: 30,
    width: '100%',

    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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
            width: '30ch',
        },
    },
}));

const StyledLinks = styled(Link)
    (({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(1),
        ...theme.typography.body2,
        [theme.breakpoints.up('md')]: {
            ...theme.typography.h6,
            gap: theme.spacing(1),
        },
        [theme.breakpoints.down('md')]: {

            gap: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',

        },
        '.hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
        },

    }));

const StyledButton = styled(Button)
    (({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        width: 'fit-content',
        textTransform: 'capitalize',
        ...theme.typography.subtitle1,
        gap: theme.spacing(0.5),
    }));


export default function BaseNavbarTemplate() {

    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot >
            <StyledNavStack direction="row" >
                <NavMenuIcon onClick={() => showMenu(!menu)} />
                <NavImageIcon />
                {/* MOBILE MENU  */}
                <StyledMobileMenu sx={menu ? open : close}  >
                    <Box className="mob-title-wrapper">
                        <Typography variant="h4" component="div" >
                            Base
                        </Typography>
                        <Button onClick={() => showMenu(!menu)}>Close</Button>
                    </Box>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Products</Box>
                    <Divider />
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Services</Box>
                    <Divider />
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Profile</Box>
                    <Divider />
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Logout</Box>
                    <Divider />
                </StyledMobileMenu>

                {/* TITLE */}
                <NavTitle>
                    <Typography variant="h4" component="div" >
                        Base
                    </Typography>
                </NavTitle>
            </StyledNavStack>

            {/* LINKS */}
            <StyledLinks href="#" >
                Products
            </StyledLinks >
            <StyledLinks href="#" >
                About Us
            </StyledLinks >
            <StyledLinks href="#" sx={{ height: "2rem", width: "2rem", justifyContent: 'center' }}>
                <AtlassianSVG />
            </StyledLinks >
            <StyledLinks href="#" >
                For Businesses
            </StyledLinks >
            <StyledButton color="secondary" variant="outlined" startIcon={<ShoppingCartRoundedIcon />}>
                Cart
            </StyledButton>
            <StyledButton color="secondary" variant="outlined" startIcon={<LoginOutlinedIcon />}>
                Login
            </StyledButton>

            {/* SEARCH BAR */}
            <Box >
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Box>
            <StyledNavStack direction="row">
                <NavBrightnessIcon />
                <NavLanguageIcon />
                <NavPeopleIcon />
            </StyledNavStack>
        </NavRoot >

    </>


}


































