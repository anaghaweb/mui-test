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
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles'
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import PeopleIcon from '@mui/icons-material/People';
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '@/app/ThemeRegistry/ThemeRegistry';
import ThemeProvider from '@mui/material/styles/ThemeProvider';


const ModBar = styled(Toolbar)(({ theme }) => ({

    backgroundColor: '#D5E8D4',
    color: '#6A9153',
    fontFamily: 'inherit'
}))

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    color: '#000000',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50ch',

        },
    },
}));

const pages = ['Products', 'About Us', 'For Businesses'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const brightnessMenu = ['System', 'Lightmode', 'Darkmode'];
const languageMenu = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Marathi'];


function FullScreenSearchbar() {
    return <>
        <Box sx={

            {
                height: '100vh', width: '100%',
                position: 'absolute', top: '0', left: '0',
                backgroundColor: '#ffffff', zIndex: '98',

            }
        }  >
            <Search
                sx={{ width: '100%', backgroundColor: '#f8f8f8' }}
            >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    sx={{ width: '100%' }}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Container>
                <Typography>No recent searches</Typography>
            </Container>
        </Box>
    </>
}

function SearchAppBar() {
    return <Box>
        <Search
            sx={{ backgroundColor: '#f8f8f8' }}
        >
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />

        </Search>

    </Box>

}

function ResponsiveEcobo() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElBrightness, setAnchorElBrightness] = React.useState(null);
    const [anchorElLang, setAnchorElLang] = React.useState(null);
    const [search, setSearch] = React.useState(false)
    const useTheme = React.useContext(ThemeContext);

    const handleSearchBar = () => {
        setSearch(!search);
    }

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
        <ThemeProvider theme={useTheme}>
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
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* Mobile Icon & Menu*/}

                        {/* LOGO AND TITLE */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'inherit', backgroundColor: 'inherit' } }}>
                            {/* <IconButton
                                sx={{ height: '5rem', width: '5rem', display: { xs: 'none', md: 'flex' } }}
                                aria-label="logo of Base"
                                aria-controls="menu-appbar"

                                color="inherit"
                            >
                                <InsertPhotoSharpIcon
                                    sx={{ height: '100%', width: '100%', mr: 1 }} />
                            </IconButton> */}
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
                                Ecobo
                            </Typography>
                        </Box>
                        {/* LOGO AND TITLE */}

                        {/* Large screen Menu */}
                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex', justifyContent: 'center', color: 'inherit' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 1,
                                    color: 'inherit',
                                    display: 'block',
                                    textTransform: 'capitalize',
                                    fontSize: { sm: '1.5rem', lg: '1.5rem' },
                                    letterSpacing: 'none'
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}
                        {/* Large screen Menu */}


                        {/* SEARCH FIELD */}
                        {/* <Box sx={{ display: { xs: 'none', lg: 'flex', flexGrow: 4, justifyContent: 'flex-end' } }}>
                            <SearchAppBar />
                        </Box>
                        {search && <FullScreenSearchbar />}
                        {search && <Button
                            variant="text"
                            onClick={handleSearchBar}
                            sx={{
                                cursor: 'pointer',
                                padding: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 'fit-content',
                                height: '39px',
                                backgroundColor: 'transparent',
                                position: 'absolute',
                                top: '0',
                                bottom: '0',
                                right: '0.15rem',
                                zIndex: '99',
                            }}
                        >
                            Cancel
                        </Button>} */}
                        {/* SEARCH FIELD */}



                        {/* SETTINGS MENU */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexGrow: 1,
                                justifyContent: 'flex-end',
                                flexBasis: '2%',
                            }}>

                            <Tooltip title="Switch to Dark Mode">
                                <IconButton onClick={handleOpenBrightnessMenu}
                                    sx={{ p: { xs: '0.2rem', sm: '0.5rem' } }}>
                                    <DarkModeIcon />
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
                                {brightnessMenu.map((brightness) => (
                                    <MenuItem key={brightness} onClick={handleCloseBrightnessMenu}>
                                        <Typography textAlign="center">{brightness}</Typography>
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
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* SETTINGS MENU */}
                    </ModBar>
                </Container>
            </AppBar >
        </ThemeProvider>
    );
}
export default ResponsiveEcobo;
