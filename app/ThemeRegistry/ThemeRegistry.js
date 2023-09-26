'use client';
import * as React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';
import { useThemeContext, useThemeContextUpdater } from '../Components/navbar';


export default function ThemeRegistry({ children }) {

    const CustomTheme = useThemeContext();


    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>

            <ThemeProvider theme={CustomTheme || theme}>
                <CssBaseline />

                {children}
            </ThemeProvider>

        </NextAppDirEmotionCacheProvider>
    );
}