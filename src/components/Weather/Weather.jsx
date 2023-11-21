import { Container } from '@mui/material';
import React from 'react';
import CurrenWeather from './CurrenWeather';
import DailyWeather from './DailyWeather';

const Weather = () => {
    return (
        <Container maxWidth='md' sx={{ margin: '20px auto 20px auto', display: { xs: 'block', md: 'flex' } }}>
            <CurrenWeather />
            <DailyWeather />
        </Container>
    );
};

export default Weather;
