'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let ReharvestnavbarTheme = createTheme({

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

ReharvestnavbarTheme = responsiveFontSizes(ReharvestnavbarTheme)

export default ReharvestnavbarTheme;