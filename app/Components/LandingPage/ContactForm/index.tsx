'use client'
import * as React from 'react';
import { Container, Typography, Button, Box } from '@mui/material'
import { StyledTextField } from '../landing.styles';


const ContactForm:React.FC=()=>{
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [subject, setSubject] = React.useState('');

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)   => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    }
    console.log(JSON.stringify(formData));
   
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxoUxRgn_axyGxefbgpE9OReGcPBIGcz85f7jJ3EGeXK2G9D42NcMjjMcU2B5U8FLmJ/exec';

    try {
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      console.log(response);
      if (response.ok) {
        console.log('Form data submitted successfully');
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
      } else {
        console.error('Form data submission failed');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  return (
    <Container className="contact-form"
      sx={{my:'0.5rem', fontFamily:"monospace"}}
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
        
        <Box className="form-group">
          <label htmlFor="name">Name:</label>
          <StyledTextField
            label="Name"
            name="Name"
            placeholder="Name"
            fullWidth
            required
            className="field"
            type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
          sx={{display: 'flex', flexGrow: 1,my:'0.5rem'}}/>
        </Box>
        <Box className="form-group">
          <label htmlFor="email">Email:</label>
          <StyledTextField
            type="email"
            id="email"
            label="email"
            placeholder="Email ID"
            name="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          sx={{display: 'flex', flexGrow: 1, my:'0.5rem'}}
          />
        </Box><Box className="form-group">
          <label htmlFor="subject">Subject:</label>
          <StyledTextField
            type="text"
            id="subject"
            label="subject"
            placeholder="Subject"
            name="Subject"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          sx={{display: 'flex', flexGrow: 1, my:'0.5rem'}}
          />
        </Box>
        <Box className="form-group">
          <label htmlFor="message">Message:</label>
          <StyledTextField
            id="message"
            value={message}
            label="message"
            name="M essage"
            placeholder="your message here"
            multiline
            rows={2}
            onChange={(e) => setMessage(e.target.value)}
            sx={{display: 'flex', flexGrow: 1,my:'0.5rem'}}
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
