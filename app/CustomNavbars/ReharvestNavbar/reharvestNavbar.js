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
import AtlassianSVG from '@/app/Components/SVGs/atlassian';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


//NAVROOT

const NavRoot = styled('div')
    (({ theme }) => ({

        display: 'flex',
        width: '100%',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(3),
        padding: theme.spacing(3),
        border: '0.05rem solid #FFF2CC',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        backgroundColor: '#FFF2CC',
        color: '#787878',

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

        color: '#6A9153',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '2rem',
            gap: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },

    }));

//THEME BRIGHTNESS ICON TOGGLE
const NavBrightnessIcon = styled(BrightnessLowIcon)(({ theme }) =>
({

    [theme.breakpoints.down('md')]: {

        gap: theme.spacing(1),

    },
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#e5e5e5',
        borderRadius: '50%',
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
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#e5e5e5',
            borderRadius: '50%',
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
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#e5e5e5',
        borderRadius: '50%',
    },

}))

// LANGUAGE ICON STYLING
const NavLanguageIcon = styled(LanguageOutlinedIcon)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(1),
    },
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#e5e5e5',
        borderRadius: '50%',
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

    color: '#6A9153',
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
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#e5e5e5',
        borderRadius: '50%',
    },

}))

// MOBILE MENU
const StyledMobileMenu = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    padding: '2rem 0.5rem 0.5rem 1rem',
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,

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

    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '50vw',
    height: 'auto',
    backgroundColor: '#ffffff',
    zIndex: '1',
    transition: 'left 0.5s ease',
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
        color: '#6A9153',

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
        color: '#3399FF',
        textTransform: 'capitalize',
        ...theme.typography.subtitle1,
        gap: theme.spacing(0.5),
    }));

const StyledBox = styled(Box)
    (({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        color: '#3399FF',
        textTransform: 'capitalize',
        ...theme.typography.subtitle1,
    }));


export default function ReharvestNavbarTemplate() {

    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot className="reharvest" >
            <StyledNavStack direction="row" >
                <NavMenuIcon onClick={() => showMenu(!menu)} className="mobile-menu" />
                <NavImageIcon />
                {/* MOBILE MENU  */}
                <StyledMobileMenu sx={menu ? open : close}  >
                    <StyledBox >
                        <Typography variant="h5" component="div" sx={{ width: 'fit-content', padding: '0.5rem' }} >
                            Reharvest
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <StyledButton variant="text" onClick={() => showMenu(!menu)}>Close</StyledButton>
                    </StyledBox>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Products</Box>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Services</Box>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Profile</Box>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>About Us</Box>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>For Businesses</Box>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Logout</Box>
                </StyledMobileMenu>

                {/* TITLE */}
                <NavTitle>
                    <Typography variant="h4" component="div" >
                        Reharvest
                    </Typography>
                </NavTitle>
            </StyledNavStack>


            {/* SEARCH BAR */}
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

            <StyledNavStack direction="row">

                <NavBrightnessIcon />
                <NavLanguageIcon />
                <NavPeopleIcon />
            </StyledNavStack>
        </NavRoot >

    </>


}
