import React, { useState } from 'react';
import { fetchCurrent } from './api/current-api';
import './App.css';
import AboutUs from './pages/aboutus';
import Forecast from './pages/forecast';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Layout, Row, Col, Divider} from 'antd';
const {  Content } = Layout;


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
    <Col span={4} className="subtitle">Home</Col>
    <Row justify="center">
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <input className="inputplace" type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="search city"></input>
      </Col>
    </Row>
    <Row justify="center">
        {current.main && (
            <Card title={current.name} style={{width: 300}}>
              <p>{current.name}</p>
              <p>aksfjrhqrkjhasdlnal</p>
            </Card>
        )}
    </Row>
    </Content>
  );
}


export default App;
