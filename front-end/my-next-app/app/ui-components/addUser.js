import {Box, Stack, TextField, Modal, Button} from '@mui/material';
import axios from 'axios';

export default function AddUser({open, handleClose, name, setName, email, setEmail, background, setBackground, message, setMessage, handleAddUser}) {

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx = {{
                bgcolor: 'background.paper',
                boxShadow: 24,
                position: 'absolute',
                width: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: 4,
                borderRadius: 3,
            }}>
                <Stack spacing={2}>
                    <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)}></TextField>
                    <TextField label='Email' value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                    <TextField label='Background' value={background} onChange={(e) => setBackground(e.target.value)} multiline></TextField>
                    <TextField label='Message' placeholder="Generate a personalized message for this user" value={message} onChange={(e) => setMessage(e.target.value)} multiline></TextField>
                    <Button variant='contained' sx={{backgroundColor: "#125B9A"}}>Generate Message</Button>
                    <Button variant='contained' sx={{backgroundColor: "#387F39", ":hover": {backgroundColor: "#508D4E"}}} onClick={handleAddUser}>Send</Button>
                </Stack>
            </Box>
        </Modal>
    );
}