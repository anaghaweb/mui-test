'use client'
import theme from '../ThemeRegistry/theme';
import * as React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let lTheme = createTheme(theme, {

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },

    palette: {
        mode: 'light',

    }

});
const lightTheme = responsiveFontSizes(lTheme);

let dTheme = createTheme({

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },

    palette: {
        mode: 'dark',

        action: {
            active: '#2979ff',
            selected: '#2979ff',
            selected: '#2979ff',
        },

        background: {
            default: '#121212',
            paper: '#121212',
        },

        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
    }
});

const darkTheme = responsiveFontSizes(dTheme);

export { darkTheme, lightTheme };