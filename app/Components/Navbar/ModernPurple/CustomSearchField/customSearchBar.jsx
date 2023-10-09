'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper } from '../styled';
import { StyledInputBase } from '../styled';

function FullScreenSearchbar() {
    return <Box sx={
                {
                height: '100vh', width: '100%',
                position: 'absolute', top: '0', left: '0',
                backgroundColor: '#ffffff', zIndex: '98',
                }}>
                <Search
                sx={{ width: '100%', backgroundColor: '#f8f8f8' }}
                 >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    sx={{ width: '100%' }}
                    placeholder="Search for Products…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                </Search>
                <Container>
                 <Typography>No recent searches</Typography>
                 </Container>
            </Box>
    }

function SearchAppBar() {
    return <Box>
            <Search
            sx={{ backgroundColor: '#f8f8f8' }}
            >
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for Products…"
                inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
            </Box>
}

export {FullScreenSearchbar, SearchAppBar}