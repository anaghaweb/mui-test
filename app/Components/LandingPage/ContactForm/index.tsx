'use client'
import * as React from 'react';
import { Container, Button, Box } from '@mui/material'
import { StyledTextField } from '../landing.styles';
import axios from 'axios';


const ContactForm:React.FC=()=>{
  
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [subject, setSubject] = React.useState('');

    const [firstNameFocused, setFirstNameFocused] = React.useState(false);
  const [lastNameFocused, setLastNameFocused] = React.useState(false);
  const [emailFocused, setEmailFocused] = React.useState(false);

  
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const nameRegex = /.+/;

   const handleFirstNameFocus = () => {
    setFirstNameFocused(!firstNameFocused);
  };

   const handleLastNameFocus = () => {
    setLastNameFocused(!lastNameFocused);
  };

   const handleEmailFocus = () => {
    setEmailFocused(!emailFocused);
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
           
    const currentDate = new Date().toLocaleDateString('en-US', {timeZone: 'America/Los_Angeles'})
    const formData = {
      Date:currentDate,
      "First Name":firstname,
      "Last Name":lastname,
      Email:email,
      Subject:subject,
      Message:message,
    }
       
      
    const scriptUrl = 'https://sheet.best/api/sheets/2aa0fa39-6506-4b60-88b1-c6e8f48157fb';

    // axios.post(scriptUrl, formData).then((response) => {
    //   console.log(response)
    // })

     
    try {
      
      const response = await fetch(scriptUrl, {
        method: 'POST',  
        body: JSON.stringify(formData),
        headers: {
          
          'Content-Type': "application/json",
        },
        
        
      });
      const content = await response.json();
      if (response.ok) {
        console.log(content);
        setFirstName('');
         setLastName('');
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
        autoComplete="off"
        onSubmit={handleSubmit}>   
        <Box className="form-group">
          {/* <label htmlFor="name">Name:</label> */}
          <StyledTextField
            label="First Name"
            name="contactForm"
            placeholder="First Name"
            fullWidth
            required
            className="field"
            type="text" id="firstname" value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={handleFirstNameFocus}
            onBlur={handleFirstNameFocus}
            helperText={
              !firstname && "First Name should not be empty"}
              error={firstNameFocused && !nameRegex.test(firstname)}
          />
        </Box>
        <Box className="form-group">
          {/* <label htmlFor="name">Name:</label> */}
          <StyledTextField
            label="Last Name"
            name="contactForm"
            placeholder="Last Name"
            fullWidth
            required
            className="field"
            type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}
            onFocus={handleLastNameFocus}
            onBlur={handleLastNameFocus}
            helperText={
              !lastname && "Last Name should not be empty"}
              error={lastNameFocused && !nameRegex.test(lastname)}
          />
        </Box>
        <Box className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <StyledTextField
            type="email"
            id="email"
            label="Email ID"
            placeholder="Email ID"
           name="contactForm"
            value={email}
            required
            className="field"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailFocus}
            helperText={
              !email && "Enter a valid email ID"}
              error={emailFocused && !emailRegex.test(email)}
           
          />
        </Box><Box className="form-group">
          {/* <label htmlFor="Contact No.">Subject:</label> */}
          <StyledTextField
            type="tel"
            id="contact"
            label="Subject"
            placeholder="Subject Title"
            name="contactForm"
            value={subject}
            className="field"
            onChange={(e) => setSubject(e.target.value)}
          
          />
        </Box>
        <Box className="form-group">
          {/* <label htmlFor="message">Message:</label> */}
          <StyledTextField
            id="message"
            value={message}
            label="Your Message"
            name="contactForm"
            placeholder="your message here"
            multiline
            rows={2}
            onChange={(e) => setMessage(e.target.value)}
            className="field"
           
          />
        </Box>
        <Button type="submit" variant="outlined"
          style={{ display: 'flex', width:'100%' }}
        >Submit
        </Button>
      </form>
    </Container >
  );
};

export default ContactForm;
