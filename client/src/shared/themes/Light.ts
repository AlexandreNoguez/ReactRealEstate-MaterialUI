import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ece0d1',
            dark: '#3f4a66',
            light: '#fff',
            contrastText: '#551111'
        },
        secondary: {
            main: '#B38864',
            dark: '#B38864',
            light: '#B38864',
            contrastText: '#551111'
        },
        background: {
            paper: '#ece0d1',
            default: '#dbc1ac'
        },
    },
    typography: {
        allVariants: {
            color: '#551111',

        }
    },
});