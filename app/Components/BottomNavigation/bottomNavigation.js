'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon color="secondary"
                    sx={{ maxWidth: '100px' }} />} color="default" />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon color="secondary"
                    sx={{ maxWidth: '100px' }} />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon color="secondary"
                    sx={{ maxWidth: '100px' }} />} />
            </BottomNavigation>
        </Box>
    );
}
