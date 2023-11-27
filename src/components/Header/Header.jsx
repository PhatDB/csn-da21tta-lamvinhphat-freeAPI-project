import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { AsyncPaginate } from 'react-select-async-paginate';
import { getCitiesData } from '../../utils/fetchData';

const Header = (props) => {
    const { search, handleOnChange } = props;

    const loadOptions = (input) => {
        return getCitiesData(input).then((data) => {
            return {
                options: data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}`,
                    };
                }),
            };
        });
    };

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
