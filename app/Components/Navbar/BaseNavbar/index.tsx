import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import SettingsMenu from '../SettingsMenu';
import {StyledTitle, StyledToolbar } from './Base.styled';
import MobileMenu from '../MobileMenu';

const BaseNavbar:React.FC =()=> {     
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
                            Base
                        </StyledTitle>
                    
                                                           
                    {/* SETTINGS MENU */}            
                    <SettingsMenu  />                                      
                </StyledToolbar>
            </Container>
        </AppBar >        
    )       
}
export default BaseNavbar;
