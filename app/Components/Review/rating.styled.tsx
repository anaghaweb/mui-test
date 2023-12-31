import { styled, createTheme , ThemeOptions, responsiveFontSizes} from '@mui/material/styles';
import { Rating, Stack, Avatar, Paper } from '@mui/material';


// let MyTheme:ThemeOptions = createTheme({
//     components: {
//     MuiRating: {
//         styleOverrides: {
        
//         root:{
//             fontSize: '3rem',      
//           },
        
          
//         // iconFilled: {

//         // },
//         // iconEmpty: {
                      
//         // },
//       },
//     },
//   },
// });

let defaultTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'light',    
    primary: {
      light: '#DAE8FC',
      main: '#1976d2',
      dark: '#66B2FF',
    },
    secondary: {
      main: '#6C8EBF',
    },
    text: {
        primary: '#000000',  
        secondary: '#000001',
        disabled:'#191919',
    },   
    background: {
      default: '#f5f5f5',
      paper: '#DAE8FC',
        },
    divider: '#6C8EBF',
  },
})

export const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 48,
    height: 48,
    backgroundColor: 'transparent',
    color: `${theme.palette.text.primary}`,
    display:'flex' 
}));

export const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconFilled': {
          color: `${theme.palette.primary.dark}`,
    },    
}));

export const MainStar = styled(Rating)(({ theme }) => ({
 
   '& .MuiRating-icon': {
    color: `${theme.palette.secondary.dark}`,
  },
  
  '& .MuiRating-iconEmpty':{
     color: `${theme.palette.secondary.dark}`,
   }, 
   '& .MuiSvgIcon-root': {
     fontSize: '3.2rem',
    }
   
}));

export const SmallStars= styled(Rating)(({ theme }) => ({
   '& .MuiRating-icon': {
    color: `${theme.palette.secondary.dark}`,
  },
  '& .MuiRating-iconEmpty':{
     color: `${theme.palette.secondary.dark}`,
   },
   '& .MuiSvgIcon-root': {
    fontSize: '2.3rem',
     width:'2rem'
  },
  
}));

export const ReviewBox = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    width: '193px',
    height: '180px',
    backgroundColor: `${theme.palette.primary.light}`,
    border: `3px solid ${theme.palette.primary.dark}`,   
    '&.customer-review': {
    background: `${theme.palette.primary.contrastText}`,      
  },
    
}));

export const CustomerReviewBox = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    width: '179px',
    height: '160px',
    backgroundColor: "#DAE8FC",
    border: `3px solid ${theme.palette.divider}`,    
    '&.customer-review': {
        background: `${theme.palette.primary.contrastText}`,      
  },
    
}));

export const InnerStack = styled(Stack)(({ theme }) => ({

border:"1px solid #6C8EBF",
backgroundColor:`${theme.palette.primary.dark}`,
height: "80px",
width:"163px",
minWidth:"163px",
alignItems:"center",
justifyContent:"center",
verticalAlign: 'center',
position:'relative'
}))



export{ defaultTheme};