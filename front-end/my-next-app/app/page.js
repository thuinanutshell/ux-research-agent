'use client'

import React from 'react';
import StatusBar from './ui-components/statusBar';
import UserList from './ui-components/userList';
import AddUser from './ui-components/addUser';
import useUsers from './useUsers';
import {useState} from 'react';
import {Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    users,
    name,
    setName,
    email,
    setEmail,
    background,
    setBackground,
    message,
    setMessage,
    handleAddUser
  } = useUsers();

    return (
      <>
        <div>
          <h1 style = {{textAlign: 'center'}}> User Research Management </h1>
          <StatusBar />
        </div>
        <div>
          <UserList users={users} handleOpen={handleOpen} />
        </div>
        <div>
          <Box sx = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                width: '100%',
                mt: 2}}>
                <Fab size='medium' aria-label="add" onClick={handleOpen}>
                  <AddIcon />
                </Fab>
          </Box>
        </div>
        <div>
            <AddUser
              open={open}
              handleClose={handleClose}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              background={background}
              setBackground={setBackground}
              message={message}
              setMessage={setMessage}
              handleAddUser={() => {
                handleAddUser();
                handleClose();
              }}
            />
        </div>
      </>
    );
}