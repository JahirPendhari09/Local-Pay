import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
