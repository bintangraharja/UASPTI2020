import './App.css';
import Header from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
    </>
  );
}

export default App;
