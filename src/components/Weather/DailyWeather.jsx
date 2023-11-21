import { Card, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const days = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];

const DailyWeather = () => {
    return (
        <Grid container spacing={2} justifyContent='center'>
            {days.map((day, index) => (
                <Grid item key={index} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Card
                        sx={{
                            maxWidth: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '10px',
                            alignItems: 'center',
                        }}
                    >
                        <Typography align='center'>{day}</Typography>
                        <CardMedia
                            sx={{ height: '50px', width: '50px' }}
                            image='https://openweathermap.org/img/wn/10d@2x.png'
                        />
                        <Typography align='center'>22°C - 25°C </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default DailyWeather;
