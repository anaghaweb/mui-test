'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let EcoboNavbarTheme = createTheme({
    palette: {

        mode: 'light',
        primary: {
            main: '#D5E8D4',
            contrastText: '#212121',
        },
        secondary: {
            main: '#6A9153',
        },
        background: {
            default: '#192231',
            paper: '#D5E8D4',
        },
        text: {
            primary: '#6A9153',
            secondary: '#212121',
        }
    },
});

EcoboNavbarTheme = responsiveFontSizes(EcoboNavbarTheme)

export default EcoboNavbarTheme;