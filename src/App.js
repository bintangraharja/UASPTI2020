import {Button, PinIcon} from 'evergreen-ui';
import './App.css';
import Header from './components/header.js';

function App() {
  return (
    <div className="container">
    <Header/>
      <div className="tempBtn">
        <Button>C</Button>
        <Button>F</Button>
      </div>
      <div className="judul">
        <PinIcon size={30}/>Current's Location
      </div>
      
    </div>
  );
}

export default App;
