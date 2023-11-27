import axios from 'axios';

const PLACES_BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=';
const WEATHER_API_KEY = 'ca4e4f1b61367f941c9aa24526ee3129';

export const getCitiesData = async (inputValue) => {
    try {
        const {
            data: { data },
        } = await axios(PLACES_BASE_URL, {
            params: {
                minPopulation: '100000',
                namePrefix: inputValue,
            },
            headers: {
                'X-RapidAPI-Key': '1b7d9a0609mshfdd31ba98a5ade5p1a7b98jsn3478ada93f1e',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getCurrenWeatherData = async (coords) => {
    try {
        const { data } = await axios(`${WEATHER_BASE_URL}${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const getPlacesData = async (coords) => {
    try {
        const { data } = await axios('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng', {
            params: {
                latitude: coords.lat,
                longitude: coords.lon,
                limit: '30',
            },
            headers: {
                'X-RapidAPI-Key': '1b7d9a0609mshfdd31ba98a5ade5p1a7b98jsn3478ada93f1e',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
