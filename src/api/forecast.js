import axios from 'axios';

const URL ='https://api.openweathermap.org/data/2.5/forecast';
const api_key = "3088f17d218519ad800639fb54e469ed";

export const fetchForecast = async (query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q: query,
            units: 'metric',
            APPID: api_key,
        }
    });
    return data;
}