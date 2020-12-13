import React from "react";
import {TimeIcon} from 'evergreen-ui';
const DetailedInfo = ({ data }) => {

  const getHour = time => time ? new Date(time).getHours() : new Date().getHours();
  const getDate = date => date ? new Date(date).getDate() : new Date().getDate();

  const displayMoreInfo = (item, i) => {
    return (
      <div className="hourly-info" key={i}>
         <p>
        <TimeIcon/> {`${getHour(item.dt * 1000)}:00`} =
          {`${Math.round(item.main.temp)}°C`}
          
        </p>
      </div>
    );
  };

  return (

    <div className="hourly">
        
      {data.map((item, i) => (
        (getHour(item.dt * 1000) > getHour() && getDate(item.dt * 1000) === getDate()) ? (
          displayMoreInfo(item, i)
         ) : getHour(item.dt * 1000) >= 5 && getHour(item.dt * 1000) <= 23 ? (
            displayMoreInfo(item, i)
         ) : null
      ))}
    </div>
  );
};

export default DetailedInfo;