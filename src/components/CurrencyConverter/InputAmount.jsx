import { Grid, InputAdornment, TextField } from '@mui/material';
import React from 'react';

const InputAmount = (props) => {
    const { fistAmount, setFistAmount } = props;
    return (
        <Grid item xs={12} md>
            <TextField
                value={fistAmount}
                onChange={(e) => setFistAmount(e.target.value)}
                label='Amount'
                fullWidth
                InputProps={{
                    type: 'number',
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                }}
            />
        </Grid>
    );
};

export default InputAmount;
