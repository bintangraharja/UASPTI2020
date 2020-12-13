import React, { useState } from 'react';
import { fetchCurrent } from './api/current-api';
import 'antd/dist/antd.css';
import './App.css';
import AboutUs from './pages/aboutus';
import Forecast from './pages/forecast';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { BackTop } from 'antd';

const backtop = {height: 40,width: 40,lineHeight: '40px',borderRadius: 4,
  backgroundColor: '#1088e9',color: '#fff',textAlign: 'center',fontSize: 14,
};
function App(){
  return(
    <Router>
      <Navbar/>
      <Route  exact path="/"  component={Current}/>
      <Route exact path="/forecast" component={Forecast}/>
      <Route exact path="/aboutus" component={AboutUs} /> 
      <BackTop>
        <div style={backtop}>UP</div>
      </BackTop>
    </Router>
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
  <div>
        <input type="text"  value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} placeholder="city"></input>
        {current.main && (
          <div>
            <h2>
              {current.name}
            </h2>
          </div>
        )}
    </div>
  );
}


export default App;
