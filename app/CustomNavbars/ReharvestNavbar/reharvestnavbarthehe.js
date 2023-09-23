'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let ReharvestnavbarTheme = createTheme({
    palette: {

        mode: 'light',
        primary: {
            main: '#FFE6CC',
            contrastText: '#212121',
        },
        secondary: {
            main: '#6A9153',
        },
        background: {
            default: '#192231',
            paper: '#FFE6CC',
        },
        text: {
            primary: '#6A9153',
            secondary: '#212121',
        }
    },
});

ReharvestnavbarTheme = responsiveFontSizes(ReharvestnavbarTheme)

export default ReharvestnavbarTheme;