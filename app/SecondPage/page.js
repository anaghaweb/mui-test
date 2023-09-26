import * as React from 'react'
import Paper from '@mui/material/Paper'
import baseNavbarTheme from '../CustomNavbars/baseNavbar/baseNavbarTheme'
import BasicNavbar from '../CustomComponents/MuiBasicNavbarTemplate'
import ThemeProvider from '@mui/material/styles/ThemeProvider';


const SecondPage = ({ props }) => {



    return <Paper sx={{ height: '100vh', padding: '4' }}>
        <ThemeProvider theme={baseNavbarTheme}>
            <BasicNavbar title="Test NavBar" variant="blue" />
        </ThemeProvider>
    </Paper>

}

export default SecondPage;