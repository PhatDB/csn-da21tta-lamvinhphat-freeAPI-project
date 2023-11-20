import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Search from './Search';

const Header = () => {
    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    };
    return (
        <AppBar position='relative'>
            <Toolbar>
                <Container maxWidth='md' sx={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                    <Typography variant='h3' align='center' gutterBottom>
                        Travel Advisor
                    </Typography>
                    <Search />
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
