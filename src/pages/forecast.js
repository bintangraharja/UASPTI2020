import React, { useEffect, useState } from 'react';
import { fetchForecast } from '../api/forecast-api';
import ForecastTiles from '../components/forecastTiles';
import 'antd/dist/antd.css';
import '../App.css';
import { Row, Layout } from 'antd';
import axios from 'axios';
import {useCurrentLocation, geolocationOptions} from '../App'
const { Content } = Layout;


function Forecast(){
  const { location , error} = useCurrentLocation(geolocationOptions);
  const [query,setQuery]= useState('');
  const [forecast,setFore]= useState({});
  const [newdate,setDate]= useState('');
  
  useEffect(()=>{
    if(location){
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=3088f17d218519ad800639fb54e469ed`;
      const fetchData = async()=>{
        await axios
        .get(URL)
        .then((response)=>{
          setFore(response.data);
          searchdate(response.data);
          console.log(response.data);
        });
      }
      fetchData();
    }
    },[location, error]);
  
  const search = async(e) =>{
  if(e.key === 'Enter'){
      const data2 = await fetchForecast(query)
      setFore(data2);
      searchdate(data2);
      setQuery('');
    }
  }

  const searchdate = data =>{
    const date = data.list[0].dt_txt.slice(0,10);
    setDate(date);
  }

  return(
  <Content className="home">
  <div className="subtitle">Forecast</div>
      <Row justify="center">
        <input className="inputplace" type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="Search City"></input>
      </Row>
        {forecast.city && (
          <div className="weather-forecast-wrapper">
            <h2>
            {forecast.city.name}
            </h2>
            <p>{newdate}</p>
            <ForecastTiles forecasts={forecast}/>
          </div>
        )}
    </Content>
  );
}

export default Forecast;
