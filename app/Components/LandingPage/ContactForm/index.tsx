'use client'
import * as React from 'react';
import {Container, Typography, Button, Box, TextField} from '@mui/material'

const ContactForm: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <Container className="contact-form"
      sx={{my:'1rem'}}
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
        
        <Box className="form-group">
          <label htmlFor="name">Name:</label>
          <TextField
            label="Name"
            variant='outlined'
            fullWidth
            required
            className="field"
            type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
          sx={{display: 'flex', flexGrow: 1,my:'1rem'}}/>
        </Box>
        <Box className="form-group">
          <label htmlFor="email">Email:</label>
          <TextField type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
          sx={{display: 'flex', flexGrow: 1, my:'1rem'}}
          />
        </Box>
        <Box className="form-group">
          <label htmlFor="message">Message:</label>
          <TextField
            id="message"
            value={message}
            label="message"
            name="message"
            multiline
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            sx={{display: 'flex', flexGrow: 1,my:'1rem'}}
          />
        </Box>
        <Button type="submit" variant="outlined"
          sx={{ display: 'flex', width:'100%' }}
        >Submit
        </Button>
      </form>
    </Container >
  );
};

export default ContactForm;
