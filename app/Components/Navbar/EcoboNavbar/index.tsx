import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import SettingsMenu from './SettingsMenu/settingsMenu';
import {StyledTitle, StyledToolbar } from './ecobo.styled';
import MobileMenu from './MobileMenu/mobileMenu';

function EcoboNavbar(): JSX.Element {     
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
                   
                        <StyledTitle
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                        >
                            {/* NAVBAR TITLE */}
                            Ecobo
                        </StyledTitle>
        
                                                           
                    {/* SETTINGS MENU */}            
                    <SettingsMenu  />                                      
                </StyledToolbar>
            </Container>
        </AppBar >        
    )       
}
export default EcoboNavbar;
