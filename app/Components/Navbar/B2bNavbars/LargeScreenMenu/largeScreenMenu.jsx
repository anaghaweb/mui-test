'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AtlassianSVGLight from './AtlassianSVG/atlassianSVGLight';
import { AtlassianLightWrapper, AtlassianDarkWrapper } from '../styled';
import AtlassianDark from './AtlassianSVG/atlassianSVGdark';


const LargeScreenMenu = ({variantcolor}) => {  
    return <>
        <Box sx={{
            flexGrow: 3,
            display: {
                xs: 'none', lg: 'flex'
            },
                justifyContent: 'flex-end',
                color: 'inherit',
                gap: '0.4rem',
            
        }}>
                        <Button
                            // onClick={handleCloseNavMenu}
                            variant="text"
                            sx={{
                                my: 1,
                                color: 'inherit',
                                display: 'block',
                                textTransform: 'capitalize',
                                letterSpacing: 'none'
                            }}
                        >
                            <Typography variant="h5">Products</Typography>
                        </Button>
                        <Button
                            // onClick={handleCloseNavMenu}
                            sx={{
                                my: 1,
                                color: 'inherit',
                                display: 'block',
                                textTransform: 'capitalize',
                                letterSpacing: 'none'
                            }}
                            >                       
                            <Typography variant="h5">About Us</Typography>
                        </Button>

                        <Button
                            // onClick={handleCloseNavMenu}
                            sx={{
                                my: 1,
                                color: 'inherit',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '6.5rem',
                                gap: '0.5rem',
                                minWidth: 'fit-content',
                                textTransform: 'capitalize',
                            }}
                        >
                            {variantcolor === 'dark' ? <AtlassianLightWrapper/>
                                : <AtlassianDarkWrapper />    
                            }                 
                           <Typography variant="h5">For Businesses</Typography>
                        </Button>
                      {/* Large screen Menu */}
                    </Box>
                    <Box 
                    sx={{ flexGrow: 1, display: { lg: 'flex', justifyContent: 'flex-end', color: 'inherit', gap: '0.5rem' } }}>
                    </Box>
    </>
}

export default LargeScreenMenu;

