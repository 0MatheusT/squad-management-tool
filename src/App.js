import './App.css';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <CreateTeam/>
      <Footer />
    </div>
  );
}

export default App;
