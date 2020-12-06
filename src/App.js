import {Button, PinIcon} from 'evergreen-ui';
import React, { useState }from 'react';
import './App.css';
import Header from './components/header.js';
import Form from './components/form';
import Weather from './components/weather';

const api_key = "3088f17d218519ad800639fb54e469ed";


class App extends React.Component {
  
  state = {
    temperature: "",
    city:"",
    country:"",
    humidity: "",
    pressure: "",
    icon: "",
    description:"",
    error: ""
  } 
  getCel = () =>{
    setTemp = "metric";
  }
  getFah = () =>{
    temp = "imperial";
  }
  getWeather = async(e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=3088f17d218519ad800639fb54e469ed`);
    const location = await api_call2.json();
    console.log(api_call2.ok);
    const lat = location.coord.lat;
    const lon = location.coord.lon;
    console.log(lat);
    console.log(lon);
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${temp}&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);
    console.log(api_call.ok);
    if(lat && lon){
      this.setState({
        temperature: response.current.temp,
        city: city,
        country: country,
        humidity: response.current.humidity,
        pressure: response.current.pressure,
        icon: response.current.weather[0].icon,
        description:response.current.weather[0].description,
        error: " "
      })
    }else{
      this.setState({
        error:"Please fill out input fields..."
      })
    }
  }
  render(){return (
    <div className="container">
    <Header/>
      <div className="tempBtn">
      {(temp = "metric")?  <Button appearance="primary" intent="success" onClick={this.getCel} >C</Button>: <Button onClick={this.getCel} >C</Button>}
      {(temp = "imperial")? <Button appearance="primary" intent="success" onClick={this.getFah}>F</Button>:<Button onClick={this.getFah}>F</Button>}
        
      </div>
      <div className="judul">
        <PinIcon size={30}/>Current's Location
        <Form loadWeather={this.getWeather}/>
    <Weather
     temperature= {this.state.temperature}
     city= {this.state.city} 
     country= {this.state.country}
     humidity = {this.state.humidity}
     pressure = {this.state.pressure}
     icon= {this.state.icon}
     description = {this.state.description}
     error = {this.error}
    />
      </div>
  
    </div>
    
  );}
}

export default App;
