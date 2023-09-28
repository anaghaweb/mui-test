'use client'

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';




let theme = createTheme({

    palette: {

        mode: 'light',

    },
});

theme = responsiveFontSizes(theme);
export default theme;









