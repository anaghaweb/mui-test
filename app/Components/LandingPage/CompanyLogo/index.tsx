// CompanyLogo.tsx
import React from 'react';
import Box from '@mui/material/Box';

const CompanyLogo: React.FC = () => {
  return (
    <Box className="company-logo"
    style={{objectFit:'contain', width:'100%', height:'100%'}}>
      <img src="https://res.cloudinary.com/dusqyungn/image/upload/v1668237805/samples/landscapes/architecture-signs.jpg"
        alt="Company Logo"
        
        style={{objectFit:'contain', width:'100%', height:'100%'}}
      />
    </Box>
  );
};

export default CompanyLogo;
