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
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import AtlassianSVG from '@/app/Components/SVGs/atlassian';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';



const ModBar = styled(Toolbar)(({ theme }) => ({

    backgroundColor: '#DAE8FC',
    color: '#3399FF',
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

const AtlassianWrapper = styled(AtlassianSVG)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.2rem',
    height: '2.2rem',

}))

const StyledButton = styled('button')
    (({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '6rem',
        height: '2rem',
        minWidth: 'fit-content',
        textTransform: 'capitalize',
        backgroundColor: '#ffffff',
        borderRadius: '0.2rem',
        border: 'none',

        color: 'inherit',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f2f2f2',
        },
        '&.stl-btn': {
            [theme.breakpoints.down('md')]:
            {
                backgroundColor: 'transparent',
                width: 'fit-content',
            },
        },
        '.cart-btn': {
            ...theme.typography.body1,
            [theme.breakpoints.up('md')]: {
                ...theme.typography.subtitle1,
            },
            [theme.breakpoints.down('sm')]:
            {
                display: 'none',
            }
        },

    }));

const StyledLinks = styled(Link)
    (({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.typography.h5,
        gap: theme.spacing(1),
        color: 'inherit',
        '&:visited': {
            color: '#3399FF',
        },
    }));

// const StyledNavStack = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     position: 'relative',

//     flexGrow: '2',
//     height: '4rem',

//     [theme.breakpoints.up('lg')]: { gap: theme.spacing(2), },
//     [theme.breakpoints.down('sm')]: { gap: theme.spacing(0.5) },
//     '&.b2blight-middle':
//     {
//         justifyContent: 'center',
//         gap: theme.spacing(3),
//         [theme.breakpoints.down('lg')]:
//         {
//             display: 'none',
//         }
//     },
//     '&.b2blight-left': {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         [theme.breakpoints.down('lg')]: {
//             margin: '0 0 0 2rem',
//             gap: theme.spacing(1),
//         },
//         [theme.breakpoints.down('sm')]: {
//             gap: '0.5rem',
//         },
//     },
//     '&.b2blight-right': {
//         display: 'flex',
//         justifyContent: 'flex-end',
//         gap: theme.spacing(3),
//         [theme.breakpoints.down('sm')]: {
//             gap: theme.spacing(1),
//         },
//     }
// }))

const pages = ['Products', 'About Us', 'For Businesses'];
const profileSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings = ['System', 'Brightness', 'Installation'];
const languageMenu = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Marathi'];

function ResponsiveB2BLight() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElBrightness, setAnchorElBrightness] = React.useState(null);
    const [anchorElLang, setAnchorElLang] = React.useState(null);
    const [search, setSearch] = React.useState(false)


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

        <AppBar
            position="static"
            sx={{ height: { xs: '3rem', md: '5rem' } }}
        >
            <Container maxWidth="xl"
                disableGutters
                sx={{ height: 'inherit' }}
            >
                <ModBar disableGutters sx={{ padding: '0.5rem', position: 'relative', height: 'inherit', display: 'flex' }} >
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
                        <IconButton
                            sx={{ height: '5rem', width: '5rem', display: { xs: 'none', md: 'flex' } }}
                            aria-label="logo of B2BLight"
                            aria-controls="menu-appbar"

                            color="inherit"
                        >
                            <InsertPhotoSharpIcon
                                sx={{ height: '100%', width: '100%', mr: 1 }} />
                        </IconButton>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 0.5,
                                display: { xs: 'flex', fontSize: '0.8rem' },
                                fontFamily: 'inherit',
                                fontWeight: 500,

                                color: 'inherit',
                                textDecoration: 'none',

                            }}
                        >
                            {/* NAVBAR TITLE */}
                            B2BLight
                        </Typography>
                    </Box>
                    {/* LOGO AND TITLE */}

                    {/* Large screen Menu */}

                    <Box sx={{ flexGrow: 3, display: { xs: 'none', lg: 'flex', justifyContent: 'flex-end', color: 'inherit', gap: '0.4rem', } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            variant="text"
                            sx={{
                                my: 1,
                                color: 'inherit',
                                display: 'block',
                                textTransform: 'capitalize',
                                letterSpacing: 'none'
                            }}
                        >
                            <Typography variant="h5">Products</Typography>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 1,
                                color: 'inherit',
                                display: 'block',
                                textTransform: 'capitalize',
                                letterSpacing: 'none'
                            }}
                        >
                            <Typography variant="h5">About Us</Typography>
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 1,
                                color: 'inherit',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '6.5rem',
                                gap: '0.5rem',
                                minWidth: 'fit-content',
                                textTransform: 'capitalize',
                            }}
                        >
                            <AtlassianWrapper>
                                <AtlassianSVG />
                            </AtlassianWrapper>
                            <Typography variant="h5">For Businesses</Typography>
                        </Button>

                        {/* Large screen Menu */}

                    </Box>
                    <Box sx={{ flexGrow: 1, display: { lg: 'flex', justifyContent: 'flex-end', color: 'inherit', gap: '0.5rem' } }}>


                    </Box>


                    {/* SEARCH FIELD */}
                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                        gap: { xs: '0.4rem', sm: '1rem' }
                    }}>
                        <StyledButton className="stl-btn"
                            sx={{ p: { xs: '0.2rem', sm: '0.5rem' } }}
                        >
                            <StyledLinks className="stl-btn svgIconCart" href="#"><ShoppingCartRoundedIcon />
                                <Box className="cart-btn">Cart</Box></StyledLinks>
                        </StyledButton>

                        <StyledButton className="stl-btn"
                            sx={{ p: { xs: '0.2rem', sm: '0.5rem' } }}>
                            <StyledLinks className="stl-btn" href="#"> <LoginOutlinedIcon />
                                <Box className="cart-btn">Login</Box></StyledLinks>
                        </StyledButton>

                    </Box>


                    {/* SEARCH FIELD */}



                    {/* SETTINGS MENU */}
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
        </AppBar >

    );
}
export default ResponsiveB2BLight;
