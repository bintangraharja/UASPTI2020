import React from 'react';

const Weather = (props) =>{
    return(
        <div>
            {props.city && <p>Location : {props.city}</p>}
            {props.temperature &&<p>Temperature : {props.temperature}&#176;</p>}
            {props.humidity &&<p>Humidity : {props.humidity}</p>}
            {props.pressure &&<p>Pressure : {props.pressure}</p>}
            {props.icon && <img className="kondisi" src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`} alt="weather icon"/> }
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}
export default Weather;