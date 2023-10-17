'use client'
import * as React from 'react'
import { useState } from "react";
import { Stack, Box, Paper, Typography, Rating } from '@mui/material';
import { styled, ThemeProvider, useThemeProps } from '@mui/material/styles';
import { SmallAvatar, StyledRating, MainStar, ReviewBox, CustomerReviewBox, defaultTheme, InnerStack, SmallStars} from './rating.styled';
import PropTypes from 'prop-types';
import { MdOutlineStarRate, MdStarBorderPurple500, MdStarRate, MdOutlineStarBorder, MdStarBorder, MdStar } from 'react-icons/md';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';


import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme as MuiTheme,
} from '@mui/material/styles';

export interface MuiRatingProps {
    variant?: 'blue' | 'red' | '';
}
interface MuiCustomRatingProps extends MuiRatingProps{
}

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    MuiCustomRating: 'root';
  }

  interface ComponentsPropsList {
    MuiCustomRating: Partial<MuiRatingProps>;
  }

  interface Components {
    MuiCustomRating?: {
      defaultProps?: ComponentsPropsList['MuiCustomRating'];
      styleOverrides?: ComponentsOverrides<MuiTheme>['MuiCustomRating'];
      variants?: ComponentsVariants['MuiCustomRating'];
    };
  }
}

const ReviewContainer = styled(Paper, {
    name: 'MuiCustomRating',
    slot:'root',
})<{ownerState: MuiCustomRatingProps}> (({ theme, ownerState}) => ({     
    
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center',
    width: '856px',
    height: '260px',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        width: '100%',
        height: '720px',
        justifyContent: 'space-around',
        gap:'1rem'
    },
     ...(ownerState.variant === 'blue' ? {
    
        boxShadow: 'none',
        background: `${ theme.palette.background.default }`,         
     }
         : ownerState.variant === 'red' ? 
             {
             backgroundColor: '#F8CECC',
         }:
         {    
        boxShadow: 'none',
        backgroundColor: '#F5F5F5' ,         
     }

  ),   
}))

const MuiReview = React.forwardRef<HTMLDivElement, MuiRatingProps>(function MuiReview(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiRatingProps' });
    const { variant, ...other } = props;
    const ownerState = { ...props, variant };
    const [value, setValue] = useState<number | null>(null)      
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
    }
    return (
        <ThemeProvider theme={defaultTheme}>
        <ReviewContainer ref={ref} ownerState={ownerState} {...other}>
             <ReviewBox>                                                                    
        <Typography variant="h4" component="div" color="#66B2FF">Reviews</Typography>                                             
                    <InnerStack direction="row">
                        <Typography variant="h4" color='#fff'>{value}</Typography>  
                            <Box sx={{position:'absolute',  inset:'unset', right:'0.2rem'}}>
                            <MainStar
                                value={value ? value / 5 : null}
                                max={1}
                                readOnly
                                precision={0.1}
                                icon={<StarTwoToneIcon fontSize="inherit" />}
                            emptyIcon={<StarOutlineTwoToneIcon fontSize="inherit" />} />  
                            </Box>
                    </InnerStack>                
                        <SmallStars
                            value={value}                   
                            max={5}
                            precision={0.5}
                            onChange={handleChange}
                             icon={<StarTwoToneIcon fontSize='inherit' />}
                            emptyIcon={<StarTwoToneIcon fontSize='inherit' />} 
                            
                        />
                    
                </ReviewBox>
            

                <CustomerReviewBox
                    className="customer-review"
                >
                    <Stack
                    direction="row"
                    width="100%"
                    alignItems="center"
                    // justifyContent="flex-start"
                    >
                        <SmallAvatar />
                    <Typography variant="subtitle1" component="div" fontWeight="500">Customer Name</Typography>
                    </Stack>
                      
                    <Stack
                        border="2px solid #6C8EBF"
                        bgcolor="#DAE8FC"
                        height="67px"
                        width="140px"
                        alignItems="space-between"
                        justifyContent="flex-start"
                        fontSize="3rem"
                        padding="0.2rem"
                    >
                        <Typography component="div" variant="subtitle1" fontWeight={700}>Heading</Typography>
                        <Typography component="div" variant="body2">Review</Typography>
                                                          
                    </Stack>
                    <StyledRating
                        value={value}
                        onChange={handleChange}
                        max={5}
                        precision={0.1}
                        color="#787878"
                    />
                </CustomerReviewBox>
                <CustomerReviewBox
                    className="customer-review"
                >
                    <Stack direction="row"           
                        width="100%"
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        <SmallAvatar />
                        <Typography variant="subtitle1" component="div" fontWeight="500">Customer Name</Typography>
                    </Stack>
                      
                    <Stack
                        border="2px solid #6C8EBF"
                        bgcolor="#DAE8FC"
                        height="67px"
                        width="140px"
                        alignItems="space-between"
                        justifyContent="flex-start"
                        fontSize="3rem"
                        padding="0.2rem"                   
                    >
                        <Typography component="div" variant="subtitle1" fontWeight={700}>Heading</Typography>
                        <Typography component="div" variant="body2">Review</Typography>
                                                          
                    </Stack>
                    <StyledRating
                        value={value}
                        onChange={handleChange}
                        max={5}
                        precision={0.5}
                        color="#787878"
                    />
                </CustomerReviewBox>
                <CustomerReviewBox
                    className="customer-review"
                >
                    <Stack direction="row"
                        width="100%"
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        <SmallAvatar />
                        <Typography variant="subtitle1" component="div" fontWeight="500">Customer Name</Typography>
                    </Stack>
                      
                    <Stack
                        border="2px solid #6C8EBF"
                        bgcolor="#DAE8FC"
                        height="67px"
                        width="140px"
                        alignItems="space-between"
                        justifyContent="flex-start"
                        fontSize="3rem"
                        padding="0.2rem"
                    >
                        <Typography component="div" variant="subtitle1" fontWeight={700}>Heading</Typography>
                        <Typography component="div" variant="body2">Review</Typography>
                    </Stack>
                    <StyledRating
                        value={value}
                        onChange={handleChange}
                        max={5}
                        precision={0.5}
                        color="#787878"
                    />
                </CustomerReviewBox>
               

                </ReviewContainer>
                </ThemeProvider>
        )
    });

    MuiReview.propTypes = {
    variant: PropTypes.oneOf(['blue', 'red', ""]),
};
const CustomMuiRating: React.FC<MuiRatingProps> =({ variant })=>{      
    return (          
        <MuiReview variant={variant} />
        )
}
    export default CustomMuiRating