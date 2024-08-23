'use client'

// Import packages
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Modal,
  Stack,
} from '@mui/material';
import { generateMessage } from './api';

// Create a functional Home component
export default function Home() {
  // Define state variables to manage modal visibility
  // The first variable is the value of the state
  // The second variable is a function used to update the state
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [genMessage, setGenMessage] = useState('');

  // Function to handle button click
  // This function will set the value of the open state to true
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function to save user information
  // This function will be called when the user clicks the "Send" button
  // It will create a new user object and add it to the users array [...users, newUser]
  // The spread operator '...' is used to copy the existing users array
  // Reset the text fields to empty strings
  const handleSubmit = () => {
    const newUser = { _id: Date.now().toString(), name, email, subject, message };
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    handleClose();
  };

  // Function to generate a message using the OpenAI API
  const handleGenerate = async () => {
    const response = await generateMessage(message);
    setGenMessage(response);
  };

  return (
      // Create a modal to fill the information about the user
      <Box>
        <Modal open={open} onClose={handleClose}>
          <Box sx={{p: 4, bgcolor: 'background.paper', borderRadius: 1}}>
            <Typography variant='h4' marginBottom="20px">Email Template</Typography>
            <Stack spacing={2}>
              {/* Update the state of the components using event onChange handler */}
              <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)}/>
              <TextField label='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
              <TextField label='Message' value={genMessage} onChange={(e) => setGenMessage(e.target.value)} placeholder="Enter your prompt here..." multiline/>
              <Button variant='outlined' onClick={handleSubmit} sx={{backgroundColor:'green', color:'white', ':hover':{backgroundColor:'darkgreen'}}}>Send</Button>
              <Button variant='outlined' onClick={handleGenerate} sx={{backgroundColor:'blue', color:'white', ':hover':{backgroundColor:'darkblue'}}}>Generate Message</Button>
            </Stack>
          </Box>
        </Modal>

        {/* Display User Database */}
        <Box sx={{margin:'50px'}}>
          <Typography variant="h3" margin="50px" sx={{textAlign: 'center'}}>Outreach Management</Typography>
          <Stack spacing={2}>
            {/* Render list of users using map() method */}
            {users.map((user) => (
              <Box key={user._id} sx={{p: 2, border: '1px solid #ccc', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box>
                  <Typography variant='h6'>{user.name}</Typography>
                  <Typography variant='h6'>{user.email}</Typography>
                </Box>
                <Box>
                  <Button sx={{marginRight:'20px', backgroundColor:'green', color:'white', ':hover':{backgroundColor: 'green'}}}>Sent</Button>
                  <Button variant='outlined' sx={{marginRight:'20px', backgroundColor: '#0047AB', color:'white', ':hover': {backgroundColor: 'darkblue'}}}>Follow-up</Button>
                  <Button variant='outlined' sx={{marginRight:'20px', color:'grey', border:'1px solid #ccc', ':hover':{color:'grey', backgroundColor:'white', border:'1px solid #ccc'}}}>No Response</Button>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <Button variant='outlined' onClick={handleOpen}>Add New User</Button>
        </Box>
      </Box>
    );
}