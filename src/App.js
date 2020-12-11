import React, { useState } from 'react';
import { fetchCurrent } from './api/current';
import './App.css';
import Form from './components/form';

var angka = 0;
function App(){
  const [query,setQuery]= useState('');
  const [current,setCurr]= useState({});
  const [bilangan,setBil] = useState(0);
  
  const search = async(e) =>{
    if(e.key === 'Enter'){
      const data = await fetchCurrent(query)
      setCurr(data);
      console.log(data);
      setQuery('');
    }
  }

 const increament = () =>{
   angka = angka + 1;
  console.log(angka);
   return;
 }
  
  return(
    <div>
      <Form query={setQuery} search={search}/>
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
        {angka}
        <button onClick={increament()}>+</button>
    </div>
  )
}


export default App;
