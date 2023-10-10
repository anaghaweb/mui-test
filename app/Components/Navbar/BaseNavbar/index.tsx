import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import SettingsMenu from './SettingsMenu/settingsMenu';
import {StyledTitle, LogoTitleWrapper, StyledToolbar } from './Base.styled';
import MobileMenu from './MobileMenu/mobileMenu';

function BaseNavbar(): JSX.Element {     
    return (  
         <AppBar
            position="static"               
          >
            <Container maxWidth="xl"
                disableGutters                
            >
                <StyledToolbar
                    disableGutters
                >
                    <MobileMenu />
                    {/* LOGO AND TITLE */}
                    <LogoTitleWrapper
                        
                    >
                        <StyledTitle
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                        >
                            {/* NAVBAR TITLE */}
                            Base
                        </StyledTitle>
                    </LogoTitleWrapper>
                                                           
                    {/* SETTINGS MENU */}            
                        <SettingsMenu />                                      
                </StyledToolbar>
            </Container>
        </AppBar >        
    )       
}
export default BaseNavbar;
