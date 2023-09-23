'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';



let theme = createTheme({
    palette: {
        primary: {
            main: '#3152B6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;



