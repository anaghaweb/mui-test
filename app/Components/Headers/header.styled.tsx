'use client'
import * as React from 'react'
import { AppBar, Box, Container, Grid, Typography, Button, Paper, Stack } from '@mui/material'
import Image from 'next/image';
import {styled,  useThemeProps, Theme} from '@mui/material/styles';
import { StyledHeaderProps } from './index';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets:['latin'], variable:"--font-inter"})

const MainBox = styled(Box, {
    name: 'muiHeaderBox',
    slot: 'root',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    maxWidth: '1440px',
    height: 'calc(100vh - 4rem)',
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    alignItems: 'center',
    background: `${theme.palette.mode === 'dark'? '#191919' : '#fff'}`,
    fontFamily:'var(--font-inter)',
     [theme.breakpoints.down('md')]: {
         flexDirection: 'column',
         height: 'auto',
         justifyContent: 'center',
        padding:'0.2rem' 
    }
}));

const StyledPaper = styled(Paper, {
    name: 'muiHeaderBox',
    slot: 'image',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    display: ownerState.variant === "header2" ? 'none' : 'block',
    object:'contained',
    position: 'relative',
    height: '75%',
    width: '100%',
    margin: 'auto auto',
    [theme.breakpoints.down('sm')]: {
        objectFit: 'scale-down',
        height:'15rem',
    }
    
}));

const StyledLeftBox = styled(Box, {
    name: 'muiHeaderBox',
    slot: 'title',
})<{ ownerState?: StyledHeaderProps }>(({ theme, ownerState }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: '1rem',
    padding: '2rem',
    width: '50%',
    height: '75%',
    fontFamily:'var(--font-inter)',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
        padding:'0.1rem'
    },
    
}));

const StyledRightBox = styled(Box)<{ ownerState?: StyledHeaderProps }>(({ theme, ownerState }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '1rem',
    padding: '1rem',
    width: '50%',
    height: '100%',
    // borderRadius: '50%',
     [theme.breakpoints.down('md')]: {
        textAlign: 'center',
         width: '100%',
         height: '100%',
        padding:'0.1rem'
    },    
    
}));

const StyledHeaderStack = styled(Stack)(({theme})=>({
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        width:'100%'
    },
    '.btn1': {
        padding: '0.5rem 1.5rem',
        display: 'flex',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'capitalize',        
        [theme.breakpoints.down('sm')]: {
            width:'50%'
        }
       }
}));


export const Headers = React.forwardRef<HTMLElement, StyledHeaderProps>(function Headers(inProps, ref,) {
    const props = useThemeProps({ props: inProps, name: 'muiHeaderBox' });
    const { variant, image, title, ...other } = props;
    const ownerState = { ...props, variant };
    return (
        <React.Fragment>
            <MainBox ref={ref} ownerState={ownerState} {...other} className={`${inter.variable}`}>
                {/* Hero Unit */}
                {/* HeroSubUnit 2*/}
                <StyledLeftBox >
                    <Box>
                        <Typography variant="subtitle1" color="primary"
                         fontWeight='bold'>
                        {other.caption}
                    </Typography>
                    </Box>
                    <Typography component="h1" variant="h3" color="inherit" fontWeight='bold'>
                        {title}
                    </Typography>
                    <Box>
                    <Typography component="h1" variant="h6" color="inherit" >
                        {other.description}
                        </Typography>
                    </Box>
                    <StyledHeaderStack direction="row" spacing={2} width="100%" 
                       
                    >
                    <Button variant='contained' color="primary" 
                            className="btn1"
                        >Try Now</Button>
                        <Button variant='outlined'
                            
                            className="btn1"
                        >Sign Up</Button>
                    </StyledHeaderStack>
                </StyledLeftBox>
                {/* HeroSubUnit 2 */}
                <StyledRightBox>
                    <StyledPaper ownerState={ownerState} elevation={0} >
                       {ownerState.variant === "header1"? <img src="/Header1unsplash.jpg"
                            style={{width:'100%', height:'100%', objectFit:'cover'}}
                            alt="placeholder"
                            
                        /> : ""} 
                    </StyledPaper>
                </StyledRightBox>
            </MainBox>
        </React.Fragment>
    )
})