import { Box, Card, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material';
import Header from './components/Header/Header';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import { useEffect, useState } from 'react';
import { getCurrenWeatherData, getDailyWeatherData } from './utils/fetchData';
import Weather from './components/Weather/Weather';

const App = () => {
    const [search, setSearch] = useState('');
    const [coords, setCoords] = useState({ lat: 12.24507, lon: 109.19432 });

    const [currenWeather, setCurrenWeather] = useState([]);
    const [dailyWeather, setDailyWeather] = useState([]);

    useEffect(() => {
        getCurrenWeatherData(coords).then((data) => {
            setCurrenWeather([data]);
        });
        getDailyWeatherData(coords).then((data) => {
            setDailyWeather(data.list);
        });
    }, [coords]);
    return (
        <>
            <CssBaseline />
            <Box sx={{ background: '#DEF1FF', height: '100vh' }}>
                <Header search={search} setSearch={setSearch} setCoords={setCoords} />
                <CurrencyConverter />
                <Weather currenData={currenWeather} dailyData={dailyWeather} />
            </Box>
        </>
    );
};

export default App;
