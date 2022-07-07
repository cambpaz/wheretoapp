import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './Header/Header';
import List from './List/List';
import Map from './Map/Map';
import { getPlacesData } from '../api';


const Home = () => {
    const [places, setPlaces] = useState('');
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, [])

    useEffect(() => {
        try {
            getPlacesData(bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data)
                })
        } catch (error) {
        }

    }, [coordinates, bounds]);
    // los limites se establecen en el map y luego suben al padre, cada vez que movamos el mapa van a cambiar por ser dependencia del useeffect

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
                </Grid>
            </Grid>
        </>
    )
}

export default Home