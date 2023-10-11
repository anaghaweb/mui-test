// ContactInfo.tsx
import * as React from 'react';
import { Typography, Box} from '@mui/material';

const ContactInfo: React.FC = () => {
  return (
    
      <Box
        sx={{fontFamily:"monospace", height:'100%'}}
      >
          
        <Typography variant="h5">Get in touch</Typography>
        <Typography variant="subtitle2">74 E Glenwood Ave</Typography>
        <Typography variant="subtitle2">Suite 5235</Typography>
        <Typography variant="subtitle2">Smyrna, DE 19977</Typography>
        <Typography variant="subtitle2">contact@interamerica.capital</Typography>
      
      </Box>
     
  );
};

export default ContactInfo;
