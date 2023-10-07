'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles'
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const ModBar = styled(Toolbar)(({ theme }) => ({

    backgroundColor: '#FFFFFF',
    color: '#3399FF',
    fontFamily: 'inherit'
}))

const pages = ['Products', 'About Us', 'For Businesses'];
const profileSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings = ['System', 'Brightness', 'Installation'];
const languageMenu = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Marathi'];

function ResponsiveBase() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElBrightness, setAnchorElBrightness] = React.useState(null);
    const [anchorElLang, setAnchorElLang] = React.useState(null);

    const handleOpenLanguageMenu = (event) => {
        setAnchorElLang(event.currentTarget);
    }
    const handleCloseLanguageMenu = () => {
        setAnchorElLang(null)
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
                    {/* Mobile Icon & Menu */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', lg: 'none', color: 'inherit' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#000000"
                            sx={{ padding: '0.5rem' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >     {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    {/* Mobile Icon & Menu*/}

                    {/* TITLE */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'inherit', backgroundColor: 'inherit' } }}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                padding: { md: '1rem' },
                                display: { xs: 'flex', fontSize: '0.8rem' },
                                fontFamily: 'inherit',
                                fontWeight: 500,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {/* NAVBAR TITLE */}
                            Base
                        </Typography>
                    </Box>
                    {/* LOGO AND TITLE */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            flexBasis: '2%',
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
                        {/* DARK / LIGHT MENU */}
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
                    {/* SETTINGS MENU */}
                </ModBar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveBase;
