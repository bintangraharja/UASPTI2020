import React, { useState } from 'react';
import { fetchCurrent } from './api/current-api';
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
import { Card, Layout, Row, Col } from 'antd';
const { Content } = Layout;


function App(){
  return(
    <Layout>
    <Router>
      <Navbar/>
      <Route exact path="/"  component={Current}/>
      <Route exact path="/forecast" component={Forecast}/>
      <Route exact path="/aboutus" component={AboutUs} /> 
    </Router>
    </Layout>
  )
}

const Current = () =>{
  const [query,setQuery]= useState('');
  const [current,setCurr]= useState({});
  
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
    <div className="subtitle">Home</div>
    <Row justify="center">
        <input className="inputplace" type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="Search City"></input>
    </Row>
    {current.main && (
    <Row justify="center">
      <div className="site-card-border-less-wrapper">
        <Card title="Current Weather" style={{ width: 500}}>
          <h1><img src={pin} className="simbol"/>{current.name},{current.sys.country}</h1>
          <p>2020 - 12 - 14</p>
          <h2>{current.main.temp}	&#8451;</h2>
          <Row gutter={16}>
          <Col span={8}>
            <img src={pressure} className="simbol"></img>
            <p>Pressure</p>
            <p>{current.main.pressure} hPa</p>
          </Col>
          <Col span={8}>
            <img src={humadity} className="simbol"></img>
            <p>Humadity</p>
            <p>{current.main.humidity}%</p>
          </Col>
          <Col span={8}>
            <img src={wind} className="simbol"></img>
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


export default App;
