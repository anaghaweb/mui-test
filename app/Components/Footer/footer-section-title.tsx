import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme, ThemeProvider } from '@mui/material';

// import theme from '../../ThemeRegistry/theme';
interface Props {
  title: string
}

const FooterSectionTitle: FC<Props> = ({ title }: Props) => {
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
      }}
    >
      <Typography component="p" variant="subtitle1" sx={{ color: `primary.contrastText` , fontWeight: '700' }}>
        {title}
      </Typography>
    </Box>
  )
}

export default FooterSectionTitle
