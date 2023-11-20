import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const styled = {
    cardGrid: {
        padding: '10px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Weather = () => {
    return (
        <Container maxWidth='md' sx={styled.cardGrid}>
            <Grid container spacing={2} justifyContent='center'>
                {days.map((day, index) => (
                    <Grid item key={index} md={1.5}>
                        <Card sx={styled.card}>
                            <CardContent>
                                <Typography variant='h6' align='center'>
                                    {day}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                sx={styled.cardMedia}
                                image='https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/3d7cec4e9710ed3f26632967eeb31a55b26d83fa/icons/01d.png'
                            />
                            <CardContent>
                                <Typography variant='subtile1' align='center'>
                                    28C 30C
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Weather;
