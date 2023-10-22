import React from 'react';
import { Grid } from '@mui/material';
import PricingCard from './customcard';

const PricingTemplate: React.FC = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={10} sm={5} md={4}>
        <PricingCard
          title="Basic Plan"
          price="$9.99/month"
          features={['Feature 1', 'Feature 2', 'Feature 3']}
          buttonText="Purchase"
        />
      </Grid>
      <Grid item xs={10} sm={5} md={4}>
        <PricingCard
          title="Pro Plan"
          price="$19.99/month"
          features={['All Basic Plan features', 'Feature 4', 'Feature 5']}
          buttonText="Purchase"
        />
      </Grid>
      <Grid item xs={10} sm={5} md={4}>
        <PricingCard
          title="Premium Plan"
          price="$29.99/month"
          features={['All Pro Plan features', 'Feature 6', 'Feature 7']}
          buttonText="Purchase"
        />
      </Grid>
    </Grid>
  );
};

export default PricingTemplate;
