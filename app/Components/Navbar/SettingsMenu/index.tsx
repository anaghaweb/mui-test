'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { StyledIconButton } from './settingsMenu.styled';
const profileSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings = ['System', 'Brightness', 'Installation'];
const languageMenu = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Marathi'];

interface IPROPS{
    iconColor?: string;
    menuItems?:string[];
}

const SettingsMenu: React.FC<IPROPS> = ({ iconColor, menuItems })=>{

    console.log(iconColor, menuItems)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElBrightness, setAnchorElBrightness] = React.useState<null | HTMLElement>(null);
    const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);

    const handleOpenLanguageMenu = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorElLang(event.currentTarget);
    }
    const handleCloseLanguageMenu = () => {
        setAnchorElLang(null)
    };
    const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenBrightnessMenu = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorElBrightness(event.currentTarget)
    }
    const handleCloseBrightnessMenu = () => {
        setAnchorElBrightness(null)
    }
    
    {/* SETTINGS MENU */ }
    return  <>
        <Box
            style={{
                display: 'flex',
                flexGrow: 0,
                justifyContent: 'flex-end',
                color: `${iconColor}`,
                }}>
                                                  
            <Tooltip title="Settings">
            <StyledIconButton onClick={handleOpenBrightnessMenu}>
                
                <SettingsIcon />
            </StyledIconButton>
        </Tooltip>
        <Tooltip title="Change Language">
            <StyledIconButton onClick={handleOpenLanguageMenu}>
                
                <LanguageOutlinedIcon />
            </StyledIconButton>
        </Tooltip>
        <Tooltip title="Manage Profile">
            <StyledIconButton onClick={handleOpenUserMenu}>
               
                <PeopleIcon />
            </StyledIconButton>
        </Tooltip>
        {/* LANGUAGE MENU */}
        <Menu
            style={{ marginTop: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElLang}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElLang)}
            onClose={handleCloseLanguageMenu}
        >
            {languageMenu.map((language) => (
                <MenuItem key={language} onClick={handleCloseLanguageMenu}>
                    <Typography textAlign="center">{language}</Typography>
                </MenuItem>
            ))}
        </Menu>
        {/*Settings Menu*/}
        <Menu
           style={{ marginTop: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElBrightness}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElBrightness)}
            onClose={handleCloseBrightnessMenu}
        >
            {settings.map((items) => (
                <MenuItem key={items} onClick={handleCloseBrightnessMenu}>
                    <Typography textAlign="center">{items}</Typography>
                </MenuItem>
            ))}
        </Menu>
        {/* USER PROFILE MENU */}
        <Menu
            style={{ marginTop: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {profileSettings.map((profileSettings) => (
                <MenuItem key={profileSettings} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{profileSettings}</Typography>
                </MenuItem>
            ))}
        </Menu>
        </Box>
        </>
    {/* SETTINGS MENU */ }
}

export default SettingsMenu;