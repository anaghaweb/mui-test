'use client'
import * as React from 'react'
import { AppBar, Box, Container, Grid, Typography, Button, Paper, Stack } from '@mui/material'
import Image from 'next/image';
import {styled,  useThemeProps,} from '@mui/material/styles';
import { StyledHeaderProps } from './index';
import { Inter } from 'next/font/google';
import { TextField } from '@mui/material';


const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

const MainBox = styled(Box, {
    name: 'muiHeaderBox',
    slot: 'root',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    maxWidth: '1440px',
    height: 'calc(100vh - 4rem)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: ownerState.variant === 'header2' ? 'column' : 'row',
    width: '100%',
    margin: '0 auto', 
    background: theme.palette.mode === 'dark' ? '#191919' : ownerState.variant === 'header1' ? '#cee3c8' : ownerState.variant === 'header2' ? "#e8eaf1" : '#F1FDDD',
    [theme.breakpoints.down('md')]: {
        flexDirection: ownerState.variant === 'header3' && 'column'  

    },
    [theme.breakpoints.down('sm')]: {
         flexDirection: 'column',
         height: ownerState.variant === 'header2' ? 'calc(100vh - 3rem)':'auto',
         justifyContent: ownerState.variant === 'header2' ? 'space-around': 'center',
         padding: '0.2rem',       
    }
}));

const StyledLeftBox = styled(Box, {
    name: 'muiHeaderBox',
    slot: 'title',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: ownerState.variant === 'header2' ? 'center' : 'flex-start',
    textAlign: ownerState.variant === 'header2' ? 'center' : 'left',
    rowGap: '1rem',
    padding: '2rem',
    backgroundColor:'inherit',
    width: ownerState.variant === 'header2' ? '70%' : '50%',
    height: ownerState.variant === 'header3' ? 'auto' :'100%',
    fontFamily: 'var(--font-inter)',
    [theme.breakpoints.down('md')]: {
        width: ownerState.variant === 'header3' && '100%',
        textAlign: ownerState.variant === 'header3' && 'center',
    },
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
        padding:'0 0.2rem'
    },    
    '.landing-caption': {
        fontSize: ownerState.variant === 'header2' ? '1.2rem' : '1.5rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1rem' 
        }
    },
    '.landing-title': {
        [theme.breakpoints.down('sm')]:{
            fontSize: ownerState.variant === 'header2'? '2rem' : '1.3rem',
        },       
        fontFamily: 'var(--font-inter)',
        fontWeight: '800',
        color: theme.palette.mode === 'dark' ? 'inherit' : '#303030',
    },
    '.landing-desc': {
        fontSize: '16px',
        letterSpacing: '0',
        color:theme.palette.mode === 'dark' ? 'inherit' : '#666666',
    }
}));

const StyledRightBox = styled(Box)<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    display: ownerState.variant === 'header2' ? 'none' : 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    rowGap: '1rem',
    padding: '1rem',
    backgroundColor:'inherit',
    width: ownerState.variant === 'header2' ? '100%' :  '50%',
    height: ownerState.variant === 'header3' ? 'auto' :'100%',
    // borderRadius: '50%',
     [theme.breakpoints.down('md')]: {
        textAlign: 'center',
         width: '100%',
         height: '100%',
         padding:'1rem 0.2rem'
    },  
    
    //  form styles
    '.contact-form': {
        padding: '1rem 1rem',
        width: '40ch',
         borderRadius: '20px 20px 20px 20px',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        },
        background:theme.palette.mode === 'dark' ? 'inherit' : '#ededed',
    },
    '.form-button': {
        borderRadius: '50px 50px 50px 50px',
        backgroundColor: theme.palette.mode === 'dark' ? 'inherit' : '#273a56',
        color: theme.palette.mode === 'dark' ? 'inherit' : '#fff',
        fontWight: '500',
        fontSize:'1rem',
    },
   
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
    backgroundColor:'inherit',
    [theme.breakpoints.down('md')]: {
        objectFit: 'scale-down',
        height:ownerState.variant === 'header3' ? "100%" : '15rem',
    }   
}));

