'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import theme from '@/app/ThemeRegistry/theme';

let gradientThemePink = createTheme(theme, {

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1023,
            xl: 1536,
        }
    },

    palette: {
        spacing: 1,
    },
});

gradientThemePink = responsiveFontSizes(gradientThemePink, 3)

export default gradientThemePink;