import {Box, Stack, ButtonBase} from '@mui/material';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

export default function UserList({ users, handleOpen }) {
    return (
        <Box sx={{ marginTop: '50px', marginRight: '50px', marginLeft: '50px'}}>
            <Stack spacing={2}>
                {users.map((user) => (
                    <Box key={user.id} sx={{ display: 'flex', alignItems: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px'}}>
                        <Box sx={{ marginRight: '930px' }}>{user.name}</Box>
                        <ButtonBase onClick={() => handleOpen(user)}>
                            <LaunchOutlinedIcon fontSize='large' />
                        </ButtonBase>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}