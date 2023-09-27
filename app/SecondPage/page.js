import * as React from 'react'
import Paper from '@mui/material/Paper'
import baseNavbarTheme from '../CustomNavbars/baseNavbar/baseNavbarTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import BaseNavbar from '../CustomNavbars/baseNavbar/baseNavbar';


const SecondPage = () => {



    return <Paper sx={{ height: '100vh', padding: '4' }}>
        <ThemeProvider theme={baseNavbarTheme}>
            <BaseNavbar />

        </ThemeProvider>
    </Paper>

}

export default SecondPage;