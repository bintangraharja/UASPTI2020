import React from 'react'

function Forecast() {
    return (
        <div className='forecast'>
            <div className="weatherContainer">
                <WeatherBody day={'Monday'} icon='Sun'/>
                <WeatherBody day={'Tuesday'} icon='Mistake'/>
                <WeatherBody day={'Wednesday'} icon='Snowing'/>
                <WeatherBody day={'Thursday'} icon='Rain'/>
                <WeatherBody day={'Friday'} icon='Snowing'/>
                <WeatherBody day={'Saturday'} icon='Sun'/>
                <WeatherBody day={'Sunday'} icon='Mistake'/>
            </div>
        </div>
    )
}

export default Forecast
