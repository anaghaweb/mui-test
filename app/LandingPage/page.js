import * as React from 'react'
import LandingPage from '../Components/LandingPage'

import { Container, Box } from '../Components/LandingPage/Mui-components'


export default function Landing() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f1f1f1',
                width: '100%',
                height: '100%',
                padding: '1rem'
            }}>
            <LandingPage

            />

        </Box>
    )
}
