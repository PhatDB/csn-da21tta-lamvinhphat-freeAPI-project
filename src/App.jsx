import { CssBaseline } from '@mui/material';
import Header from './components/Header/Header';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import Weather from './components/Weather/Weather';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { getCurrenWeatherData, getPlacesData } from './utils/fetchData';

const App = () => {
    const [search, setSearch] = useState('');
    const [coords, setCoords] = useState({ lat: 12.254444444, lon: 109.166666666 });

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        const [lat, lon] = searchData.value.split(' ');
        setCoords({ lat: lat, lon: lon });
    };

    useEffect(()=>{
        getCurrenWeatherData(coords).then((data) => {
            console.log(data);
        });
    },[coords])

    useEffect(() => {
        getPlacesData(coords).then((data) => {
            console.log(data);
        });
    }, [coords]);

    return (
        <>
            <CssBaseline />
            <Header search={search} setSearch={setSearch} handleOnChange={handleOnChange} />
            <CurrencyConverter />
            <Weather />
            <Main />
            <Footer />
        </>
    );
};

export default App;
