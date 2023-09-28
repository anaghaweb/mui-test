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
import AtlassianSVGLight from '@/app/Components/SVGs/atlassianLight';
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
        backgroundColor: '#2A7FD4',
        color: '#fafafa',

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
        color: '#fafafa',
        [theme.breakpoints.down('md')]: {
            marginLeft: '2rem',
            gap: theme.spacing(1),
        },

        [theme.breakpoints.down('md')]: {
            display: 'none',
        }

    }));


//THEME BRIGHTNESS ICON TOGGLE
const NavBrightnessIcon = styled(BrightnessLowIcon)(({ theme }) =>
({
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(1),
    },
    color: '#fafafa',
}));

//PROFILE ICON STYLING
const NavPeopleIcon = styled(PeopleIcon)
    (({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(1),
        },
        color: '#fafafa',
    }));

// HAMBURGER ICON STYLING
const NavMenuIcon = styled(MenuIcon)(({ theme }) =>
({

    position: 'absolute',
    color: '#000000',
    left: '0.15rem',


    [theme.breakpoints.up('md')]: {
        display: 'none',
        height: '2rem',
        width: '2rem',
    },

    [theme.breakpoints.down('sm')]: {

        height: '1.5rem',
        width: '1.5rem',
    },


}))

// LANGUAGE ICON STYLING
const NavLanguageIcon = styled(LanguageOutlinedIcon)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        gap: theme.spacing(1),
    },
    color: '#fafafa',
}))

//NAVBAR INNER MENU STYLING
const StyledNavStack = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: theme.spacing(3),
    position: 'relative',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('md')]: {
        flexGrow: '2',
        jusitfyContent: 'flex-end',
        gap: theme.spacing(1),
    },
}))

//IMAGE ICON STYLING
const NavImageIcon = styled(InsertPhotoSharpIcon)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        gap: theme.spacing(1),
        width: '3rem',
        height: '3rem',
        marginRight: 10,
    },
    [theme.breakpoints.down('md')]: {
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
    backgroundColor: '#fafafa',
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


const StyledLinks = styled(Link)
    (({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        ...theme.typography.body2,

        [theme.breakpoints.up('md')]: {
            ...theme.typography.h6,
            gap: theme.spacing(1),
        },
        [theme.breakpoints.between('md', 'lg')]: {

            ...theme.typography.subtitle2,
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
            backgroundColor: '#dedede',
        },

        '&.stl-btn': {
            [theme.breakpoints.down('md')]:
            {
                fontSize: '1rem',
                backgroundColor: 'transparent',
                width: 'fit-content',
                color: '#fafafa'
            },
        },

        '.cart-btn': {
            [theme.breakpoints.down('sm')]:
            {
                display: 'none',

            }
        },



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

export default function B2BDarkTemplate() {

    const [menu, showMenu] = React.useState(false);

    return <>

        <NavRoot >
            <StyledNavStack direction="row" >
                <NavMenuIcon onClick={() => showMenu(!menu)} />
                <NavImageIcon />
                {/* MOBILE MENU  */}
                <StyledMobileMenu sx={menu ? open : close}  >
                    <StyledBox >
                        <Typography variant="h5" component="div" sx={{ width: 'fit-content', padding: '0.5rem' }} >
                            B2B
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Button variant="outlined" onClick={() => showMenu(!menu)}>Close</Button>
                    </StyledBox>
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Products</Box>
                    <Divider />
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Services</Box>
                    <Divider />
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Profile</Box>
                    <Divider />
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Logout</Box>
                    <Divider />
                    <Box className="mob-menu-link" onClick={() => showMenu(!menu)}>Logout</Box>
                </StyledMobileMenu>

                {/* TITLE */}
                <NavTitle>
                    <Typography variant="h4" component="div" >
                        B2B
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

            <StyledNavStack>
                <StyledLinks href="#" sx={{ height: "2rem", width: "2rem", justifyContent: 'center' }}>
                    <AtlassianSVGLight />
                </StyledLinks >
                <StyledLinks href="#" >
                    For Businesses
                </StyledLinks >
            </StyledNavStack>

            <StyledNavStack direction="row">
                <StyledButton className="stl-btn">
                    <ShoppingCartRoundedIcon />
                    <div className="cart-btn" >Cart</div>
                </StyledButton>
                <StyledButton className="stl-btn">
                    <LoginOutlinedIcon />
                    <div className="cart-btn">Login</div>
                </StyledButton>
                <NavBrightnessIcon />
                <NavLanguageIcon />
                <NavPeopleIcon />
            </StyledNavStack>
        </NavRoot >

    </>
}
