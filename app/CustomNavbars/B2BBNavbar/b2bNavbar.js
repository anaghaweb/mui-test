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
import AtlassianSVG from '@/public/SVGs/atlassian';
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
        display: 'flex',
        alignItems: 'center',
        ...theme.typography.h3,
        color: 'inherit',
        marginLeft: '1rem',
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


//SETTINGS ICON WRAPPER
const IconWrapper = styled('div')(({ theme }) => ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',
    color: '#787878',
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
const AtlassianWrapper = styled(AtlassianSVG)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',

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
    display: 'flex',
    justifyContent: 'center',
    top: '100%',
    left: '0.15rem',
    width: '50vw',
    height: 'auto',
    backgroundColor: 'inherit',
    zIndex: '99',
    transition: 'left 0.5s ease',
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
    height: '4rem',

    [theme.breakpoints.up('lg')]: { gap: theme.spacing(2), },
    [theme.breakpoints.down('sm')]: { gap: theme.spacing(0.5) },
    '&.b2blight-middle':
    {
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('lg')]:
        {
            display: 'none',
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
            color: '#3399FF',
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
        color: 'inherit',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f2f2f2',
        },
        '&.stl-btn': {
            [theme.breakpoints.down('md')]:
            {
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
        color: '#3399FF',
        textTransform: 'capitalize',
        ...theme.typography.subtitle1,
    }));



export default function B2BTemplate() {

    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot className="b2bLight">

            {/* MOBILE MENU  */}
            <NavMenuIcon onClick={() => showMenu(!menu)} className="b2blight-mobile-menu" id="b2bMenuIcon" />
            <StyledMobileMenu sx={menu ? open : close} className="b2blight-menu-link">
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
                    <Typography variant="h4">B2B</Typography>
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
                <StyledLinks href="#" >
                    <AtlassianWrapper className="atlassian-logo">
                        <AtlassianSVG />
                    </AtlassianWrapper >
                    For Businesses
                </StyledLinks >
            </StyledNavStack>
            {/* SETTING ICONS */}
            <StyledNavStack direction="row" className="b2blight-right">
                <StyledButton className="stl-btn">
                    <StyledLinks className="stl-btn svgIconCart" href="#"><ShoppingCartRoundedIcon />
                        <Box className="cart-btn">Cart</Box></StyledLinks>
                </StyledButton>
                <StyledButton className="stl-btn">
                    <StyledLinks className="stl-btn" href="#"> <LoginOutlinedIcon />
                        <Box className="cart-btn">Login</Box></StyledLinks>
                </StyledButton>
                <IconWrapper className="b2blight-icon1"><BrightnessLowIcon /></IconWrapper>
                <IconWrapper className="b2blight-icon2"><LanguageOutlinedIcon /></IconWrapper>
                <IconWrapper className="b2blight-icon3"><PeopleIcon /></IconWrapper>
            </StyledNavStack>
        </NavRoot >

    </>
}