const StyledHeaderStack = styled(Stack)<{ ownerState: StyledHeaderProps }>(({theme, ownerState})=>({
    justifyContent: ownerState.variant === 'header2' ? 'center' : 'flex-start',
    columnGap:'2rem',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems:'center',
        width: '100%',
        height: 'auto',
        rowGap:'1rem',
    },
     [theme.breakpoints.down('md')]: {
        justifyContent: ownerState.variant === 'header3' && 'center',
        textAlign: ownerState.variant === 'header3' && 'center',
    },
    '.btn1': {
        padding: '0.4rem 1.5rem',      
        fontWeight: 'bold',
        textTransform: 'capitalize', 
        borderRadius:'5%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '12px',
        },     
    },   
}));

const StyledTextField = styled(TextField)(({ theme }) => ({  
    display: 'flex',
    background: 'inherit',
    margin:'0.5rem 0.5rem',
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
                <StyledLeftBox ownerState={ownerState}>
                    <Box sx={{ position: 'relative' }}>
                        {ownerState.variant === "header2" ? <Image src="/interamerica_logo.jpeg"
                            style={{ objectFit: 'contain' }} alt="placeholder" width={200} height={75} /> : ""}
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" color="primary" fontWeight='bold' className="landing-caption">
                            {other.caption}
                        </Typography>
                    </Box>
                    <Typography component="h1" variant="h3" fontWeight='bold'
                        className="landing-title">
                        {title}
                    </Typography>
                    <Box>
                        <Typography component="h1" variant="subtitle2"
                            className="landing-desc"   >
                            {other.description}
                        </Typography>
                    </Box>
                    <StyledHeaderStack direction="row" width="100%" ownerState={ownerState}>
                        <Button variant='contained' className="btn1">
                            {ownerState.variant === 'header2' ? 'Get Started' :
                            ownerState.variant === 'header3' ? 'Watch Demo' : 'Try for Free'}
                            
                        </Button>
                        <Button variant='outlined' className="btn1">
                             {ownerState.variant === 'header3' ? 'Call Us' : 'Sign Up'}
                        </Button>
                    </StyledHeaderStack>
                </StyledLeftBox>
                
                {/* Header 2 Unit */}
                <StyledRightBox ownerState={ownerState}>
                    <StyledPaper ownerState={ownerState} elevation={0} >
                        {ownerState.variant === "header1" ?
                            (<Image src="/landingPageImage.png"
                                style={{ objectFit: 'cover' }} alt="placeholder" fill />)
                            : ownerState.variant === "header3" ?     
                    
                                (<>
                                    <Container className="contact-form" sx={{ my: '0.5rem', fontFamily: "monospace" }}>

             <form noValidate autoComplete="off" onSubmit={handleSubmit} className="form">
            <Typography component="h1" variant='body1'>Start With a free 30 day trial of our services</Typography>
            <Box className="form-group">
                <StyledTextField
                                        label="First Name"
                                        name="firstname"
                                        placeholder="First Name"
                                        fullWidth
                                        required
                                        className="field"
                                        type="text" id="firstname" value={name}
            
                                    />
                                </Box>
                                <Box className="form-group">
                                    <StyledTextField
                                        label="Last Name"
                                        name="lastname"
                                        placeholder="Last Name"
                                        fullWidth
                                        required
                                        className="field"
                                        type="text" id="lastname" value={name}
                                    />
                                </Box>
                                <Box className="form-group">
                                    <StyledTextField
                                        type="email"
                                        id="email"
                                        label="Email ID"
                                        placeholder="Email ID"
                                        name="email"
                                        value={name}
                                                    required
                                                    fullWidth
                                        className="field"
            
                                    />
                                </Box>
                                <Box className="form-group">
                                    <StyledTextField
                                        type="text"
                                        id="contact"
                                        label="Subject"
                                        placeholder="Subject Title"
                                        value={name}
                                        className="field"
                                        fullWidth
                                    />
                                </Box>
                                <Box className="form-group">
                                    <StyledTextField
                                        id="message"
                                        value={name}
                                        label="Your Message"
                                        name="contactForm"
                                        placeholder="your message here"            
                                        className="field"
                                        fullWidth
                                    />
                                </Box>
                                <Button type="submit" variant="outlined" style={{ display: 'flex', width: '100%' }} className="form-button">
                                    Start my free Trial
                                </Button>
                            </form>
                                    </Container>
                            </>)
                        : ""}

                        
                    </StyledPaper>
                </StyledRightBox>
            </MainBox>
        </React.Fragment>
    )
})
