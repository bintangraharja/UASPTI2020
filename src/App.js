import {Button, PinIcon} from 'evergreen-ui';
import React, { useState }from 'react';
import './App.css';
import AboutUs from './components/aboutus';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from './components/form';
import Weather from './components/weather';
import Forecast from './components/forecast';

const api_key = "3088f17d218519ad800639fb54e469ed";
function App() {
 const [state,setState] =useState({
    dt:"",
    temperature: "",
    city:"",
    humidity: "",
    pressure: "",
    icon: "",
    description:"",
    error: "",
    daily:[{
      iconf:"",
      minTempf:"",
      maxTempf:"",
      descriptionf:""
    },{
      iconf:"",
      minTempf:"",
      maxTempf:"",
      descriptionf:""
    },{
      iconf:"",
      minTempf:"",
      maxTempf:"",
      descriptionf:""
    },{
      iconf:"",
      minTempf:"",
      maxTempf:"",
      descriptionf:""
    },{
      iconf:"",
      minTempf:"",
      maxTempf:"",
      descriptionf:""
    }]
  });
  const [ temp, setTemp] = useState("metric");
  const getWeather = async(e) => {
    const city = e.target.elements.city.value;
    if(city.length < 1){
      alert("City must longer")
    }
    else{
    e.preventDefault();
    const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3088f17d218519ad800639fb54e469ed`);
    const location = await api_call2.json();
    console.log(api_call2.ok);
    if(location.cod === "404"){
      alert("Kota tidak Ditemukan!")
    }else{
    const lat = location.coord.lat;
    const lon = location.coord.lon;
    if(city){
    console.log(lat);
    console.log(lon);
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${temp}&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);
    console.log(api_call.ok);
    setState({
        dt: response.current.dt,
        temperature: response.current.temp,
        city: city,
        humidity: response.current.humidity,
        pressure: response.current.pressure,
        icon: response.current.weather[0].icon,
        description:response.current.weather[0].description,
        error: " ",
        daily:[{
          iconf: response.daily[0].weather[0].icon,
          minTempf: response.daily[0].temp.min,
          maxTempf: response.daily[0].temp.max,
          descriptionf: response.daily[0].weather[0].description
        },{
        iconf: response.daily[1].weather[0].icon,
        minTempf: response.daily[1].temp.min,
        maxTempf: response.daily[1].temp.max,
        descriptionf: response.daily[1].weather[0].description
        },{
        iconf: response.daily[2].weather[0].icon,
        minTempf: response.daily[2].temp.min,
        maxTempf: response.daily[2].temp.max,
        descriptionf: response.daily[2].weather[0].description
        },{
        iconf: response.daily[3].weather[0].icon,
        minTempf: response.daily[3].temp.min,
        maxTempf: response.daily[3].temp.max,
        descriptionf: response.daily[3].weather[0].description
        },{
        iconf: response.daily[4].weather[0].icon,
        minTempf: response.daily[4].temp.min,
        maxTempf: response.daily[4].temp.max,
        descriptionf: response.daily[4].weather[0].description
        }]
      })
    }else{
      setState({
        error:"Please fill out input fields..."
      })
    }}
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
        <Route exact path='/' component={Weather} />
        <Route exact path='/forecast' component={Forecast} />
        <Route exact path='/aboutus' component={AboutUs} />
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
        <PinIcon size={30}/>Location's Weather
        <Form loadWeather={getWeather}/>
        <Weather
        temperature= {state.temperature}
        city= {state.city} 
        humidity = {state.humidity}
        pressure = {state.pressure}
        icon= {state.icon}
        description = {state.description}
        error = {state.error}
        />
        <Forecast day={'Mon'} icon={state.daily[0].iconf} minTemp={state.daily[0].minTempf} maxTemp={state.daily[0].maxTempf} description={state.daily[0].descriptionf} />
        <Forecast day={'Tue'} icon={state.daily[1].iconf} minTemp={state.daily[1].minTempf} maxTemp={state.daily[1].maxTempf} description={state.daily[1].descriptionf} />
        <Forecast day={'Wed'} icon={state.daily[2].iconf} minTemp={state.daily[2].minTempf} maxTemp={state.daily[2].maxTempf} description={state.daily[2].descriptionf} />
        <Forecast day={'Thu'} icon={state.daily[3].iconf} minTemp={state.daily[3].minTempf} maxTemp={state.daily[3].maxTempf} description={state.daily[3].descriptionf} />
        <Forecast day={'Fri'} icon={state.daily[4].iconf} minTemp={state.daily[4].minTempf} maxTemp={state.daily[4].maxTempf} description={state.daily[4].descriptionf} />
     
         </div>

    <Footer />
  
    </div>
  );
}


export default App;
