import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const {
            data: {
                data
            }
        } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': '16e1dea336msh0b30449e3bb13a0p121437jsn2a0c4f6a7737',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        console.log('data', data);
        console.log(ne, sw);
        return data;
    } catch (error) {
        console.log(error);
    }
}