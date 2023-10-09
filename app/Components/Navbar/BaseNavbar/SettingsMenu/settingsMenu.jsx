'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const profileSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings = ['System', 'Brightness', 'Installation'];
const languageMenu = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Marathi'];

function SettingsMenu (){

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElBrightness, setAnchorElBrightness] = React.useState(null);
    const [anchorElLang, setAnchorElLang] = React.useState(null);

    const handleOpenLanguageMenu = (event) => {
        setAnchorElLang(event.currentTarget);
    }
    const handleCloseLanguageMenu = () => {
        setAnchorElLang(null)
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenBrightnessMenu = (event) => {
        setAnchorElBrightness(event.currentTarget)
    }
    const handleCloseBrightnessMenu = () => {
        setAnchorElBrightness(null)
    }
    
    {/* SETTINGS MENU */ }
    return  <>
        <Box
            sx={{
                display: 'flex',           
                flexGrow: 1,
                justifyContent: 'flex-end',
                }}>
                                                  
            <Tooltip title="Settings">
            <IconButton onClick={handleOpenBrightnessMenu}
                sx={{ p: { xs: '0.2rem', sm: '0.5rem' } }}>
                <SettingsIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Change Language">
            <IconButton onClick={handleOpenLanguageMenu}
                sx={{ p: { xs: '0.2rem', sm: '0.5rem' } }}>
                <LanguageOutlinedIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Manage Profile">
            <IconButton onClick={handleOpenUserMenu}
                sx={{ p: { xs: '0.2rem', sm: '0.5rem' } }}>
                <PeopleIcon />
            </IconButton>
        </Tooltip>
        {/* LANGUAGE MENU */}
        <Menu
            sx={{ mt: '45px' }}
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
            sx={{ mt: '45px' }}
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
            {settings.map((settings) => (
                <MenuItem key={settings} onClick={handleCloseBrightnessMenu}>
                    <Typography textAlign="center">{settings}</Typography>
                </MenuItem>
            ))}
        </Menu>
        {/* USER PROFILE MENU */}
        <Menu
            sx={{ mt: '45px' }}
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