import {Button, PinIcon} from 'evergreen-ui';
import React, { useState }from 'react';
import './App.css';
import AboutUs from './components/aboutus';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from './components/form';
import Weather from './components/weather';
import Forecast from './components/forecast';


const api_key = "3088f17d218519ad800639fb54e469ed";
function App() {
 const [state,setState] =useState({
    temperature: "",
    city:"",
    country:"",
    humidity: "",
    pressure: "",
    icon: "",
    description:"",
    error: ""
  });
  const [ temp, setTemp] = useState("metric");
  const getWeather = async(e) => {
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
      setState({
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
      setState({
        error:"Please fill out input fields..."
      })
    }
  }
  const getCel = () =>{
    setTemp("metric")
    alert('Please Re-Get')
  }
  const getFah =() =>{
    setTemp("imperial")
    alert("Please Re-Get")
  }
  return (
    <div className="container">
  
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'  component={Weather}/>
        <Route exact path='/forecast' component={Forecast}/>
        <Route exact path='/aboutus' component={AboutUs}/>
      </Switch>
    </Router>
      {(temp === "metric")?
       <div className="tempBtn">
      <Button appearance="primary" intent="success" onClick={getCel} >C</Button>
      <Button onClick={getFah}>F</Button>
      </div>
      :
      <div className="tempBtn">
      <Button  onClick={getCel}>C</Button>
      <Button appearance="primary" intent="success" onClick={getFah}>F</Button>
      </div>
      }  
      <div className="judul">
        <PinIcon size={30}/>Current's Location
        <Form loadWeather={getWeather}/>
    <Weather
     temperature= {state.temperature}
     city= {state.city} 
     country= {state.country}
     humidity = {state.humidity}
     pressure = {state.pressure}
     icon= {state.icon}
     description = {state.description}
     error = {state.error}
    />
    <AboutUs />
        
      </div>
  
    </div>
    
  );
}


export default App;
