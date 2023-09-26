'use client'
import { styled } from '@mui/material/styles'
import SimpleBottomNavigation from './bottomNavigation';
import * as React from 'react';


const CustomBottomNavigation = styled(SimpleBottomNavigation)(({ props }) => ({


}));

export default function StyledBottom() {
    return <><CustomBottomNavigation /></>
}