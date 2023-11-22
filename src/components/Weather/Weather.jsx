import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { style } from './style';
const days = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];

const Weather = () => {
    return (
        <Container maxWidth='md' sx={{ margin: '20px auto 20px auto', display: { xs: 'block', md: 'flex' } }}>
            <Box>
                <Card>
                    <Box sx={style.country}>
                        <CardContent>
                            <Typography sx={style.countryName}>Vietnam</Typography>
                            <Typography sx={style.weatherStatus}>Rain</Typography>
                        </CardContent>
                        <CardMedia sx={style.cardMedia} image='https://openweathermap.org/img/wn/10d@2x.png' />
                    </Box>
                    <Box display='flex'>
                        <CardContent>
                            <Typography sx={style.temperature}>18°C</Typography>
                        </CardContent>
                        <Box width='100%' padding='10px'>
                            <Typography>Details</Typography>
                            <Box sx={style.boxDetail}>
                                <Typography sx={style.detailLabel}>Feels like</Typography>
                                <Typography sx={style.detailValue}>22°C</Typography>
                            </Box>
                            <Box sx={style.boxDetail}>
                                <Typography sx={style.detailLabel}>Wind</Typography>
                                <Typography sx={style.detailValue}>2 m/s</Typography>
                            </Box>
                            <Box sx={style.boxDetail}>
                                <Typography sx={style.detailLabel}>Humidity</Typography>
                                <Typography sx={style.detailValue}>15%</Typography>
                            </Box>
                            <Box sx={style.boxDetail}>
                                <Typography sx={style.detailLabel}>Pressure</Typography>
                                <Typography sx={style.detailValue}>15hPa</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>
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
        </Container>
    );
};

export default Weather;
