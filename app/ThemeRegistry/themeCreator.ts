import { Theme, createTheme, ThemeOptions } from '@mui/material/styles';
import paletteOne from './paletteOne';
import paletteTwo from './paletteTwo';
import paletteThree from './paletteThree';
import paletteDefault from './paletteDefault';
import shadows from './shadows';

export const themeOptions: ThemeOptions = {
    palette:

    {
        mode: 'light',
        primary: {
            light: '#66B2FF',
            main: '#1769aa',
            dark: '#1a75d2',
        },
        secondary: {
            main: '#6C8EBF',
            light: '#6076b8',
        },
        text: {
            primary: '#000000',

        },
        background: {
            default: '#f5f5f5',
            paper: '#dae8fc',
        },
    },
    shadows: shadows,
};

export const testTheme = createTheme( themeOptions );