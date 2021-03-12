import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
