import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';

import useStyles from './style'
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = () => {
    const [type, setType] = useState('restaurants');
    const [rating, setRatings] = useState('');

    const classes = useStyles();
    const places = [];
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants, Hotels & Atractions</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='Hotels'>Hotels</MenuItem>
                    <MenuItem value='Attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRatings(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))
                }

            </Grid>
        </div>
    )
}

export default List