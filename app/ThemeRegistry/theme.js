'use client'
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({

    palette: {
        background: {
            paper: '#cfd0f3',
            dark: '#2b3844'
        },
        text: {
            primary: '#ffffff',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            main: '#009686',
            dark: '#009688',
        },

        secondary: {
            main: '#eeeeee',
            dark: '#009688',
        },
    },
});




export default theme;