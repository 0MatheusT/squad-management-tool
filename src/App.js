import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <Router>
      <NavBar /> 
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/create-team' component={CreateTeam} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
