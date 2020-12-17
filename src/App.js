import React, { useEffect, useState } from 'react';
import { fetchCurrent } from './api/current-api';
import 'antd/dist/antd.css';
import './App.css';
import pressure from './components/aset/pressure.png';
import humadity from './components/aset/humadity.png';
import wind from './components/aset/wind.png';
import pin from './components/aset/pin.png';
import AboutUs from './pages/aboutus';
import Forecast from './pages/forecast';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Layout, Row, Col, BackTop } from 'antd';
import {Button} from 'evergreen-ui';
import axios from 'axios';
const { Content } = Layout;

const backtop = {height: 40, width: 40, lineHeight: '40px', borderRadius: 4, 
backgroundColor: '#1088e9', color: '#fff', textAlign: 'center', fontSize: 14,
};
export const useCurrentLocation = (options = {}) =>{
const [error,setError] = useState();
const [location, setLocation] = useState();
useEffect(() => {
  if(!navigator.geolocation){
    setError('Geolocation is not supported');
    return;
  }
  navigator.geolocation.getCurrentPosition(handleSuccess,handleError, options);
},[options]);
const handleError = error =>{
  setError(error.massage);
};
const handleSuccess = position => {
  const {latitude, longitude } = position.coords;

  setLocation({
    latitude,
    longitude
  });
};
return { location, error};
};
export const geolocationOptions = {
  timeout: 1000 * 60 * 1
};

const Current = () =>{
  const { location , error} = useCurrentLocation(geolocationOptions);
  const [query,setQuery]= useState('');
  const [current,setCurr]= useState({});

  useEffect(()=>{
  if(location){
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=3088f17d218519ad800639fb54e469ed`;
    const fetchData = async()=>{
      await axios
      .get(URL)
      .then((response)=>{
        setCurr(response.data);
      });
    }
    fetchData();
  }
  },[location, error]);

  const [fahrenheit,setFah]= useState({
    status:false,
    degree:'50'
  });

  const getFah = () =>{
    const temp = (current.main.temp * 9 / 5) +32;
    setFah({
      status: true,
      degree: temp
    })
  }  
  const getCel = () => {
    setFah({
      status:false
    })
  } 
  const search = async(e) =>{
  if(e.key === 'Enter'){
      const data = await fetchCurrent(query)
      setCurr(data);
      console.log(data);
      setQuery('');
    }
  }
  return(
    <Content className="home">
    <Row className="headsub" justify="center">
        <div className="subtitle">HOME</div>
        {(!fahrenheit.status)?
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
    </Row>
    <Row justify="center">
        <input className="inputplace" type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="Search City"></input>
    </Row>
    {current.main && (
    <Row justify="center">
      <div className="site-card-border-less-wrapper">
        <Card title="Current Weather" className="cardhome">
          <h1><img src={pin} className="simbol" alt="pin"/>{current.name},{current.sys.country}</h1>
          <p>blablabla</p>
          <img className="simbol" alt="weather" src={`https://openweathermap.org/img/w/${current.weather[0].icon}.png`}/>
          <p>{current.weather[0].description}</p>
          {(!fahrenheit.status)?
          <h2>{current.main.temp}	&#8451;</h2>:
          <h2>{fahrenheit.degree} &#8457;</h2>}
          <Row gutter={16}>
          <Col span={8}>
            <img src={pressure} className="simbol" alt="pressure"></img>
            <p>Pressure</p>
            <p>{current.main.pressure} hPa</p>
          </Col>
          <Col span={8}>
            <img src={humadity} className="simbol" alt="humidity"></img>
            <p>Humidity</p>
            <p>{current.main.humidity}%</p>
          </Col>
          <Col span={8}>
            <img src={wind} className="simbol" alt="wind"></img>
            <p>Wind</p>
            <p>{current.wind.speed} m/s</p>
          </Col>
          </Row>
        </Card>
      </div>
    </Row>
    )}
    </Content>
  );
}

function App(){
  
  return(
    <Layout>
    <Router>
      <Navbar/>
      <Route exact path="/"  component={Current}/>
      <Route exact path="/forecast" component={Forecast}/>
      <Route exact path="/aboutus" component={AboutUs} /> 
      <BackTop>
        <div style={backtop}>UP</div>
      </BackTop>
    </Router>
    </Layout>
  )
}

export default App;