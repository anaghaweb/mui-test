'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import theme from '@/app/ThemeRegistry/theme';

let EcoboNavbarTheme = createTheme(theme, {

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
        spacing: 2,
    },
});
EcoboNavbarTheme = responsiveFontSizes(EcoboNavbarTheme, 2)

export default EcoboNavbarTheme;