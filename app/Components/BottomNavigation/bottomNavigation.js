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
                color="#002884"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" sx={{}} icon={<RestoreIcon
                    sx={{ maxWidth: '100px', color: "#002884" }} />} />
                <BottomNavigationAction label="Favorites" sx={{ color: "#002884" }} color="default" icon={<FavoriteIcon
                    sx={{ maxWidth: '100px' }} />} />
                <BottomNavigationAction label="Nearby" sx={{ color: "#002884" }} color="default" icon={<LocationOnIcon
                    sx={{ maxWidth: '100px' }} />} />
            </BottomNavigation>
        </Box>
    );
}
