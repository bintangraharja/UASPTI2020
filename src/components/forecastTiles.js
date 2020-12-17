import React, { Component } from "react";
import DetailedInfo from "./detailinfo";
import {Collapse} from 'antd';
const { Panel } = Collapse;

export default class ForecastTiles extends Component {

  _Days = data => {
    return (data.list.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0,10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;
    }, {}));
  };

  _DayInfo = data => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

 _getIcon = data => `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
_getDesc = data => {
  return data[0].weather[0].description;
}
  _getInfo = (data, min=[], max=[], humidity=[]) => {
    data.map(item => {
      return(
      max.push(item.main.temp_max),
      min.push(item.main.temp_min),
      humidity.push(item.main.humidity)
      )
    });

    const minMax = {
      min: Math.round(Math.min(...min)),
      max: Math.round(Math.max(...max)),
    };

    const avgHumdity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length);

    return (
      <div className="weather-info">
        <div className="min-max">
          <strong>{`${minMax.max}°C`}</strong> / {`${minMax.min}°C`}
        
          {` Avg. Humidity: ${avgHumdity}%`}
        </div>
      </div>
    );
  };

 

  render() {

    const { forecasts } = this.props;
    const tiles = Object.values(this._Days(forecasts));
    const forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;

    return (
      <div >
        {forecastTiles.map((item, i) => (
          <div
            key={i}
            ref={`div-${i}`}>
            <Collapse>
            <div className="center">
              <p>
                <img src={this._getIcon(item)} alt="icon hourly"/>
                {this._DayInfo(item)} <br/>
                {this._getDesc(item)}
                {this._getInfo(item)}
              </p>
            </div>
            
            <Panel header="Click Here" showArrow={false} >
            <div className="detailed-info" key={i}>
              <DetailedInfo data={item} />
            </div>
            </Panel>
            </Collapse>
          </div>
        ))}
      </div>
    );
  }
}