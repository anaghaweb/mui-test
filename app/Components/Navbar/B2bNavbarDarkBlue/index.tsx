'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import SettingsMenu from '../SettingsMenu';
import { StyledTitle, LogoTitleWrapper,  LogoWrapper, StyledButton, StyledLinks, ButtonWrapper,StyledToolbar, StyledAppBar } from './b2b.styled';
import MobileMenu from '../MobileMenu';
import LargeScreenMenu from './LargeScreenMenu/largeScreenMenu';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


function B2BDarkNavbar() { 
    return (
            <StyledAppBar
            position="static"                        
        >
            <Container maxWidth="xl"
                disableGutters
                style={{height:'inherit'}}
            >
                <StyledToolbar
                    disableGutters                 
                >
                    <MobileMenu />
                    {/* LOGO AND TITLE */}
                    <LogoTitleWrapper>
                        <LogoWrapper
                            aria-label="logo of reharvest"
                            aria-controls="menu-appbar">                           
                            <InsertPhotoSharpIcon
                                style={{ height: '100%', width: '100%' }}
                            />
                        </LogoWrapper>
                        <StyledTitle
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"                           
                        >
                            {/* NAVBAR TITLE */}
                            B2B
                        </StyledTitle>
                    </LogoTitleWrapper>
                    {/* LARGE SCREEN MENU */}
                    <LargeScreenMenu />    
                    
                    {/* LOGIN & CART BUTTONS */}
                     <ButtonWrapper>                             
                        <StyledButton className="stl-btn">                                                   <StyledLinks className="stl-btn" href="#"><ShoppingCartRoundedIcon /><Box className="cart-btn">
                                    Cart</Box></StyledLinks>
                        </StyledButton>
                        <StyledButton className="stl-btn">
                            <StyledLinks className="stl-btn" href="#"> <LoginOutlinedIcon />
                                <Box className="cart-btn">Login</Box></StyledLinks>
                        </StyledButton>
                    </ButtonWrapper>
                    {/* SETTINGS MENU */}            
                    <SettingsMenu />                                     
                </StyledToolbar>
            </Container>
        </StyledAppBar >        
    )   
}
export default B2BDarkNavbar;
