'use client'
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import SettingsMenu from './SettingsMenu/settingsMenu';
import { TitleStyled, LogoTitleWrapper,  LogoWrapper, StyledButton, StyledLinks, ButtonWrapper } from './styled';
import MobileMenu from './MobileMenu/mobileMenu';
import LargeScreenMenu from './LargeScreenMenu/largeScreenMenu';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


const ModBar = styled(Toolbar, {
    name: 'b2b',
    slot: 'root',
})(({ theme, ownerState }) => ({
    fontFamily: 'inherit',
    padding: '0.5rem',
    position: 'relative',
    height: 'inherit',
    '*':{
    textDecoration: 'none',
    boxSizing: 'border-box', 
    },
    '*:visited':{
    color: 'inherit',
    },
    ...(ownerState.variant === 'light' ? {
        background: '#DAE8FC',
        color: '#3399FF'
        
    } : {
        background: '#2A7FD4',
        color: '#ffffff',
    }),
}))

const B2BNavbarVariant = React.forwardRef(function B2BNavbarVariant(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'b2b' })
    const { variant, ...other } = props;
    const ownerState = {...props, variant };
   
    return (
            <AppBar
            position="static"
            sx={{ height: { xs: '3rem', md: '5rem' } }}              
        >
            <Container maxWidth="xl"
                disableGutters
                sx={{ height: 'inherit' }}
            >
                <ModBar disableGutters 
                ref={ref} ownerState={ownerState} {...other}
                >
                    <MobileMenu />
                    {/* LOGO AND TITLE */}
                    <LogoTitleWrapper
                        ownerState={ownerState}
                    >
                        <LogoWrapper
                            aria-label="logo of reharvest"
                            aria-controls="menu-appbar"
                            color="inherit"
                            ownerState={ownerState}
                        >
                            <InsertPhotoSharpIcon
                                sx={{ height: '100%', width: '100%', mr: 1 }} />
                        </LogoWrapper>
                        <TitleStyled
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            ownerState={ownerState}
                        >
                            {/* NAVBAR TITLE */}
                            B2B
                        </TitleStyled>
                    </LogoTitleWrapper>
                    {/* LARGE SCREEN MENU */}
                    <LargeScreenMenu
                        ownerState={ownerState}
                        variantcolor={ownerState.variant || 'light'} />    
                    
                    {/* LOGIN & CART BUTTONS */}

                     <ButtonWrapper 
                        ownerState={ownerState}
                    >
                        <StyledButton className="stl-btn"                    
                        variantcolor={ownerState.variant || 'light'}
                        >
                            <StyledLinks className="stl-btn svgIcon" href="#"><ShoppingCartRoundedIcon />
                                <Box className="cart-btn">
                                    Cart</Box></StyledLinks>
                        </StyledButton>

                        <StyledButton className="stl-btn svgIcon"
                            variantcolor={ownerState.variant || 'light'}
                            >
                            <StyledLinks className="stl-btn" href="#"> <LoginOutlinedIcon />
                                <Box className="cart-btn">Login</Box></StyledLinks>
                        </StyledButton>

                    </ButtonWrapper>
                    {/* SETTINGS MENU */}            
                    <SettingsMenu
                        ownerState={ownerState}
                        variantcolor={ownerState.variant ||
                            'light'} />                                     
                </ModBar>
            </Container>
        </AppBar >        
    )
})
B2BNavbarVariant.propTypes = {
    variant: PropTypes.oneOf(['dark', '']),
};

function ResponsiveB2BDarkBlue({variant}) {
       return (
        <B2BNavbarVariant
         variant="dark" />  
    );
}
export default ResponsiveB2BDarkBlue;
