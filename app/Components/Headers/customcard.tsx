import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import {styled} from '@mui/material/styles';
interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

const StyledPricingCard = styled(Card)({
  background: 'linear-gradient(45deg, #F0F0F0, #C0C0C0, #E6E6FF, #C0C0C0, #F0F0F0)',
  color: '#000',
  padding: '16px',
 
  
});

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { title, price, features, buttonText } = props;

  return (
    <StyledPricingCard>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {price}
        </Typography>
        <ul >
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </CardContent>
    </StyledPricingCard>
  );
};

export default PricingCard;
