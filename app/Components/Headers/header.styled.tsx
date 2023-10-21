'use client'
import * as React from 'react'
import { AppBar, Box, Container,Typography, Button, Paper, Stack, Input, InputBase } from '@mui/material'
import Image from 'next/image';
import {styled,  useThemeProps,} from '@mui/material/styles';
import { StyledHeaderProps } from './index';
import { Inter } from 'next/font/google';
import { TextField, InputLabel, InputLabelProps } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';


const gridData = [
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor'
]

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

const MainBox = styled(Box, {
    name: 'muiHeaderBox',
    slot: 'root',
})<{ ownerState: StyledHeaderProps }>(({ theme, ownerState }) => ({
    maxWidth: '1440px',
    height: ownerState.variant === 'header1' ? 'calc(100vh - 4rem)' :
            'calc(100vh - 4rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: ownerState.variant !== 'header3' ? 'column' : 'row',
    width: '100%',
    margin: '0 auto', 
    padding:'0 2rem',
    background: theme.palette.mode === 'dark' ? '#212121' : ownerState.variant === 'header1' ? '#fff' : ownerState.variant === 'header2' ? "#fafafa" : '#F1FDDD',
    [theme.breakpoints.down('md')]: {
        flexDirection: ownerState.variant === 'header3' && 'column'  
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection:'column',
         height: ownerState.variant === 'header2' ? 'calc(100vh - 3rem)':'auto',
         justifyContent: ownerState.variant === 'header2' ? 'space-around': 'center',
         padding: '0 0.3rem',       
    }
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
    backgroundColor: 'inherit',
    [theme.breakpoints.up('md')]: {
        width: (ownerState.variant === 'header1' || ownerState.variant === 'header3') ? '40%' :  '100%',
    },
    
    height: 'auto',
    fontFamily: 'var(--font-inter)',

    [theme.breakpoints.down('md')]: {
        width: ownerState.variant === 'header3' ? '100%' :  ownerState.variant === 'header1' ? '50%' : '100%',
        textAlign: ownerState.variant === 'header3' && 'center',
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
        margin: ownerState.variant !=='header1' && 'auto',
        '.mainHeading': theme.palette.mode === 'dark' ? 'inherit' : {
            webkitBackgroundClip: 'text',
            background: '-webkit-linear-gradient(bottom, #555, #000)',
            backgroundClip: 'text',
            color: 'transparent', 
        },
        
        [theme.breakpoints.down('sm')]:{
            fontSize: '1.2rem',
        }, 
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
    backgroundColor:'inherit',
    width: ownerState.variant === 'header2' ? '100%' :  '50%',
    height: ownerState.variant === 'header3' ? 'auto' :'100%',
    // borderRadius: '50%',
     [theme.breakpoints.down('md')]: {
        textAlign: 'center',
         width: ownerState.variant === 'header1' ? '50%' : '100%',
         height: '100%',
         padding:'1rem 1rem'
    },    
    //  form styles
    '.contact-form': {
        borderRadius: '20px 20px 20px 20px',
        width:'20rem',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
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
        margin: '0.5rem 1rem',
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
        alignItems:'center',
        width: '100%',
        height: 'auto',
        rowGap:'1rem',
    },
     [theme.breakpoints.down('md')]: {
        justifyContent: ownerState.variant === 'header3' && 'center',
        textAlign: ownerState.variant === 'header3' && 'center',
    },
    '.btns': {
        padding: '0.7rem 3rem',      
        fontWeight: 'bold',
        textTransform: 'capitalize',
        backgroundColor: '#FF7043',
        color:'#fff',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            fontSize: '12px',
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
                    <Box sx={{ position: 'relative' }}>
                        {ownerState.variant === "header2" ? <Image src="/interamerica_logo.jpeg"
                            style={{ objectFit: 'contain' }} alt="placeholder" width={200} height={75} /> : ""}
                    </Box>
                    {/* <Box>
                        <Typography variant="subtitle1" color="primary" fontWeight='bold' className="landing-caption">
                            {other.caption}
                        </Typography>
                    </Box> */}
                    <Typography component="h1" variant="h3" fontWeight='bold'
                            className="landing-title">
                            
                       <span className="mainHeading"> {title}</span>
                    </Typography>
                    <Box>
                        <Typography component="h1" variant="subtitle2"
                            className="landing-desc"   >
                            {other.description}
                        </Typography>
                    </Box>
                    <StyledHeaderStack direction="row" width="100%" ownerState={ownerState}>
                        <Button variant='contained' className="btns btn1">
                            {ownerState.variant === 'header2' ? 'Get Started' :
                                ownerState.variant === 'header3' ? 'Watch Demo' : 'Get Started'}
                        </Button>
                      <Button variant='outlined' className="btns btn2">
                             {ownerState.variant === 'header3' ? 'Call Us' : 'Sign Up'}
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
        <form noValidate autoComplete="off" onSubmit={handleSubmit}style={{margin:'1rem'}}>
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
                 {ownerState.variant === 'header1' && <Stack width="100%" padding='0 2rem 1rem 2rem' rowGap='1rem'>
                <Typography variant="h6">Trusted by these Networks:</Typography>
                <Grid container columnSpacing={2} columns={24} sx={{ justifyContent: 'center' }}>
                    {gridData.map((data, index) => {
                        return (
                            < Grid xs={12} md={8} lg={3} key={index}
                                sx={{
                                    borderRadius: '0.5rem', margin: "0 0.2rem", background: '#fafafa', fontFamily: "roboto",
                                    color: '#787878', boxShadow: '2px 1px 2px 1px rgba(0, 0, 0, 0.2)'
                                }}>
                                <Typography component="div" variant="h6" textAlign="center" >{data}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>}
                {ownerState.variant === 'header2' && <Stack width="100%" padding='0 2rem 1rem 2rem' rowGap='1rem'>
                <Typography variant="h6">Top Customer Reviews:</Typography>
                <Grid container columnSpacing={2} columns={24} sx={{ justifyContent: 'center' }}>
                    {gridData.map((data, index) => {
                        return (
                            < Grid xs={6} md={3} lg={3} key={index}
                                sx={{
                                    borderRadius: '0.5rem', margin: "0 0.2rem", background: '#fafafa', fontFamily: "roboto",
                                    color: '#787878', boxShadow: '2px 1px 2px 1px rgba(0, 0, 0, 0.2)'
                                }}>
                                
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>}
            </MainBox>
           
        </React.Fragment>
    )
})
