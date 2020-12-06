import React from 'react';
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
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`);
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
    <h1>What's the waether like?</h1>
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
    
  );}
}

export default App;
