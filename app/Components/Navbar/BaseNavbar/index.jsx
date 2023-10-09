'use client'
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SettingsMenu from './SettingsMenu/settingsMenu';
import {TitleStyled, LogoTitleWrapper, LogoWrapper } from './styled';
import MobileMenu from './MobileMenu/mobileMenu';
import Box from '@mui/material/Box';

const ModBar = styled(Toolbar, {
    name: 'Basic',
    slot: 'root',
})(({ theme, ownerState }) => ({
    // backgroundColor: '#FFF2CC',
    // color: '#6A9153',
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
     ...(ownerState.variant === 'ecobo' ? {
            backgroundColor: '#D5E8D4',
            color: '#6A9153',
        } : {
            backgroundColor: '#FFFFFF',
            color: '#3399FF',
        }),
}))

const BasicNavbarVariant = React.forwardRef(function BasicNavbarVariant(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'Basic' })
    const { variant, ...other } = props;
    const ownerState = {...props, variant };

    const [search, setSearch] = React.useState(false)
    const handleSearchBar = () => {
        setSearch(!search);
    }
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
                        <TitleStyled
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            ownerState={ownerState}
                        >
                            {/* NAVBAR TITLE */}
                            {variant === 'ecobo'  ? 'Ecobo' : 'Base'}
                        </TitleStyled>
                    </LogoTitleWrapper>
                    <Box sx={{ display: 'flex', flexGrow:{xs:0, sm:1} }}>
                        {/*Space Filler  */}
                    </Box>
                                        
                    {/* SETTINGS MENU */}            
                        <SettingsMenu />                                      
                </ModBar>
            </Container>
        </AppBar >        
    )
})
BasicNavbarVariant.propTypes = {
    variant: PropTypes.oneOf(['ecobo','base']),
};

function BasicNavbar({variant}) {
       return (
        <BasicNavbarVariant variant="base" />  
    );
}
export default BasicNavbar;
