import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import InputAmount from './InputAmount';
import SwitchCurrency from './SwitchCurrency';
import SelectCountry from './SelectCountry';

const CurrencyConverter = (currenWeather) => {
    return (
        <Container maxWidth='md' sx={{ marginTop: '2rem', background: '#f7f7f7', borderRadius: 2 }}>
            <Grid container spacing={2}>
                <InputAmount />
                <SelectCountry />
                <SwitchCurrency />
                <SelectCountry />
            </Grid>
            <Box sx={{ textAlign: 'left', marginTop: '1rem' }}>
                <Typography>$$$ Country = </Typography>
                <Typography variant='h5' sx={{ marginTop: '5px', fontWeight: 'bold' }}>
                    $$$ Country
                </Typography>
            </Box>
        </Container>
    );
};

export default CurrencyConverter;
