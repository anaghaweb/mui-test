import * as React from 'react'
import LandingPage from '../Components/LandingPage'
import { Container, Box, Paper } from '../Components/LandingPage/Mui-components'

export default function Landing() {
    return (
        <main
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f1f1f1',
                width: '100%',

            }}>
            <LandingPage />

        </main>
    )
}
