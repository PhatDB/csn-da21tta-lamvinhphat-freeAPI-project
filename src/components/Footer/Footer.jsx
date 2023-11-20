import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1976d2' }}>
            <Typography variant='h6' align='center' color='#fff' gutterBottom>
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='#fff'>
                Footer description
            </Typography>
        </Box>
    );
};

export default Footer;
