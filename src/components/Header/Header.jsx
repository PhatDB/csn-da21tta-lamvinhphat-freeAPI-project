import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Header = () => {
    const [search, setSearch] = useState('');

    const handleOnChange = () => {};
    const loadOptions = () => {};
    return (
        <AppBar position='relative'>
            <Toolbar>
                <Container maxWidth='md' sx={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                    <Typography variant='h3' align='center' gutterBottom>
                        Travel Advisor
                    </Typography>
                    <Box sx={{ color: '#333', backgroundColor: '#fff' }}>
                        <AsyncPaginate
                            placeholder='Search for city...'
                            debounceTimeout={600}
                            value={search}
                            onChange={handleOnChange}
                            loadOptions={loadOptions}
                        />
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
