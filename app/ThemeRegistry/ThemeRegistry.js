'use client';
import * as React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { createTheme } from '@mui/material/styles';
import theme from './theme';
import { darkTheme, lightTheme } from '../Components/themeToggler';


let defaultTheme = createTheme(theme, {

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

export const ThemeContext = React.createContext();

export default function ThemeRegistry({ children }) {

    const [bright, setbright] = React.useState({ lightTheme })

    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeContext.Provider value={[bright, setbright]}>
                <ThemeProvider theme={defaultTheme}>
                    <CssBaseline />

                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </NextAppDirEmotionCacheProvider>
    );
}