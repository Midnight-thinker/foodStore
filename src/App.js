import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className='row md-3 lg-6'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
