'use client'
import * as React from 'react'
import { Box, Container,Typography, Button, Paper, Stack } from '@mui/material'
import Image from 'next/image';
import {styled,  useThemeProps,} from '@mui/material/styles';
import { StyledHeaderProps } from './index';
import { Inter } from 'next/font/google';
import { TextField} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import PricingTemplate from './pricing';

const gridData = [
    '/logoipsumPNG.png',
    '/logoipsumPNG.png',
    '/logoipsumPNG.png',
    '/logoipsumPNG.png',
    '/logoipsumPNG.png',
    '/logoipsumPNG.png'
]

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

const MainBox = styled(Box, {
    name: 'muiHeaderBox',
    slot: 'root',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    maxWidth: '1440px',
    height: 'calc(100vh - 3rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'column',
    width: '100%',
    margin: '0 auto', 
    padding:'0 2rem',
    background: theme.palette.mode === 'dark' ? '#212121' : ownerState.variant === 'header1' ? '#fff' : ownerState.variant === 'header2' ? "#fafafa" : '#fff',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        padding: '0.5rem'
    },
}));

const StyledLeftBox = styled(Box, {
    name: 'muiHeaderBox',
    slot: 'title',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: ownerState.variant === 'header2' ? 'center' : 'flex-start',
    textAlign: ownerState.variant === 'header2' ? 'center' : 'left',
    rowGap: '1rem',
    padding:'0.1rem',
    backgroundColor: 'inherit',
    [theme.breakpoints.up('md')]: {
        width: (ownerState.variant === 'header1' || ownerState.variant === 'header3') ? '40%' :  '100%',
    },
    
    height: 'auto',
    fontFamily: 'var(--font-inter)',

    [theme.breakpoints.down('md')]: {
        width: ownerState.variant === 'header3' ? '100%' :  ownerState.variant === 'header1' ? '50%' : '100%',
        textAlign: ownerState.variant === 'header3' && 'center',
        margin:'1rem auto',
    },
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
        padding:'0 0.2rem'
    },    
    '.landing-caption': {
        fontSize: ownerState.variant === 'header2' ? '1.2rem' : '1.1rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.8rem' 
        }
    },
    '.landing-title': {    
        fontFamily: 'var(--font-inter)',
        fontWeight: '900',
        letterSpacing: '0',
        fontSize: '40px',
        margin: ownerState.variant !== 'header1' && 'auto',

        '.mainHeading':{
            ...theme.palette.mode !== 'dark' && {
                webkitBackgroundClip: 'text',
                background: '-webkit-linear-gradient(bottom, #555, #000)',
                backgroundClip: 'text',
                color: 'transparent',
            },               
    },     
        [theme.breakpoints.down('sm')]:{
            fontSize: '3rem',
        }, 
        
    },
    '.landing-desc': {
        fontSize: '16px',
        letterSpacing: '0',
        color:theme.palette.mode === 'dark' ? 'inherit' : '#666666',
    },
}));

const StyledRightBox = styled(Box)<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    display: ownerState.variant === 'header2' ? 'none' : 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',   
    backgroundColor:'inherit',
    width: ownerState.variant === 'header2' ? '100%' :  '50%',
    height: ownerState.variant === 'header3' ? 'auto' :'100%',
    // borderRadius: '50%',
     [theme.breakpoints.down('md')]: {
        textAlign: 'center',
         width: ownerState.variant === 'header1' ? '50%' : '100%',
         height: '100%',
         padding:'1rem 0'
    },    
    //  form styles
    '.contact-form': {
        borderRadius: '20px 20px 20px 20px',
        width:'20rem',
        [theme.breakpoints.down('sm')]:{
            width:'30ch'
        },    
    },
    '.form-button': {
        borderRadius: '50px 50px 50px 50px',
        backgroundColor: theme.palette.mode === 'dark' ? 'inherit' : '#273A56',
        color: theme.palette.mode === 'dark' ? 'inherit' : '#fff',
        fontWight: '500',
        fontSize:'1rem',
    },
    '.form-container': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25rem',
        borderRadius:'20px 20px 20px 20px',
        
        [theme.breakpoints.down('sm')]: {
            width:'100%'
        },
    },
    '.form-group': {
        margin: '0.5rem 0',
    },
    '.MuiInputBase-input': {
        background: '#FFF',
    },
    'label': {
        color:'#000'
    },
  '& .Mui-focused':{
     color: '#000'
    },

}));

const StyledPaper = styled(Paper, {
    name: 'muiHeaderBox',
    slot: 'image',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    display: ownerState.variant === "header2" ? 'none' : 'block',
    position: 'relative',
    height: '100%',
    width: '100%',
    margin: 'auto auto',
    backgroundColor:'inherit',
    [theme.breakpoints.down('md')]: {
        objectFit: 'scale-down',
        height:ownerState.variant === 'header3' ? "100%" : '20rem',
    },
     [theme.breakpoints.down('sm')]: {  
       display:ownerState.variant === 'header3' ? 'block' : 'none',
    }   
}));

