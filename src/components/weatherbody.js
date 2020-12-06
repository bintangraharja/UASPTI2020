import React from 'react';

const WeatherBody = (props) =>{
    return(
        <div className="WeatherBody card">
            <Days day={props.day}/>
        </div>
    );
}