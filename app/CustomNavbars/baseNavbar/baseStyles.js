'use client'
import { alpha, styled } from '@mui/material/styles'
import SimpleBottomNavigation from '@/app/Components/BottomNavigation/bottomNavigation'
import * as React from 'react';
import Slider from '@mui/material/Slider';
import BasicAccordion from '@/app/fillerAccordian/accordian';
import { AppBar } from '@mui/material';




const SuccessSlider = styled(Slider)(({ theme }) => ({
    width: 300,
    color: theme.palette.text.secondary,
    '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
        },
    },
}));

export const CustomAccordian = styled(BasicAccordion)(({ theme }) => ({

    color: theme.palette.text.secondary,

}));


export const CustomAppBar = styled(AppBar)(({ theme }) => ({

    '&.MuiAppBar-root': {
        backgroundColor: theme.palette.warning.main,
        color: "#263238"
    },


}))

export default function StyledCustomization() {
    return <SuccessSlider defaultValue={30} />;
}