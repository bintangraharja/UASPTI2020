import React from 'react';

const Forecast = (props) =>{
    return(
        <div >
            {props.icon && <div className="Days">{props.day}</div>}
            {props.icon && <img className="kondisi" src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`} alt="weather icon"/>}
            {props.minTemp && props.maxTemp &&
            <div className="Temp">
                <span className="min">{props.minTemp}&#176;</span>
                <span className="max">{props.maxTemp}&#176;</span>
            </div>}
        </div>
    );
}
export default Forecast