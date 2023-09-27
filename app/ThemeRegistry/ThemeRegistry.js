'use client';
import * as React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';


export default function ThemeRegistry({ children }) {

    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>

            <ThemeProvider theme={theme}>
                <CssBaseline />

                {children}
            </ThemeProvider>

        </NextAppDirEmotionCacheProvider>
    );
}