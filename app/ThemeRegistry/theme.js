'use client'
import { Roboto } from 'next/font/google';
import createTheme from '@mui/material/styles/createTheme';
import useTheme from '@mui/material/styles/useTheme';



const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});



const theme = createTheme({

    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',

        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',

        },

        text: {
            primary: '#fff',
        }

    },
});



export const lightTheme = createTheme({


    palette: {
        mode: 'light',
        primary: {
            main: '#00c853',

        },
        secondary: {
            main: '#ff5722',
        },
        background: {
            default: '#03a9f4',
            paper: '#aa00ff',

            myVarient: {
                default: '#3f51b5',
                mypaper: '#673ab7',
            },
            nextVarient: {
                default: '#3f51b2',
                mypaper: '#eeeeee',
            },
        },

        text: {
            primary: '#eee',
        },



    },
    typography: {

        fontSize: 12,
        fontWeight: 300,

    },
});


export default theme;
