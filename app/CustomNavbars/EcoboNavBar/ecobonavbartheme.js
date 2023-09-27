'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let EcoboNavbarTheme = createTheme({
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
            main: '#D5E8D4',
            contrastText: '#6A9153',
        },
        secondary: {
            main: '#0288d1',
            contrastText: '#ffffff',
        },
        background: {
            default: '#192231',
            paper: '#ffffff',

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

        text: {
            secondary: '#787878',
        }

    },
});

EcoboNavbarTheme = responsiveFontSizes(EcoboNavbarTheme)

export default EcoboNavbarTheme;