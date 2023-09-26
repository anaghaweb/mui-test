'use client'
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import PropTypes from 'prop-types';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import PeopleIcon from '@mui/icons-material/People';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuIcon from '@mui/icons-material/Menu';



const NavRoot = styled('div', {
    name: 'MuiBasicNav',
    slot: 'root',
})
    (({ theme, ownerState }) => ({

        display: 'flex',
        width: '100%',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        letterSpacing: '0.25em',
        fontWeight: 400,
        ...(ownerState.variant === 'blue' && {
            backgroundColor: theme.palette.secondary.main,

        }),
        ...(ownerState.variant === 'ochre' && {
            backgroundColor: theme.palette.ochre.main,
            color: theme.palette.ochre.contrastText,
        }),
        ...(ownerState.variant === 'violet' && {
            backgroundColor: theme.palette.violet.main,
            color: theme.palette.violet.contrastText,
        }),
    }))


const NavTitle = styled('div', {
    name: 'MuiBasicNav',
    slot: 'title',

})
    (({ theme, ownerState }) => ({
        ...theme.typography.h4,
        color: theme.palette.text.primary,

        ...(ownerState.variant === 'blue' && {
            backgroundColor: theme.palette.secondary.main,

        }),
        ...(ownerState.variant === 'ochre' && {
            backgroundColor: theme.palette.ochre.main,
            color: theme.palette.ochre.contrastText,
        }),
        ...(ownerState.variant === 'violet' && {
            backgroundColor: theme.palette.violet.main,
            color: theme.palette.violet.contrastText,
        }),

    }));


const NavBrightnessIcon = styled(BrightnessLowIcon,
    {
        name: 'MuiBasicNav',
        slot: 'icon_1',
    }
)(({ theme, ownerState }) => ({
    ...(ownerState.variant === 'blue' && {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
    }),
    ...(ownerState.variant === 'ochre' && {
        backgroundColor: theme.palette.ochre.main,
        color: theme.palette.ochre.contrastText,
    }),
    ...(ownerState.variant === 'violet' && {
        backgroundColor: theme.palette.violet.main,
        color: theme.palette.violet.contrastText,
    }),

}));

const NavPeopleIcon = styled(PeopleIcon, {
    name: 'MuiBasicNav',
    slot: 'icon_2',

})
    (({ theme, ownerState }) => ({
        ...(ownerState.variant === 'blue' && {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.contrastText,
        }),
        ...(ownerState.variant === 'ochre' && {
            backgroundColor: theme.palette.ochre.main,
            color: theme.palette.ochre.contrastText,
        }),
        ...(ownerState.variant === 'violet' && {
            backgroundColor: theme.palette.violet.main,
            color: theme.palette.violet.contrastText,
        }),

    }));

const NavMenuIcon = styled(MenuIcon, {
    name: 'MuiBasicNav',
    slot: 'icon_3',

})(({ theme, ownerState }) => ({


    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },


    ...(ownerState.variant === 'blue' && {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
    }),
    ...(ownerState.variant === 'ochre' && {
        backgroundColor: theme.palette.ochre.main,
        color: theme.palette.ochre.contrastText,
    }),
    ...(ownerState.variant === 'violet' && {
        backgroundColor: theme.palette.violet.main,
        color: theme.palette.violet.contrastText,
    }),

}))

const NavLanguageIcon = styled(LanguageOutlinedIcon, {
    name: 'MuiBasicNav',
    slot: 'icon_4',

})(({ theme, ownerState }) => ({

    ...(ownerState.variant === 'blue' && {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
    }),
    ...(ownerState.variant === 'ochre' && {
        backgroundColor: theme.palette.ochre.main,
        color: theme.palette.ochre.contrastText,
    }),
    ...(ownerState.variant === 'violet' && {
        backgroundColor: theme.palette.violet.main,
        color: theme.palette.violet.contrastText,
    }),



}))


const StyledNavStack = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: theme.spacing(3),

}))

const BasicNavbar = React.forwardRef(function BasicNavbar(inProps, ref) {

    const props = useThemeProps({ props: inProps, name: 'MuiBasicNav' })
    const { title, variant, icon_1, icon_2, icon_3, icon_4, ...other } = props;
    const ownerState = { ...props, variant };


    return (
        <NavRoot ref={ref} ownerState={ownerState} {...other}>
            <StyledNavStack direction="row" >
                <NavMenuIcon ownerState={ownerState} />
                <NavTitle ownerState={ownerState}>{title}</NavTitle>
            </StyledNavStack>
            <StyledNavStack direction="row">
                <NavBrightnessIcon ownerState={ownerState} />
                <NavLanguageIcon ownerState={ownerState} />
                <NavPeopleIcon ownerState={ownerState} />
            </StyledNavStack>

        </NavRoot >
    )

})

BasicNavbar.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['basic']),
};

export default function BasicNavbarTemplate({ title, variant }) {

    return <>

        <BasicNavbar title={title} variant={variant} />

    </>
}
