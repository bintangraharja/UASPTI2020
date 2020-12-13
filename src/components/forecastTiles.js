import React, { Component } from "react";
import DetailedInfo from "./detailinfo";
import {Collapse, Row} from 'antd';

const { Panel } = Collapse;
export default class ForecastTiles extends Component {

  // Filters the data by date and returns an Object containing a list of 5-day forecast.
  _groupByDays = data => {
    return (data.list.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0,10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;
    }, {}));
  };

  _getDayInfo = data => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

 _getIcon = data => `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;

  _getInfo = (data, min=[], max=[], humidity=[]) => {
    data.map(item => {
      max.push(item.main.temp_max);
      min.push(item.main.temp_min);
      humidity.push(item.main.humidity);
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
    const tiles = Object.values(this._groupByDays(forecasts));


    const forecastTiles = tiles.length > 5 ? tiles.slice(1, 6) : tiles;

    return (
      <div className="forecast-tiles">
        {forecastTiles.map((item, i) => (
          <div
            className={`forecast-tile tile-${i}`}
            key={i}
            ref={`div-${i}`}>
            <Collapse>
            <Row justify="center">
            <div className="primary-info">
            <img src={this._getIcon(item)} />
            {this._getDayInfo(item)}
            {this._getInfo(item)}
            </div>
            </Row>
            <Panel showArrow={false}  >
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