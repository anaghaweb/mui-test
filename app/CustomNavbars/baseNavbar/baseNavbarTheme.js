'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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

        },
        background: {
            default: '#192231',
            paper: '#ffffff',
            contrastText: '#616161',
        },
        text: {
            primary: '#0288d1',
            secondary: '#212121',
        }
    },
});

baseNavbarTheme = responsiveFontSizes(baseNavbarTheme)

export default baseNavbarTheme;