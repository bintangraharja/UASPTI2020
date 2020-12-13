import React, { useState } from 'react';
import { fetchForecast } from '../api/forecast-api';
import '../App.css';


function Forecast(){
  const [query,setQuery]= useState('');
  const [forecast,setFore]= useState({});
  
  
  const search = async(e) =>{
  if(e.key === 'Enter'){
      const data = await fetchForecast(query)
      setFore(data);
      console.log(data);
      setQuery('');
    }
  }
  return(
  <div>
        <input type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="city"></input>
        {forecast.main && (
          <div>
            <h2>
              {forecast.name}
            </h2>
          </div>
        )}
    </div>
  );
}

export default Forecast;
