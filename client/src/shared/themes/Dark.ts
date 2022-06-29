import { createTheme } from '@mui/material/styles';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#8b9dc3',
            dark: '#212121',
            light: '#dfe3ee',
            contrastText: '#dfe3ee'
        },
        secondary: {
            main: '#f0f0f0',
            dark: '#cfaea5',
            light: '#cfaea5',
            contrastText: '#dfe3ee'
        },
        background: {
            paper: '#8b9dc3',
            default: '#3b5998'
        },
    },
    typography: {
        allVariants: {
            color: '#dfe3ee',
        },
    },
});