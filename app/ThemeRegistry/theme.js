'use client'

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({

    palette: {
        mode: 'light',
    },
});

theme = responsiveFontSizes(theme);
export default theme;









