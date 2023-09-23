'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let baseNavbarTheme = createTheme({
    palette: {
        mode: 'light',
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
        },
        text: {
            primary: '#0288d1',
            secondary: '#212121',
        }
    },
});

baseNavbarTheme = responsiveFontSizes(baseNavbarTheme)

export default baseNavbarTheme;