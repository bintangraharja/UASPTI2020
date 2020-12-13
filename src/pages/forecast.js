import React, { useState } from 'react';
import { fetchForecast } from '../api/forecast-api';
import ForecastTiles from '../components/forecastTiles';
import '../App.css';


function Forecast(){
  const [query,setQuery]= useState('');
  const [forecast,setFore]= useState({});
  
  
  const search = async(e) =>{
  if(e.key === 'Enter'){
      const data2 = await fetchForecast(query)
      setFore(data2);
      console.log(data2);
      setQuery('');
    }
  }
  return(
  <div>
        <input type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="city"></input>
        {forecast.city && (
          <div className="weather-forecast-wrapper">
            <h2>
            {forecast.city.name}
            </h2>
            <ForecastTiles forecasts={forecast}/>
          </div>
        )}
    </div>
  );
}

export default Forecast;