const StyledHeaderStack = styled(Stack)<{ ownerState: StyledHeaderProps }>(({theme, ownerState})=>({
    justifyContent: ownerState.variant === 'header2' ? 'center' : 'flex-start',
    columnGap:'1rem',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        height: 'auto',       
    },
     [theme.breakpoints.down('md')]: {
        justifyContent: ownerState.variant === 'header3' && 'center',
         textAlign: ownerState.variant === 'header3' && 'center',
        rowGap:'1rem',
    },
    '.btns': {
        padding: '12px 16px',      
        fontWeight: 'bold',
        textTransform: 'capitalize',
        backgroundColor: (ownerState.variant === 'header1' && theme.palette.mode !=='dark') ? '#FF7043' :
            (ownerState.variant === 'header2' && theme.palette.mode !== 'dark') ? '#1976D2' :
                (ownerState.variant === 'header3' && theme.palette.mode !=='dark') ? "#00AD6F" : 'inherit',
        color: '#fff',
        [theme.breakpoints.down('md')]: {
            padding:'0.5rem 2rem',
            fontSize: '1rem',
        },  
        ':hover': {
            backgroundColor: '#fff',
            color:'#000',
        },        
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },     
    },   
}));
const MainStack = styled(Stack)<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    flexGrow:'1',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: ownerState.variant === 'header3' && 'column',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    }
}))

export const Headers = React.forwardRef<HTMLElement, StyledHeaderProps>(function Headers(inProps, ref,) {
    const props = useThemeProps({ props: inProps, name: 'muiHeaderBox' });
    const { variant, image, title, ...other } = props;
    const ownerState = { ...props, variant };
    const [name, setName] = React.useState<string>('');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    
    return (
        <React.Fragment>
            {/* Hero Unit */}
            <MainBox ref={ref} ownerState={ownerState} {...other} className={`${inter.variable}`}>
                {/* Hero Sub Unit 1 */}
                <MainStack ownerState={ownerState} >
                <StyledLeftBox ownerState={ownerState}>
                
                    {/* <Box>
                        <Typography variant="subtitle1" color="primary" fontWeight='bold' className="landing-caption">
                            {other.caption}
                        </Typography>
                    </Box> */}
                    <Typography component="h1" variant="h3" fontWeight='bold'
                            className="landing-title"
                            // sx={{ '&.active': { backgroundColor: '#3399FF' } }}
                        >
                            
                       <span className="mainHeading"> {title}</span>
                    </Typography>
                    <Box>
                        <Typography component="h1" variant="subtitle2"
                            className="landing-desc">
                            {other.description}
                        </Typography>
                    </Box>
                    <StyledHeaderStack direction="row" width="100%" ownerState={ownerState}>
                        <Button variant='outlined' className="btns btn1">
                            {ownerState.variant === 'header2' ? 'Browse Templates' :
                                ownerState.variant === 'header3' ? 'View Pages' : 'Try Demo'}
                        </Button>
                      <Button variant='outlined' className="btns btn2">
                             Sign Up
                        </Button>
                       
                    </StyledHeaderStack>
                </StyledLeftBox>
                
                {/* Header 2 Unit */}
                <StyledRightBox ownerState={ownerState}>
                    <StyledPaper ownerState={ownerState} elevation={0} >
                        {ownerState.variant === "header1" ?
                            (<Image src="/webdesign2bg.png"
                                style={{ objectFit: 'contain' }} alt="placeholder" sizes="100vw" fill />)
                            : ownerState.variant === "header3" ?     
                    
                            (<React.Fragment>
    <Container className="form-container">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}style={{margin:'0.5rem'}}>
            <Typography component="h1" variant='h5'>Start With a free 30 day trial of our services</Typography>
            <Box className="form-group">
            <TextField
                        label="First Name"
                        name="firstname"
                        placeholder="First Name"
                        fullWidth
                        required
                        className="field"
                                                       
                        type="text" id="firstname"/>
                        </Box>
            <Box className="form-group">
                       <TextField
                       label="Last Name"
                       name="lastname"
                        placeholder="Last Name"
                        fullWidth
                        required
                        className="field"
                        type="text" id="lastname" />
                        </Box>
                        <Box className="form-group">
                    <TextField
                        type="email"
                         id="email"
                         label="Email ID"
                         placeholder="Email ID"
                         name="email"
                         required
                         fullWidth
                         className="field"/>
                        </Box>
                        <Box className="form-group">
                    <TextField
                        type="text"
                        id="contact"
                        label="Subject"
                        placeholder="Subject Title"
                        className="field"
                        fullWidth/>
                                </Box>
                        <Box className="form-group">
                        <TextField
                         id="message"
                        label="Your Message"
                         name="contactForm"
                        placeholder="your message here"            
                        className="field"
                        fullWidth
                        />
                         </Box>
                    <Button type="submit" variant="outlined"
                style={{ display: 'flex', width: '100%' }} className="form-button">
                                Start my free Trial
             </Button>
        </form>
                        </Container>
                        </React.Fragment>)
                        : ""}                      
                    </StyledPaper>
                    </StyledRightBox>
                    </MainStack>
                 {ownerState.variant === 'header1' && 
                 <Stack width="100%" padding='0 1rem' rowGap='1rem' sx={{height:{sm:'auto', md:'20vh'}}}>
                <Typography variant="h6">Trusted by these Networks:</Typography>
                        <Grid sx={{ flexGrow: 1 }} container spacing={2} columns={24}>
                            
                    {gridData.map((data, index) => {
                        return (
                            < Grid xs={8} md={4} lg={4} key={index}> 
                                <Image src={data} width={80} height={40}  sizes="100vw" style={{ objectFit: 'scale-down' }} alt="placeholder" /></Grid>
                        )
                    })}
                </Grid>
            </Stack>}
                {ownerState.variant === 'header2' && <Stack>
                    <Typography variant="h6" textAlign="center">Check out our Pricing Plans:</Typography>
                    <PricingTemplate /></Stack>}
            </MainBox>
           
        </React.Fragment>
    )
})
