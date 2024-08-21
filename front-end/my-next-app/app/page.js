'use client'

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Modal,
  Stack,
} from '@mui/material';
import { set } from 'mongoose';

export default function Home() {
  // State to manage modal visibility
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle button click
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function to fetch users data
  useEffect(() => {
    fetch('/models/users')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      });
  }, []);

  // Function to submit user information
  const handleSubmit = () => {
    const newUser = { _id: Date.now().toString(), name, email, subject, message };
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    handleClose();
  };

  return (
      // Create a modal to fill the information about the user
      <Box>
        <Modal open={open} onClose={handleClose}>
          <Box className='email-info' sx={{p: 4, bgcolor: 'background.paper', borderRadius: 1}}>
            <Typography variant='h4' marginBottom="20px">Email Template</Typography>
            <Stack spacing={2}>
              <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)}/>
              <TextField label='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
              <TextField label='Message' value={message} onChange={(e) => setMessage(e.target.value)} multiline/>
              <Button variant='outlined' onClick={handleSubmit} sx={{backgroundColor:'green', color:'white', ':hover':{backgroundColor:'darkgreen'}}}>Send</Button>
            </Stack>
          </Box>
        </Modal>

        {/* Create a modal for follow-up email*/}
        <Modal open={open} onClose={handleClose}>
          <Box sx={{p: 4, bgcolor: 'background.paper', borderRadius: 1}}>
            <Typography variant='h4' marginBottom="20px">Follow-up Email</Typography>
            <Stack spacing={2}>
              <TextField label='Message' value={message} onChange={(e) => setMessage(e.target.value)} multiline />
              <Button variant='outlined' onClick={handleSubmit} sx={{backgroundColor:'green', color:'white', ':hover':{backgroundColor:'darkgreen'}}}>Send</Button>
            </Stack>
          </Box>
        </Modal>

        {/* Display User Database*/}
        <Box sx={{margin:'50px'}}>
          <Typography variant="h3" margin="50px" sx={{textAlign: 'center'}}>Outreach Management</Typography>
          <Stack spacing={2}>
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
