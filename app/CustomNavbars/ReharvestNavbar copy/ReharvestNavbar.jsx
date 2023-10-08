'use client'
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FullScreenSearchbar, SearchAppBar } from './CustomSearchField/customSearchBar';
import SettingsMenu from './SettingsMenu/settingsMenu';
import { CancelButtonWrapper, TitleStyled } from './styled';
import MobileMenu from './MobileMenu/mobileMenu';

const ModBar = styled(Toolbar, {

    name: 'Basic',
    slot: 'root',
    
})(({ theme, ownerState }) => ({
    backgroundColor: '#FFF2CC',
    color: '#6A9153',
    fontFamily: 'inherit'
}))


const BasicNavbarVariant = React.forwardRef(function BasicNavbar(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiBasicNav' })
    const { title, variant, icon_1, icon_2, icon_3, icon_4, ...other } = props;
    const ownerState = { ...props, variant };
    return (
        <NavRoot ref={ref} ownerState={ownerState} {...other}>
            <StyledNavStack direction="row" >
                <NavMenuIcon ownerState={ownerState} />
                <NavTitle ownerState={ownerState}>{title}</NavTitle>
            </StyledNavStack>
            <StyledNavStack direction="row">
                <NavBrightnessIcon ownerState={ownerState} />
                <NavLanguageIcon ownerState={ownerState} />
                <NavPeopleIcon ownerState={ownerState} />
            </StyledNavStack>
        </NavRoot >
    )
})
BasicNavbarVariant.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['basic', 'ochre', 'blue', 'violet', '']),
};


function ResponsiveReharvest() {
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
                <ModBar disableGutters sx={{ padding: '0.5rem', position: 'relative', height: 'inherit' }} >

                    <MobileMenu />

                    {/* LOGO AND TITLE */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'inherit', backgroundColor: 'inherit' } }}>
                        <IconButton
                            sx={{ height: '5rem', width: '5rem', display: { xs: 'none', md: 'flex' } }}
                            aria-label="logo of reharvest"
                            aria-controls="menu-appbar"
                            color="inherit"
                        >
                            <InsertPhotoSharpIcon
                                sx={{ height: '100%', width: '100%', mr: 1 }} />
                        </IconButton>
                        <TitleStyled
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                        >
                            {/* NAVBAR TITLE */}
                            Reharvest
                        </TitleStyled>
                    </Box>
    

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
                        <Button
                            variant="text"
                            sx={{
                                display: { xs: 'flex', lg: 'none' },
                                flexGrow: 1,
                                minWidth: 'fit-content',
                                color: 'inherit',
                                justifyContent: 'flex-end'
                            }}
                            onClick={handleSearchBar}
                    >
                         <SearchOutlinedIcon />
                    </Button>   
                    
                    {/* SETTINGS MENU */}            
                        <SettingsMenu />                   
                    
                </ModBar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveReharvest;
