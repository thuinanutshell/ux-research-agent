import {Box, Typography, Stack} from '@mui/material';

export default function StatusBar() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Stack direction="row" spacing={5}>
                <Box variant='outlined' sx={{border: '2px solid black', backgroundColor: "#1A5319", color: 'white', borderRadius: 3, p: 5}}>
                    Interview Scheduled
                    <Box></Box>
                </Box>
                <Box variant='outlined' sx={{border: '2px solid black', backgroundColor: "#FFDA76", borderRadius: 3, p: 5}}>
                    In Communication
                    <Box></Box>
                </Box>
                <Box variant='outlined' sx={{border: '2px solid black', backgroundColor: "#982B1C", color: 'white', borderRadius: 3, p: 5}}>
                    Denied/Cancelled
                    <Box></Box>
                </Box>
            </Stack>
        </Box>
    )
}