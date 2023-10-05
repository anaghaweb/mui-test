'use client'
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { Typography, Box, Button, Divider } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import AtlassianSVGLight from '@/app/Components/SVGs/atlassianLight';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';



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
        backgroundColor: '#2A7FD4',
        color: '#ffffff',
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
        marginLeft: '0.5rem',
        '&:hover': {
            cursor: 'pointer',
        },

        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.body2,
            marginLeft: '0.5rem',
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

//ATTLASIAN-CROWD LOGO WRAPPER
const AtlassianWrapper = styled(AtlassianSVGLight)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',
    color: 'inherit',

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
    height: '3rem',

    [theme.breakpoints.up('lg')]: { gap: theme.spacing(2), },
    [theme.breakpoints.down('sm')]: { gap: theme.spacing(0.5) },

    '&.b2bdark-middle':
    {
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('lg')]:
        {
            display: 'none',
        }
    },
    '&.b2bdark-left': {
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

    '&.b2bdark-right': {
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
        ...theme.typography.h5,
        gap: theme.spacing(1),
        color: 'inherit',
        '&:visited': {
            color: 'inherit',
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
        gap: theme.spacing(0.5),
        color: '#2A7FD4',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#ffffff',
        },
        '&.stl-btn': {
            [theme.breakpoints.down('md')]:
            {
                color: '#ffffff',
                backgroundColor: 'transparent',
                width: 'fit-content',
            },
        },
        '.cart-btn': {
            ...theme.typography.body1,
            [theme.breakpoints.up('md')]: {
                ...theme.typography.subtitle1,
            },
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
        color: 'inherit',
        textTransform: 'capitalize',
        ...theme.typography.subtitle1,
    }));



export default function B2BTemplate() {

    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot className="b2bdark">

            {/* MOBILE MENU  */}
            <NavMenuIcon onClick={() => showMenu(!menu)} className="b2bdark-mobile-menu" id="b2bMenuIconDark" />
            <StyledMobileMenu sx={menu ? open : close} className="b2bdark-menu-list">
                <StyledBox >
                    <Typography variant="h5" component="div">
                        B2B
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <StyledButton variant="outlined" onClick={() => showMenu(!menu)}>Close</StyledButton>
                </StyledBox>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Products</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Services</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Profile</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">About Us</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">For Businesses</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Logout</a></Box>
            </StyledMobileMenu>

            <StyledNavStack className="b2bdark-left">
                {/* NAVBAR LOGO / IMAGE */}
                <NavImageIcon />

                {/* NAVBAR TITLE */}
                <NavTitle>
                    <Typography variant="h4">
                        B2B
                    </Typography>
                </NavTitle>
            </StyledNavStack>
            {/* DESKTOP MENU LINKS / ICONS */}
            <StyledNavStack className="b2bdark-middle">
                <StyledLinks href="#" >
                    Products
                </StyledLinks >
                <StyledLinks href="#" >
                    About Us
                </StyledLinks >
                <StyledLinks href="#" >
                    <AtlassianWrapper className="atlassian-logo">
                        <AtlassianSVGLight />
                    </AtlassianWrapper >
                    For Businesses
                </StyledLinks >
            </StyledNavStack>
            {/* SETTING ICONS */}
            <StyledNavStack direction="row" className="b2bdark-right">
                <StyledButton className="stl-btn">
                    <StyledLinks className="stl-btn svgIconCartDark" href="#" ><ShoppingCartRoundedIcon />
                        <Box className="cart-btn">Cart</Box></StyledLinks>
                </StyledButton>
                <StyledButton className="stl-btn">
                    <StyledLinks className="stl-btn" href="#"> <LoginOutlinedIcon />
                        <Box className="cart-btn">Login</Box></StyledLinks>
                </StyledButton>
                <IconWrapper className="b2bdark-icon1"><BrightnessLowIcon /></IconWrapper>
                <IconWrapper className="b2bdark-icon2"><LanguageOutlinedIcon /></IconWrapper>
                <IconWrapper className="b2bdark-icon3"><PeopleIcon /></IconWrapper>
            </StyledNavStack>
        </NavRoot >

    </>
}














