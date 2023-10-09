'use client'
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FullScreenSearchbar, SearchAppBar } from './CustomSearchField/customSearchBar';
import SettingsMenu from './SettingsMenu/settingsMenu';
import { CancelButtonWrapper, TitleStyled, LogoTitleWrapper, SearchButtonWrapper, LogoWrapper } from './styled';
import MobileMenu from './MobileMenu/mobileMenu';

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
     ...(ownerState.variant === 'modernBlue' ? {
            background: 'linear-gradient(to right, #66B2FF, #B9E0A5)',
            color: '#6A9153',
        } : ownerState.variant === 'modernPink' ? {
            background: 'linear-gradient(to right, #FFCCFF, #CCE5FF)',
            color: '#6A9153',
        } : ownerState.variant === 'modernPurple' ? {
            background: 'linear-gradient(to right, #CC99FF, #CCFFE6)',
            color: '#6A9153',
        } : {
            backgroundColor: '#FFF2CC',
            color: '#6A9153',
        }),
}))

const ModernNavbarVariant = React.forwardRef(function ModernNavbarVariant(inProps, ref) {
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
           // ref={ref} ownerState={ownerState} {...other}
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
                            {(variant === 'modernPink' || variant === 'modernBlue' ||
                                variant === 'modernPurple') ? 'Modern' : 'Reharvest'}
                        </TitleStyled>
                    </LogoTitleWrapper>
   
                    {/* SEARCH FIELD */}
                       <Box sx={{ display: { xs: 'none', lg: 'flex', flexGrow: 1, justifyContent: 'flex-end' } }}>
                        <SearchAppBar />
                    </Box>
                    {search && <FullScreenSearchbar />}
                    {search && <CancelButtonWrapper
                        variant="outlined"
                        onClick={handleSearchBar}
                        >
                        Cancel
                    </CancelButtonWrapper>}                  
                    {/* SEARCH ICON */}
                        <SearchButtonWrapper
                            variant="text"
                            onClick={handleSearchBar}
                    >
                         <SearchOutlinedIcon />
                    </SearchButtonWrapper>                     
                    {/* SETTINGS MENU */}            
                        <SettingsMenu />                                      
                </ModBar>
            </Container>
        </AppBar >        
    )
})
ModernNavbarVariant.propTypes = {
    variant: PropTypes.oneOf(['modernPink', 'modernPurple', 'modernBlue','']),
};

function ModernPink({variant}) {
       return (
        <ModernNavbarVariant variant="modernPink" />  
    );
}
export default ModernPink;
