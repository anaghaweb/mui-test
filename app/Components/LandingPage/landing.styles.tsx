'use client'
import { Container, Paper, TextField, Box } from "@mui/material";
import {styled, Theme} from "@mui/material/styles"

export const StyledTextField = styled(TextField)(({ theme }:{theme:Theme}) => ({
    
    '&.field': {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        display:'block'
    }

}))

export const ContactLogoWrapper = styled(Paper)(({ theme }) => ({
    
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'50%',
    padding: '1rem',
    
}))

export const ContactsWrapper = styled(Paper)(({ theme }) => ({
    
    display: 'flex', 
    flexDirection:'column',
    flexGrow: 1,
    justifyContent: 'flex-start',
     flexBasis:'100%',
    alignItems: 'center',
     height: '30rem',
    padding: '1rem',
    fontFamily: 'monospace',
     lineHeight:'0.4rem',
}))

export const ContactFormWrapper = styled(Paper)(({ theme }) => ({
    
    display: 'flex', 
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    padding: '1rem',
    height: '30rem',
}))

export const LandingWrapper = styled(Box)(({ theme }) => ({
    
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    margin: 'auto',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
         flexDirection:'column'
     }
}))