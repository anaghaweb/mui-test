'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { alpha, getContrastRatio } from '@mui/material/styles';
const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

let baseNavbarTheme = createTheme({

    breakpoints: {
        values: {
            xs: 0,
            sm: 522,
            md: 767,
            lg: 1023,
            xl: 1536,
        }
    },

    palette: {
        mode: 'light',
        spacing: 2,
        primary: {
            main: '#ffffff',
            contrastText: '#616161',
        },
        secondary: {
            main: '#0288d1',
            contrastText: '#ffffff',
        },
        background: {
            default: '#192231',
            paper: '#ffffff',

        },
        text: {
            primary: '#212121',
            secondary: '#212121',
        },

        warning: {
            main: '#fffffe'
        },
        ochre: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',

        },
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: '#ffffff',
        },

    },
});

baseNavbarTheme = responsiveFontSizes(baseNavbarTheme)

export default baseNavbarTheme;