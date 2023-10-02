'use client'
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { IconButton, Typography, Stack, Box, Button, Divider, Container } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import { styled, alpha } from '@mui/material/styles';
import Link from 'next/link';
import AtlassianSVG from '@/app/Components/SVGs/atlassian';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';



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
        backgroundColor: '#DAE8FC',
        color: '#3399FF',

        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
            padding: theme.spacing(1),
            height: '3rem'
        },
    }));


//NAVBAR TITLE 
const NavTitle = styled('div')
    (({ theme }) => ({
        ...theme.typography.h3,
        color: '#3399FF',
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
//THEME BRIGHTNESS ICON TOGGLE
const NavBrightnessIcon = styled(BrightnessLowIcon)(({ theme }) =>
({
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(1),
    },
    color: '#787878',
    '&:hover': {
        cursor: 'pointer',
    },
}));

//PROFILE ICON STYLING
const NavPeopleIcon = styled(PeopleIcon)
    (({ theme }) => ({

        '&:hover': {
            cursor: 'pointer',

        },
        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(1),
        },
        color: '#787878',
    }));

// LANGUAGE ICON STYLING
const NavLanguageIcon = styled(LanguageOutlinedIcon)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(1),
    },
    color: '#787878',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#69a5e0',
        borderRadius: '50%',
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
        width: '3rem',
        height: '3rem',

    },
    [theme.breakpoints.down('lg')]: {
        margin: '0 1rem 0 3rem',
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

//NAVBAR INNER MENU STYLING
const StyledNavStack = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexGrow: '1',

    [theme.breakpoints.up('lg')]: { gap: theme.spacing(2), },
    [theme.breakpoints.down('sm')]: { gap: theme.spacing(0.5) },

    '&.b2blight-middle':
    {
        flexGrow: '1',
        justifyContent: 'center',
        [theme.breakpoints.down('lg')]:
        {
            display: 'none',
        }
    },
    '&.b2blight-left': {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            gap: '0.5rem'
        },
    },

    '&.b2blight-right': {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(1),
        },
    }
}))

//LINKS STYLING
const StyledLinks = styled(Link)
    (({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.typography.body2,
        color: 'inherit',
        '&:visited': {
            color: '#3399FF',
        },
        [theme.breakpoints.up('lg')]: {
            ...theme.typography.h6,
        },
        '.hover': {
            cursor: 'pointer',
            color: '#70b7ff',
        },
    }));

// BUTTONS CART, LOGIN STYLING
const StyledButton = styled('button')
    (({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '6rem',
        height: '2rem',
        minWidth: 'fit-content',
        textTransform: 'capitalize',
        backgroundColor: '#ffffff',
        borderRadius: '0.2rem',
        border: 'none',
        ...theme.typography.subtitle1,
        gap: theme.spacing(0.5),
        color: '#3399FF',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f2f2f2',
        },
        '&.stl-btn': {
            [theme.breakpoints.down('md')]:
            {
                fontSize: '1rem',
                backgroundColor: 'transparent',
                width: 'fit-content',
            },
        },
        '.cart-btn': {
            [theme.breakpoints.down('sm')]:
            {
                display: 'none',
            }
        },
    }));

//MOBILE MENU WRAPPER
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



export default function B2BTemplate() {

    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot className="b2bLight">

            {/* MOBILE MENU  */}
            <NavMenuIcon onClick={() => showMenu(!menu)} className="mobile-menu" />
            <StyledMobileMenu sx={menu ? open : close} className="mobile-menu">
                <StyledBox >
                    <Typography variant="h5" component="div">
                        B2B
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
                        B2B
                    </Typography>
                </NavTitle>
            </StyledNavStack>

            {/* DESKTOP MENU LINKS / ICONS */}
            <StyledNavStack className="b2blight-middle">
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
            </StyledNavStack>

            {/* SETTING ICONS */}
            <StyledNavStack direction="row" className="b2blight-right">
                <StyledButton className="stl-btn">
                    <StyledLinks className="stl-btn" href="#" ><ShoppingCartRoundedIcon />
                        <Box className="cart-btn">Cart</Box></StyledLinks>
                </StyledButton>
                <StyledButton className="stl-btn">
                    <StyledLinks className="stl-btn" href="#"> <LoginOutlinedIcon />
                        <Box className="cart-btn">Login</Box></StyledLinks>
                </StyledButton>
                <NavBrightnessIcon />
                <NavLanguageIcon />
                <NavPeopleIcon />
            </StyledNavStack>
        </NavRoot >

    </>
}














