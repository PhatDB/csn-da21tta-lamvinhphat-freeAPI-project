import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { style } from './style';

const CurrenWeather = () => {
    return (
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
    );
};

export default CurrenWeather;
