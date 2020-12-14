import React, { useState } from 'react';
import { fetchForecast } from '../api/forecast-api';
import ForecastTiles from '../components/forecastTiles';
import '../App.css';
import 'antd/dist/antd.css';
import { Row, Col} from 'antd';


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
    <div className="subtitle">Forecast</div>
    <Row>
        <input className="inputplace" type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="city"></input>
    </Row>
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
