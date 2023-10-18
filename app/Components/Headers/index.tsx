'use client'
import * as React from 'react'
import {Typography, Button} from '@mui/material'
import Image from 'next/image';

export interface StyledHeaderProps {
    variant?: "header1" | "header2" | "header3";
    image?: string;
    title?: string;
    description?: string;
    caption?: string;
}
import { Headers } from './header.styled';

export default function HeaderComponent({variant, image, title, caption, description}:StyledHeaderProps) {
  
    return (
        
      <React.Fragment>          
            <Headers variant={variant}
                    title={title} 
                description={description} 
                caption={caption}
            />  
    </React.Fragment>
)}

