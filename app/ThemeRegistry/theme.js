import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ff00ff',
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 12,
    },

});

export default theme;