import { Autocomplete, Grid, TextField } from '@mui/material';
import React from 'react';

const SelectCountry = () => {
    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                disableClearable
                options={['Option 1', 'Option2']}
                renderInput={(params) => <TextField {...params} label='country' />}
            />
        </Grid>
    );
};

export default SelectCountry;
