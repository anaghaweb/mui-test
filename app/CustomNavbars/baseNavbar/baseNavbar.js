'use client'
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { Typography, Box, Button, Divider } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import { styled } from '@mui/material/styles';



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
        backgroundColor: '#ffffff',
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
    height: '3rem',
    width: 'auto',
    [theme.breakpoints.up('lg')]: { gap: theme.spacing(2), },
    [theme.breakpoints.down('sm')]: { gap: theme.spacing(0.5) },

    '&.base-left': {
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

    '&.base-right': {
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



export default function BaseNavbarTemplate() {


    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot className="base">
            {/* MOBILE MENU  */}
            <NavMenuIcon onClick={() => showMenu(!menu)} className="base-mobile-menu" />
            <StyledMobileMenu sx={menu ? open : close} className="base-menu-list">
                <StyledBox >
                    <Typography variant="h5" component="div">
                        Base
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Button variant="outlined" onClick={() => showMenu(!menu)}>Close</Button>
                </StyledBox>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                    <a href="#">Products</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Services</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">Profile</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">About Us</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}><a href="#">For Businesses</a></Box>
                <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>
                    <a href="#">Logout</a></Box>
            </StyledMobileMenu>
            <StyledNavStack className="base-left">
                {/* NAVBAR TITLE */}
                <NavTitle>
                    <Typography variant="h4" sx={{ marginTop: 'auto', marginBottom: 'auto' }}>Base</Typography>
                </NavTitle>
            </StyledNavStack>
            {/* DESKTOP MENU LINKS / ICONS */}

            {/* SETTING ICONS */}
            <StyledNavStack direction="row" className="base-right">
                <IconWrapper><BrightnessLowIcon /></IconWrapper>
                <IconWrapper><LanguageOutlinedIcon /></IconWrapper>
                <IconWrapper><PeopleIcon /></IconWrapper>
            </StyledNavStack>
        </NavRoot >

    </>
}














