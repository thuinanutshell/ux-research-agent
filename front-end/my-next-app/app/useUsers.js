import { set } from 'mongoose';
import { useState } from 'react';

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [background, setBackground] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleAddUser = () => {
    setUsers([...users, {name, email, background}]);
    setName('');
    setEmail('');
    setBackground('');
    setMessage('');
  };
  
  return {
    users,
    name,
    email,
    background,
    selectedUser,
    message,
    setName,
    setEmail,
    setBackground,
    setMessage,
    setSelectedUser,
    handleAddUser
  }
}