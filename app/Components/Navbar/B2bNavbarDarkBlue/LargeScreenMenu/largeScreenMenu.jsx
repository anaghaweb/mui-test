'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { AtlassianLightWrapper, StyledMenu, LargeMenuButtonWrapper } from '../b2b.styled';

const LargeScreenMenu = () => {  
    return <>
                <StyledMenu>
                        <LargeMenuButtonWrapper
                          variant="text">
                            <Typography variant="h5">Products</Typography>
                        </LargeMenuButtonWrapper>
                        <LargeMenuButtonWrapper
                            >                       
                            <Typography variant="h5">About Us</Typography>
                        </LargeMenuButtonWrapper>
                        <LargeMenuButtonWrapper>
                        <AtlassianLightWrapper />   
                        <Typography variant="h5">For Businesses</Typography>
                        </LargeMenuButtonWrapper>
                      {/* Large screen Menu */}
                </StyledMenu>
                   </>
}

export default LargeScreenMenu;

