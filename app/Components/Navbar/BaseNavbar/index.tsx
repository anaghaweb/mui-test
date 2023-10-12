import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SettingsMenu from '../SettingsMenu';
import {StyledTitle, StyledToolbar, Filler } from './Base.styled';
import MobileMenu from '../MobileMenu';

const settings = ['System', 'Brightness', 'Installation', "changes", "components"];

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
                    <Filler>
                        </Filler>
                                                           
                    {/* SETTINGS MENU */}            
                    <SettingsMenu iconColor="#787878" menuItems={settings} />   
                                                   
                </StyledToolbar>
            </Container>
        </AppBar >        
    )       
}
export default BaseNavbar;
